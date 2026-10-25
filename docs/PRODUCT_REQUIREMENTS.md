# Kids Chess Academy — Product Requirements

**Status:** Phase 0 draft for review  
**Prototype brand:** Little Knights  
**Platforms:** Web and Android from the beginning  
**Target ages:** 5–13  
**Curriculum target:** 114 learning hours  
**Age bands:** 5–7, 8–10, 11–13  
**Date:** 2026-10-25

## 1. Vision

Deliver a child-friendly, mastery-based chess learning product that combines structured lessons, legal chess practice, puzzles, age-appropriate feedback, an AI/voice coach, and parent visibility. Web and Android are first-class platforms from the beginning. They must share curriculum identifiers, mastery rules, progress semantics, and backend contracts.

## 2. Goals

1. Teach chess from first principles through progressive, age-appropriate learning.
2. Map a complete 114-hour curriculum to measurable objectives and mastery evidence.
3. Adapt instruction and interaction for ages 5–7, 8–10, and 11–13.
4. Provide reliable legal chess play, validated puzzles, and position-aware feedback.
5. Provide an AI/voice coach with child-safe behavior, transparent limitations, and controlled data use.
6. Give parents and, in a later controlled release, instructors useful learning summaries.
7. Maintain consistent learning behavior across web and Android.
8. Clearly label sample data, simulated integrations, and demo-only behavior.

## 3. Initial scope and non-goals

**Foundations MVP:** onboarding/account boundary, curriculum journey, Levels/Modules approved for the first release, guided lessons, rules-engine-backed practice board, validated puzzles, hints, progress persistence, basic parent view, and a safe coach experience with a clear fallback.

Not in the initial MVP unless separately approved: public child profiles, child-to-child messaging, behavioral advertising, live matchmaking/tournaments, full academy administration, payments/subscriptions, or claims that AI is authoritative for chess legality.

## 4. Users and roles

- **Learner:** follows lessons, practices, solves puzzles, receives feedback, and tracks progress.
- **Parent/guardian:** manages access and consent where required, reviews progress, and uses privacy/account controls.
- **Coach/instructor (later):** accesses only assigned learners and activities.
- **Academy administrator (later):** manages approved content and academy settings with audited privileged access.

Every learner-specific data request must be authorized server-side. A client-supplied learner ID alone is never proof of access.

## 5. Age-band design

| Band | Instructional emphasis | Interaction | Feedback |
|---|---|---|---|
| 5–7 | Piece recognition, concrete examples, short activities, repetition | Large targets, visual/audio cues, minimal reading | Immediate, encouraging, one idea at a time |
| 8–10 | Rules, tactics, planning, guided problem solving | Short explanations, diagrams, optional hints | Explain why a move works or fails |
| 11–13 | Deeper tactics, calculation, strategy, game review | More notation and adjustable analysis depth | Specific, respectful, reasoning-oriented |

Age band adapts presentation; it does not replace skill assessment. Progression should reflect demonstrated mastery.

## 6. Curriculum and mastery

The 114-hour total is a product requirement, but the detailed lesson inventory, hour allocation, and mastery thresholds must be approved in a separate curriculum baseline. A previously discussed 12-level / 30-week pathway remains a planning hypothesis until reconciled with the 114-hour total.

Every learning unit should define objectives, prerequisites, age-band variants, instruction, guided and independent practice, assessment items, mastery criteria, retry/remediation behavior, estimated active learning time, accessibility alternatives, and version/reviewer status.

Recommended loop:
1. Introduce a concept and demonstrate it.
2. Guide practice on a board or example.
3. Assess with varied items.
4. Explain errors and offer a hint or remediation.
5. Reassess with a different item.
6. Record mastery only when configured evidence criteria are met.
7. Schedule review where useful.

Lesson completion and concept mastery are distinct. Time spent or a “complete” button must not alone award mastery.

## 7. Functional requirements

### FR-01 Onboarding and accounts
Use an adult-managed account/consent path appropriate to launch jurisdictions. Collect only necessary information. Production authentication, recovery, and authorization must be server-side.

### FR-02 Learning journey
Show versioned levels/modules/lessons, objectives, prerequisites, estimated time, and states such as locked, available, in progress, completed, and mastered. Explain how to proceed and support resume across devices.

### FR-03 Chess practice and puzzles
Use a tested chess rules library as the authority for legal moves, check/checkmate, stalemate, castling, en passant, promotion, draw rules, and game state. Reject illegal moves, validate puzzle positions/solutions, support clear move history and practice restart/undo, and explain rules in age-appropriate language. AI must never determine legality.

### FR-04 AI coach
Use validated board state and lesson objective as bounded context. Separate deterministic chess facts from natural-language explanation. Support age-appropriate hints, output checks, rate/cost limits, and safe fallback. Avoid unmoderated social chat. Do not send unnecessary profile/family data to the model.

### FR-05 Voice
Make voice optional, with text alternatives, mute controls, microphone/recording indicators, and accessible failure states. Define processing location and retention before launch. Any simulated voice behavior must be explicitly labelled.

### FR-06 Progress and motivation
Track lesson attempts, assessment evidence, puzzle outcomes, and practice activity with defined semantics. Reward effort and reflection, not only wins or speed. Avoid punitive streaks. Production metrics must be derived from persisted events.

### FR-07 Parent dashboard
Show activity, concepts practiced/mastered, areas to revisit, and next-step suggestions. Protect summaries behind real guardian authorization. Distinguish observed activity from recommendations and live data from sample data.

### FR-08 Instructor/academy capabilities
Scope class management and assignments as a later phase unless explicitly added. Enforce least privilege and learner-to-class relationships.

### FR-09 Cross-platform parity
Share curriculum IDs, mastery rules, API contracts, and account/progress semantics. Test onboarding, lesson resume, practice, feedback, progress, and parent review on both platforms. Handle touch, Android lifecycle, network loss, and app resume.

### FR-10 Simulation labels
Clearly label simulated AI/voice, sample metrics, mock connections, and unpersisted actions. Demo mode must not imply real data storage or live services. Production must not silently substitute mock data while presenting it as live.

## 8. Non-functional requirements

- **Child safety/privacy:** data minimization, adult controls, documented retention/deletion, and review for launch jurisdictions.
- **Security:** TLS, protected secrets, secure sessions, server-side authorization, rate limits, audit events for privileged actions, and dependency maintenance.
- **Reliability:** defined offline/retry behavior, safe progress recovery, idempotent writes, and clear unsynced/error states.
- **Performance:** set measurable targets for lesson start, board interactions, API latency, and mid-range Android devices during architecture validation.
- **Accessibility:** contrast, scalable text, screen-reader labels, keyboard support on web, adequate touch targets, reduced motion, and text alternatives to audio.
- **Maintainability:** versioned curriculum/API contracts and CI checks for linting, tests, security, and Android builds.
- **Observability:** production error and service-health metrics without unnecessary child content or secrets in logs.
- **Localization:** design for translation; initial languages require a product decision.

## 9. MVP acceptance criteria

1. An approved Foundations learning path works on web and Android.
2. The board correctly validates legal moves and special/terminal cases using a tested rules engine.
3. Lessons, guided practice, puzzles, hints, and feedback are consistent across platforms.
4. Mastery is based on approved assessment evidence, not elapsed time or UI clicks.
5. Progress persists and syncs according to documented offline/retry rules.
6. Parent summaries are visible only to authorized guardians.
7. Real vs simulated AI/voice behavior is visible and testable through configuration.
8. Functional, accessibility, security, and cross-platform regression tests pass.
9. Consent, retention/deletion, incident response, and support procedures are reviewed before a child-facing pilot.
10. Demo fixtures are labelled and excluded from production analytics.

## 10. Decisions required

- Launch countries and languages; privacy/legal review scope.
- Web framework, Android framework, backend/cloud provider, database, and data residency.
- Parent-owned account model and guardian/learner relationship rules.
- Exact 114-hour curriculum allocation and mastery thresholds.
- AI provider, data flow, moderation, cost limits, and fallback.
- Voice provider, processing, and retention.
- Offline expectations and minimum supported Android versions/devices.
- Whether live play, academy classes, and payments are in the first release.

## 11. Phase 0 exit criteria

- Product roles, scope, and acceptance criteria reviewed.
- Curriculum model and open decisions documented.
- Architecture/trust boundaries reviewed.
- Existing prototype audited against requirements.
- Risks and Phase 1 implementation sequence approved.
