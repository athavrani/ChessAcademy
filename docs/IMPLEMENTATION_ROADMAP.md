# Kids Chess Academy — Phase 0 and Delivery Roadmap

## Phase 0 — Product and architecture baseline

**Goal:** agree what to build and how it should be structured before production implementation.

Deliverables:
- Product requirements (`PRODUCT_REQUIREMENTS.md`)
- Proposed architecture (`ARCHITECTURE.md`)
- Existing prototype audit (`PHASE_0_PROTOTYPE_AUDIT.md`)
- Curriculum baseline and 114-hour mapping
- Decision log for web/Android stack, backend, data, AI, voice, privacy, and offline support
- MVP scope, risks, and acceptance criteria

Exit gate: stakeholders approve the MVP and open decisions have owners.

## Phase 1 — Cross-platform foundation

Set up repository structure, design system, app shell, CI, environments, API contracts, account/guardian authorization foundations, error handling, and synthetic demo fixtures. Complete a small web/Android technical spike before committing to the framework.

## Phase 2 — Foundations learning vertical slice

Deliver one end-to-end lesson with objective, instruction, guided practice, validated puzzle, feedback, and persisted progress. Integrate a chess rules library and tests before expanding board functionality.

## Phase 3 — Curriculum and mastery

Model the approved 114-hour curriculum, age-band variants, prerequisites, assessment evidence, mastery criteria, retries, remediation, and review scheduling. Keep lesson completion distinct from mastery.

## Phase 4 — Coach and optional voice

Add bounded position-aware coaching grounded in trusted chess data, age-appropriate output, safety checks, usage limits, and clear fallbacks. Treat voice as optional and document processing/retention.

## Phase 5 — Parent experience

Deliver authorized learner summaries, next-step recommendations, account/consent controls, and data request flows. Verify cross-guardian access denial.

## Phase 6 — Hardening and pilot readiness

Complete web/Android parity, accessibility, security/privacy review, device testing, performance targets, observability, retention/deletion, incident response, and support runbooks. Pilot only after approval.

## Sequencing principle

Web and Android are parallel product targets, but avoid duplicating business rules. Share curriculum and mastery semantics through backend contracts; keep chess legality deterministic and independently tested. Do not expand to live play, academy administration, payments, or social features until the MVP is validated.
