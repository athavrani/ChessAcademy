# Phase 5 — Parent Experience and Account Controls

**Goal:** Give guardians a useful, accurate view of learning while protecting learner data and providing meaningful account/privacy controls.
**Prerequisite:** Authenticated persisted learner progress and a reviewed guardian relationship/consent model.
**Status:** Planned; no production identity or parent dashboard is implied by this document.

## Scope

- Guardian account and authorized learner selection.
- Progress summary based on persisted, server-validated events.
- Concepts practiced/mastered, areas to revisit, and next-step suggestions.
- Account, consent, export, correction, deletion, and support flows as required for launch jurisdictions.
- Auditing for privileged actions and access to learner records.

Instructor/classroom tools are a separate scope decision and should not be assumed included.

## Work packages

### P5.1 Guardian relationship and consent
- [ ] Finalize adult-managed account and guardian verification approach.
- [ ] Define relationship creation, verification, revocation, and transfer scenarios.
- [ ] Define consent types, policy versions, withdrawal behavior, and records where applicable.
- [ ] Enforce guardian scope on every API request, including background/reporting jobs.
- [ ] Prevent client-supplied learner IDs from granting access.
- [ ] Test multiple guardians, revoked relationships, account recovery, and unauthorized access.

### P5.2 Parent dashboard
- [ ] Show recent learning activity and lesson progress with clear time range.
- [ ] Show concepts practiced/mastered and areas needing more evidence.
- [ ] Distinguish observed results from recommendations and estimates.
- [ ] Avoid public comparisons, misleading rankings, and unsupported diagnostic claims.
- [ ] Ensure all summary metrics are derived from server-authoritative data.
- [ ] Provide understandable loading, empty, stale, and error states.

### P5.3 Controls and data rights
- [ ] Provide account/session controls and guardian-facing privacy information.
- [ ] Define export format and verify the requesting guardian's authority.
- [ ] Define correction and deletion workflows, including downstream vendors and analytics.
- [ ] Document backup expiry and any retention exceptions.
- [ ] Make consent withdrawal affect future processing and explain consequences.
- [ ] Provide support escalation and confirmation that reflects actual completion state.

### P5.4 Security and audit
- [ ] Test cross-guardian read/write denial and direct-object-reference attacks.
- [ ] Audit sensitive actions without logging unnecessary learner content.
- [ ] Rate-limit sensitive account operations and protect recovery flows.
- [ ] Ensure admin/support access is least-privilege and auditable.

### P5.5 Usability and accessibility
- [ ] Test parent journeys with keyboard, screen reader, zoom, and mobile layouts.
- [ ] Use plain language for mastery, progress, and data controls.
- [ ] Validate translated/legal copy with appropriate reviewers.

## Acceptance criteria

- Guardians see only learners they are authorized to access.
- Every displayed metric has documented semantics and source data.
- Revoked access takes effect server-side.
- Export/deletion/correction workflows are tested and do not overstate completion.
- Empty, stale, and failed data states are clearly distinguished.
- Privacy/support documentation matches the actual product behavior.

## Exit evidence

Attach guardian authorization test results, dashboard metric definitions, consent/account-flow review, export/deletion verification, accessibility results, and release sign-off.
