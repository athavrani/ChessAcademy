# Kids Chess Academy — Delivery Roadmap

This roadmap defines phase goals and exit gates. Each phase has a detailed plan linked below. A document being written does not mean the phase is implemented or approved; completion must be supported by code, test evidence, and the relevant review.

## Phase overview

| Phase | Focus | Current evidence/status | Exit gate |
|---|---|---|---|
| 0 | Product and architecture baseline | Core documents exist; stakeholder approvals remain open | Product scope, curriculum approach, trust boundaries, and high-risk decisions reviewed |
| 1 | Cross-platform foundation | Web/API shell and baseline CI/tests merged; lockfile and Android shell remain outstanding | Reproducible install, web/API quality gates, documented contracts, Android shell, explicit demo boundary |
| 2 | Foundations learning vertical slice | Planned | One reviewed lesson, legal chess practice, validated puzzle, persisted progress, authorization tests |
| 3 | Curriculum and mastery | Proposed curriculum allocation only | Approved curriculum release and versioned, evidence-based mastery policy |
| 4 | AI coach and optional voice | Not implemented; providers unselected | Approved data flow, evaluations, safety limits, honest fallbacks; separate voice approval |
| 5 | Parent experience | Not implemented | Guardian-authorized summaries and tested account/data controls |
| 6 | Hardening and pilot readiness | Not implemented | Evidence-backed security, privacy, accessibility, reliability, support, and pilot go/no-go approval |

## Phase 0 — Product and architecture baseline

**Goal:** agree what to build and how it should be structured before production implementation.

Detailed plan: [Phase 0 product and architecture plan](PHASE_0_PRODUCT_AND_ARCHITECTURE_PLAN.md)

Core deliverables:
- [Product requirements](PRODUCT_REQUIREMENTS.md)
- [Architecture proposal](ARCHITECTURE.md)
- [Prototype audit](PHASE_0_PROTOTYPE_AUDIT.md)
- [Curriculum blueprint](CURRICULUM_BLUEPRINT.md)
- [Decision log](DECISION_LOG.md)

**Exit gate:** stakeholders approve the MVP and open decisions have owners. Document presence is not equivalent to approval.

## Phase 1 — Cross-platform foundation

**Goal:** establish the repository, app/API shells, CI, contracts, environment conventions, and test baseline before expanding product behavior.

Detailed plan: [Phase 1 foundation plan](PHASE_1_FOUNDATION_PLAN.md)

Current implemented baseline includes a React/Vite web shell, NestJS API bootstrap, health/readiness endpoints, foundation tests, and GitHub Actions web/API checks. Remaining items include a committed validated pnpm lockfile, frozen CI installs, Android shell/build baseline, and additional API contract/security tooling. See the Phase 1 plan for item-level status.

**Exit gate:** documented clean setup, passing CI, explicit demo boundary, and web/Android foundation with no false production claims.

## Phase 2 — Foundations learning vertical slice

**Goal:** deliver one end-to-end learning journey with a reviewed lesson, guided practice, legal chess interaction, a validated puzzle, feedback, and server-persisted progress.

Detailed plan: [Phase 2 vertical slice](PHASE_2_FOUNDATIONS_VERTICAL_SLICE.md)

**Exit gate:** same approved lesson works across supported clients; chess and puzzle outcomes are deterministic; progress persists and resumes; guardian authorization and denial tests pass.

## Phase 3 — Curriculum and mastery

**Goal:** turn the curriculum target into reviewed content and a reproducible evidence-based progression system.

Detailed plan: [Phase 3 curriculum and mastery](PHASE_3_CURRICULUM_AND_MASTERY.md)

**Exit gate:** approved curriculum release totals 114 active learning hours under a documented counting method; mastery outcomes are reproducible from versioned evidence and policy.

## Phase 4 — AI coach and optional voice

**Goal:** add bounded, age-appropriate explanations grounded in trusted chess state, with explicit provider status and safe failure behavior.

Detailed plan: [Phase 4 AI coach and voice](PHASE_4_AI_COACH_AND_VOICE.md)

**Exit gate:** provider/data review and evaluation thresholds pass; AI cannot determine legality or directly award mastery. Voice remains disabled until separately reviewed.

## Phase 5 — Parent experience

**Goal:** provide guardians accurate learning summaries and meaningful account, consent, and data controls.

Detailed plan: [Phase 5 parent experience](PHASE_5_PARENT_EXPERIENCE.md)

**Exit gate:** guardian access is enforced server-side; summaries have documented semantics; revocation, export, and deletion workflows behave as documented.

## Phase 6 — Hardening and pilot readiness

**Goal:** establish evidence that the product is safe, reliable, accessible, supportable, and operationally ready for a limited pilot.

Detailed plan: [Phase 6 hardening and pilot readiness](PHASE_6_HARDENING_AND_PILOT_READINESS.md)

**Exit gate:** applicable security, privacy/legal, curriculum, accessibility, device, operational, and support reviews are signed off. A green build alone is not pilot approval.

## Sequencing principles

- Web and Android are first-class product targets. Share contracts and business semantics; do not independently invent mastery rules in clients.
- The trusted chess rules implementation determines legality and game state. An LLM may explain validated facts but is never authoritative for legality.
- Lesson completion is not the same as concept mastery.
- Keep demo fixtures isolated from production and visibly labelled.
- Do not expand into live matchmaking, public child profiles, open messaging, payments, or full academy administration without explicit scope and safety review.
- Do not use real child data in development, tests, screenshots, or fixtures.
- Each phase should close with evidence, a known-limitations list, and explicit approval before the next phase expands risk.
