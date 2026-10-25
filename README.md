# Kids Chess Academy

A mastery-based chess learning experience for ages 5–13, designed for web and Android. The existing `index.html` at the repository root is retained as the original Little Knights prototype/reference while the production foundation is built separately.

## Project status

- **Phase 0:** Product requirements, proposed architecture, prototype audit, and roadmap are documented.
- **Phase 1:** Web shell and NestJS API bootstrap have been merged to `main`; reliability work is in review on `phase-1/reliable-builds`.
- **Not production-ready:** No authentication, database, saved learner progress, legal chess board, live AI coach, voice integration, or Android app is implemented yet.
- **No real child data:** Use synthetic fixtures only during development.

## Documentation

- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Proposed architecture](docs/ARCHITECTURE.md)
- [Prototype audit](docs/PHASE_0_PROTOTYPE_AUDIT.md)
- [Implementation roadmap](docs/IMPLEMENTATION_ROADMAP.md)
- [Accepted Phase 1 defaults](docs/DECISION_LOG.md)
- [Phase 1 foundation plan](docs/PHASE_1_FOUNDATION_PLAN.md)

## Technology baseline

- Web: React, TypeScript, Vite
- API: Node.js, TypeScript, NestJS
- Planned data store: PostgreSQL with Prisma, pending schema review
- Android: native Kotlin and Jetpack Compose; initial project setup remains a Phase 1 work item
- Package manager: pnpm workspaces
- CI: GitHub Actions web/API typecheck and build checks

These are the accepted initial defaults. Identity, hosting, AI, and speech providers remain unselected until privacy, jurisdiction, data-flow, and cost review.

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
- `GET /api/v1/health/ready` — current foundation readiness status

The readiness endpoint reports `not-ready` while the database, identity provider, and coach provider are not configured. Liveness only confirms that the API process is responding.

## Workspace commands

```bash
pnpm build
pnpm typecheck
pnpm lint
pnpm test
```

The current baseline includes Node.js test-runner checks for API health response contracts and the web preview's non-production disclosure. These are smoke/contract checks, not a substitute for integration, chess-rule, accessibility, or end-to-end coverage.

## Engineering guardrails

1. A chess rules engine, not AI, determines legal moves and game state.
2. Learner-scoped access must be authorized server-side through guardian relationships.
3. Lesson completion is not equivalent to concept mastery.
4. Demo/sample data must never be presented as saved production data.
5. No credentials, secrets, or real child data belong in the repository.
6. Before a child-facing pilot, review consent, retention/deletion, security, and applicable jurisdiction requirements.

## Current next milestone

Commit the pnpm lockfile and switch CI to frozen installs, verify web/API CI, then add the Android shell. After that, design the first vertical slice: one approved lesson, legal chess practice, one validated puzzle, and persisted progress behind authentication and authorization.
