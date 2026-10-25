# Kids Chess Academy

A mastery-based chess learning experience for ages 5–13, designed for web and Android. The root `index.html` is retained as the original Little Knights prototype/reference while the production foundation is built separately.

## Project status

- **Phase 0:** Product requirements, architecture proposal, prototype audit, and curriculum proposal are documented; stakeholder approval remains open.
- **Phase 1 foundation:** React/Vite web shell, NestJS API bootstrap, health/readiness tests, smoke tests, and GitHub Actions checks are merged to `main`. Lockfile hardening and Android shell remain outstanding.
- **Phases 2–6:** Detailed implementation plans are documented; these phases are not represented as implemented.
- **Repository instructions:** See [AGENTS.md](AGENTS.md) for coding-agent guardrails.
- **Not production-ready:** Authentication, database persistence, legal chess gameplay, live AI coaching, voice integration, and the native Android app are not yet implemented.
- **No real child data:** Use synthetic fixtures only during development.
- **Lockfile:** A committed and validated `pnpm-lock.yaml` is still required before switching CI to frozen installs.

## Documentation index

### Product and learning
- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [114-hour curriculum blueprint — proposed, not approved](docs/CURRICULUM_BLUEPRINT.md)
- [Existing prototype audit](docs/PHASE_0_PROTOTYPE_AUDIT.md)
- [Phase 0 product and architecture plan](docs/PHASE_0_PRODUCT_AND_ARCHITECTURE_PLAN.md)

### Architecture and engineering
- [Architecture overview](docs/ARCHITECTURE.md)
- [Decision log and accepted defaults](docs/DECISION_LOG.md)
- [API contract conventions](docs/API_CONTRACTS.md)
- [Logical data model](docs/DATA_MODEL.md)
- [Agent instructions](AGENTS.md)

### Phase-by-phase implementation plans
- [Phase 1 — Foundation](docs/PHASE_1_FOUNDATION_PLAN.md)
- [Phase 2 — Foundations vertical slice](docs/PHASE_2_FOUNDATIONS_VERTICAL_SLICE.md)
- [Phase 3 — Curriculum and mastery](docs/PHASE_3_CURRICULUM_AND_MASTERY.md)
- [Phase 4 — AI coach and optional voice](docs/PHASE_4_AI_COACH_AND_VOICE.md)
- [Phase 5 — Parent experience](docs/PHASE_5_PARENT_EXPERIENCE.md)
- [Phase 6 — Hardening and pilot readiness](docs/PHASE_6_HARDENING_AND_PILOT_READINESS.md)
- [Overall implementation roadmap](docs/IMPLEMENTATION_ROADMAP.md)

### Quality, safety, and operations
- [Test strategy and quality gates](docs/TEST_STRATEGY.md)
- [Local development and release workflow](docs/LOCAL_DEVELOPMENT_AND_RELEASE.md)
- [Android implementation plan](docs/ANDROID_IMPLEMENTATION_PLAN.md)
- [Security, privacy, and child safety baseline](docs/SECURITY_PRIVACY_CHILD_SAFETY.md)

## Technology baseline

- Web: React, TypeScript, Vite
- API: Node.js, TypeScript, NestJS
- Planned data store: PostgreSQL with Prisma, pending schema review
- Android: native Kotlin and Jetpack Compose; project not yet implemented
- Package manager: pnpm workspaces, pnpm 10.10.0
- CI: GitHub Actions web/API typecheck, build, and smoke/health tests

These are engineering defaults, not evidence that production infrastructure is provisioned. Identity, hosting, AI, and speech providers remain unselected pending privacy, jurisdiction, data-flow, safety, and cost review.

## Prerequisites

- Node.js 22 or later
- pnpm 10.10.0

## Run the web shell

From the repository root:

```bash
pnpm install
pnpm dev:web
```

Open the local Vite URL shown in the terminal (normally `http://localhost:5173`).

## Run the API

In a separate terminal:

```bash
pnpm dev:api
```

The API listens on port 3000 by default. Current endpoints:

- `GET /api/v1/health` — process liveness
- `GET /api/v1/health/ready` — dependency readiness

Readiness reports `not-ready` while required dependencies remain unconfigured. Liveness only confirms that the API process responds; neither endpoint proves that learner-facing production features are available.

## Workspace commands

```bash
pnpm build
pnpm typecheck
pnpm lint
pnpm test
```

For focused checks, see [Test Strategy](docs/TEST_STRATEGY.md). Existing tests are smoke/contract checks, not a substitute for chess-rule, integration, authorization, accessibility, or end-to-end coverage. Verify each workspace script before assuming a root command is available.

## Non-negotiable engineering guardrails

1. A tested chess rules engine—not an LLM—determines legal moves and game state.
2. Learner-scoped access is authorized server-side through guardian relationships.
3. Lesson completion is not equivalent to concept mastery.
4. Demo/sample data must never be presented as saved production data.
5. No credentials, secrets, or real child data belong in the repository.
6. AI/voice providers must be explicit, bounded, and replaceable; no silent mock fallback presented as live.
7. Before a child-facing pilot, review consent, retention/deletion, security, accessibility, and applicable jurisdiction requirements.

## Immediate next steps

1. Generate and commit `pnpm-lock.yaml` using pnpm 10.10.0 in a network-enabled environment.
2. Change CI to `pnpm install --frozen-lockfile` and verify all web/API checks.
3. Investigate any Vercel deployment check failure independently from GitHub Actions.
4. Add the native Android shell and build/test baseline.
5. Approve the 114-hour curriculum allocation and mastery criteria before claiming curriculum completeness.
6. Deliver one end-to-end learning slice: approved lesson, legal chess practice, validated puzzle, authenticated/persisted progress, and guardian access tests.
