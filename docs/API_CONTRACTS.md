# API Contract Conventions

**Status:** Baseline guidance; endpoint schemas beyond the health routes are not implemented.
**Base path:** `/api/v1`

## Principles

- The API is the trust boundary for learner identity, guardian authorization, official progress, mastery, and persisted game state.
- OpenAPI is the intended contract source. Publish generated documentation only from the running, reviewed API; do not invent live endpoints in the UI.
- Use DTO validation at every untrusted request boundary.
- Use stable resource identifiers; never authorize based solely on a learner ID supplied by the client.
- Return explicit demo/simulation status only from isolated demo configuration. Production must not silently substitute fixtures.

## Current implemented endpoints

| Method | Path | Purpose | State |
|---|---|---|---|
| GET | `/api/v1/health` | Process liveness | Implemented |
| GET | `/api/v1/health/ready` | Dependency readiness status | Implemented; reports not-ready while dependencies are unconfigured |

Health responses are operational diagnostics, not a learner-facing readiness promise. Do not include secrets, connection strings, or detailed internal errors.

## Proposed resource groups (not implemented)

- `/auth/*`: provider callback/session integration, only after identity-provider selection.
- `/guardians/me/learners`: guardian-authorized learner relationships.
- `/curriculum/versions/{version}`: published curriculum metadata.
- `/learners/{learnerId}/journey`: authorized learning journey.
- `/learners/{learnerId}/lessons/{lessonId}/attempts`: create/read lesson attempts.
- `/learners/{learnerId}/puzzles/{puzzleId}/attempts`: puzzle attempts and outcomes.
- `/learners/{learnerId}/progress`: derived progress and mastery summaries.
- `/learners/{learnerId}/games`: practice game sessions and moves, subject to server validation.
- `/guardians/me/learners/{learnerId}/summary`: guardian summary after authorization.

These are design candidates, not promises of existing routes. Create detailed OpenAPI schemas and authorization rules before implementation.

## Response and error conventions

- Use appropriate HTTP status codes and a consistent error envelope.
- Validate IDs, enums, lengths, payload size, and allowed state transitions.
- Avoid leaking whether another guardian's learner account exists; use a consistent denial/not-found policy selected during security review.
- Return field-level validation details only when safe.
- Attach a request/correlation ID to logs and error responses where appropriate.
- Never return stack traces or provider credentials to clients.

## Authentication and authorization

- Authentication establishes the caller's identity; authorization checks the relationship and requested action on every learner-scoped operation.
- Enforce least privilege on the server, including background jobs and administrative operations.
- Use short-lived sessions/tokens and standard OIDC practices once a provider is selected.
- Test allowed guardian access, unrelated guardian denial, missing/expired credentials, role escalation, and direct-object-reference attempts.

## Idempotency, concurrency, and offline behavior

Before progress write endpoints are implemented, define:
- Idempotency key behavior for retried writes.
- Event ordering and duplicate submission handling.
- Version/concurrency behavior when multiple devices update progress.
- Offline queue retention and conflict resolution.
- Whether game moves are appended as immutable events or stored as a validated current state plus history.

Never award mastery from a client-provided boolean. Derive it from server-validated assessment evidence and a versioned mastery policy.

## Versioning and compatibility

- Keep the `/api/v1` prefix.
- Prefer additive optional fields over breaking changes.
- Document deprecation and migration windows for breaking changes.
- Version curriculum content and mastery algorithms independently from the API.
- Generate typed clients only from a reviewed OpenAPI document.
