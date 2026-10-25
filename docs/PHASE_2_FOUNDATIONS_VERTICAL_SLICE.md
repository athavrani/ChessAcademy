# Phase 2 — Foundations Learning Vertical Slice

**Goal:** Prove the full learner journey with one approved lesson, one rules-engine-backed practice interaction, one validated puzzle, and server-persisted progress.
**Prerequisite:** Phase 1 foundation, architecture decisions needed for the slice, and approved sample lesson content.
**Status:** Planned; not implemented.

## Scope

Deliver one thin, end-to-end slice rather than a broad set of disconnected screens. Implement it for web and Android, or document a specific temporary platform gap with an owner and closure milestone.

### Included
- One versioned lesson with a measurable objective and prerequisite metadata.
- Instruction and guided practice.
- Chess board backed by a tested rules implementation.
- One expert-reviewed puzzle with deterministic validation.
- Hint and feedback flow.
- Authenticated learner attempt/progress persistence.
- Guardian-scoped access and negative authorization tests.
- Resume/retry behavior and clear loading, offline, and failure states.
- Demo fixtures isolated from production services.

### Excluded
- Full curriculum import.
- Open-ended AI chat or voice.
- Live matchmaking, public profiles, social features, payments, and academy administration.
- Claims of mastery until the approved mastery policy and sufficient evidence are implemented.

## Work packages

### P2.1 Content contract
- [ ] Define lesson, objective, step, puzzle, and assessment schemas.
- [ ] Assign immutable IDs and content version.
- [ ] Review lesson and puzzle positions/solutions with a qualified chess reviewer.
- [ ] Include accessibility alternatives and age-band presentation guidance.

### P2.2 Chess domain
- [ ] Select and pin the rules library after compatibility review.
- [ ] Define domain adapter for position loading, legal move application, terminal state, and history.
- [ ] Validate FEN/position inputs and reject invalid states.
- [ ] Add tests for wrong-turn moves, illegal moves, king safety, castling, en passant, promotion, check, checkmate, stalemate, and supported draw rules.
- [ ] Ensure LLM output cannot alter legality or official game state.

### P2.3 API and persistence
- [ ] Define reviewed OpenAPI contracts for lesson retrieval, attempt submission, puzzle attempt, and progress retrieval.
- [ ] Add database schema and migration only after schema/privacy review.
- [ ] Enforce authentication and guardian/learner authorization server-side.
- [ ] Validate request payloads and use idempotency for retryable writes.
- [ ] Persist source evidence separately from derived progress summaries.
- [ ] Define behavior for duplicate submissions, reconnects, and concurrent devices.

### P2.4 Web and Android
- [ ] Implement lesson player and guided board interaction.
- [ ] Implement puzzle submission, hint, and outcome explanation.
- [ ] Show explicit saved/unsaved states; do not claim success before server confirmation.
- [ ] Support resume, retry, keyboard/screen-reader access on web, and Android lifecycle/network changes.
- [ ] Verify both clients consume the same content IDs and server contracts.

### P2.5 Test and release
- [ ] Unit and integration tests for chess adapter and attempt rules.
- [ ] API contract and cross-guardian denial tests.
- [ ] Cross-platform end-to-end learner journey.
- [ ] Test network loss, retry, duplicate submission, and app resume.
- [ ] Validate demo-mode isolation and disclosures.

## Acceptance criteria

1. Learner can start and finish the lesson on each supported client.
2. Illegal moves are rejected by the trusted rules implementation.
3. Puzzle answers are validated deterministically, not by an LLM.
4. Attempts and progress persist only after authenticated, authorized server acceptance.
5. Refresh/relaunch/resume produces consistent progress.
6. An unrelated guardian cannot read or modify the learner's records.
7. Retry behavior does not create duplicate evidence where idempotency applies.
8. All critical tests pass and the lesson has documented review status.

## Exit evidence

Link the approved content version, API contract, migration, test results, cross-platform walkthrough, known limitations, and reviewer sign-off in the release/PR record.
