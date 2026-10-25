# Local Development and Release Workflow

## Current state

The repository currently has a React/Vite web foundation and NestJS API foundation. The native Android app, database, identity provider, and production AI/voice providers are not yet configured. The root `index.html` remains the original prototype/reference.

## Prerequisites

- Node.js 22 or later.
- pnpm 10.10.0.
- Git.
- Android Studio and a compatible Android SDK once the Android app is added.

The committed pnpm lockfile has not yet been verified. Do not claim reproducible frozen installs until it is generated with pnpm 10.10.0, committed, and validated in CI.

## Web setup

From the repository root:

```bash
pnpm install
pnpm dev:web
```

Open the Vite URL printed in the terminal, usually `http://localhost:5173`.

## API setup

In a separate terminal:

```bash
pnpm dev:api
```

The API uses port 3000 by default. Current diagnostics:
- `GET /api/v1/health` — liveness.
- `GET /api/v1/health/ready` — dependency readiness; currently not-ready while dependencies are unconfigured.

Do not expose readiness as proof that learner-facing production services are available.

## Quality checks

```bash
pnpm --filter @kids-chess-academy/web typecheck
pnpm --filter @kids-chess-academy/web build
pnpm --filter @kids-chess-academy/web test
pnpm --filter @kids-chess-academy/api typecheck
pnpm --filter @kids-chess-academy/api build
pnpm --filter @kids-chess-academy/api test
```

Root shortcuts `pnpm build`, `pnpm typecheck`, `pnpm lint`, and `pnpm test` exist, but use only commands supported by each workspace. Verify scripts before assuming a root command is green.

## Environment and secrets

- Add only safe placeholders to `.env.example` when environment variables are introduced.
- Never commit real `.env` files, credentials, access tokens, signing keys, or production exports.
- Validate required environment configuration at startup.
- Keep separate credentials and data for local, test, staging, and production environments.
- Never use real learner data in local development.

## Pull-request workflow

1. Read `AGENTS.md` and relevant product/architecture/phase documents.
2. Create a focused branch from an up-to-date `main`.
3. Implement the smallest coherent change with tests and docs.
4. Run relevant local checks and report skipped checks.
5. Open a PR describing purpose, behavior, tests, risk, and follow-up.
6. Review GitHub Actions results and resolve failures.
7. Merge only after required review/checks; verify merge status.
8. Confirm post-merge CI and deployment status separately.

## Release gates

Before any production release, require:
- Approved scope and acceptance criteria.
- Green CI and reviewed dependency/security results.
- Migration/rollback plan for persistent data changes.
- Environment/secret configuration review.
- Monitoring, alerting, backup, and recovery plan.
- Accessibility and device/browser verification.
- Privacy/consent/retention approval for intended jurisdictions.
- Clear rollback and incident-response ownership.

A green CI build does not mean a deployment succeeded, and a successful deployment does not mean the product is ready for children.
