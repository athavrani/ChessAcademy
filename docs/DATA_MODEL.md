# Logical Data Model

**Status:** Conceptual model only. No Prisma schema or database migration is implied by this document.
**Proposed database:** PostgreSQL with Prisma, subject to schema and privacy review.

## Modeling principles

- Separate identity-provider subjects from internal domain IDs.
- Model guardian relationships explicitly and authorize them server-side.
- Store curriculum content as versioned, reviewed records.
- Store attempts/evidence separately from derived progress summaries.
- Keep mastery policy versioned so historical outcomes remain explainable.
- Minimize personal data and define retention/deletion behavior before production.
- Never use real child data in development fixtures.

## Proposed entities

| Entity | Purpose | Key relationships |
|---|---|---|
| Account | Adult/guardian identity and account status | Has guardian relationships; linked to external identity subject |
| Learner | Pseudonymous learner profile and age-band settings | Linked to one or more authorized guardians by relationship records |
| GuardianLearner | Relationship, status, consent/authority metadata | Account ↔ learner |
| CurriculumVersion | Immutable release/version of curriculum | Contains modules and lessons |
| Module | Ordered grouping of learning objectives | Belongs to curriculum version |
| Lesson | Versioned instructional unit and estimated time | Belongs to module; references objectives |
| LearningObjective | Stable skill/concept identifier | Linked to lessons and assessment items |
| AssessmentItem | Versioned question/puzzle/task and validation metadata | Maps to objectives |
| LessonAttempt | Learner's attempt at a lesson | References learner, lesson version, and events |
| AssessmentAttempt | Evidence from a particular item attempt | References learner, item version, attempt, and outcome |
| ProgressEvent | Append-oriented event describing activity/outcome | References learner and source activity |
| MasteryRecord | Derived status under a specific policy version | References objective, learner, evidence window, policy version |
| PracticeGame | Validated game session metadata and status | References learner and rules/engine version |
| GameMove | Validated move history, if persisted | Ordered within game; legality checked by trusted engine |
| ConsentRecord | Versioned consent/acknowledgement record where required | Guardian/account, policy version, timestamp and status |
| AuditEvent | Privileged/security-relevant action | Actor, action, target category, timestamp; minimize payload |

This list is a design starting point. Do not create every table at once; implement only what the approved vertical slice requires.

## Important constraints

- Use internal opaque IDs rather than exposing identity-provider subjects or sequential IDs.
- Store date/time in UTC; localize only in presentation.
- Define uniqueness and idempotency constraints for repeated submissions.
- Use transactions for operations that create evidence and update derived summaries.
- Prefer recomputable progress summaries where practical; do not treat cached summaries as primary evidence.
- Never trust client-calculated scores, legality, mastery, guardian role, or ownership.
- Keep audio/video out of the initial data model unless voice scope and retention are explicitly approved.

## Suggested event semantics

Potential events include `lesson_started`, `lesson_step_completed`, `assessment_submitted`, `puzzle_attempted`, `practice_game_finished`, and `mastery_updated`. Define a schema/version, timestamp, actor context, learner scope, source version, and minimal result payload for each event.

Events should not include raw access tokens, unnecessary profile attributes, full transcripts, or sensitive free text. Decide whether each event is retained, aggregated, or deleted under the retention schedule.

## Deletion and retention design

Before launch, specify:
- Account/learner deletion request handling and identity verification.
- Retention periods for attempts, progress, audit events, and backups.
- Legal holds or statutory exceptions, if applicable.
- Deletion/anonymization propagation to analytics and vendors.
- Backup expiry behavior and user-facing confirmation.
- Export format and scope for guardian data requests.

Do not promise immediate deletion from all backups until the technical process supports that claim.
