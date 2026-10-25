# Phase 1 — Foundation Implementation Plan

**Status:** In progress  
**Original implementation branch:** `phase-1/foundation`  
**Prerequisite:** Phase 0 product and architecture baseline documented; stakeholder approval still needs confirmation.

## Objective

Create a safe, testable cross-platform foundation before replacing the existing prototype or building out the full curriculum.

## Current implementation snapshot

Merged to `main`:
- pnpm workspace root and web/API package scaffolding.
- React + TypeScript + Vite web shell.
- NestJS API bootstrap with `/api/v1/health` and `/api/v1/health/ready`.
- API health/readiness tests and web preview disclosure smoke test.
- GitHub Actions web/API typecheck, build, and test jobs.

Still outstanding:
- Generate and commit a valid `pnpm-lock.yaml` with pnpm 10.10.0 in a network-enabled environment.
- Switch CI to `pnpm install --frozen-lockfile` after lockfile verification.
- Native Kotlin/Jetpack Compose Android project and CI build/test baseline.
- OpenAPI generation and reviewed contracts beyond current health routes.
- Shared curriculum/progress DTOs and API request/correlation ID conventions.
- Lint/format and dependency/secret scanning quality gates where not yet configured.
- Database/Prisma setup only after schema and privacy review.
- Authentication/guardian authorization before any learner-scoped production routes.

## Work packages

### P1. Repository and quality gates
- [x] Establish pnpm workspace root and web/API folder structure.
- [ ] Commit a generated lockfile using pnpm 10.10.0.
- [ ] Switch CI to frozen installs after lockfile is committed.
- [ ] Verify lint/format scripts and add them if missing.
- [x] Add CI workflow for web/API typecheck, build, and baseline tests.
- [ ] Add dependency and secret scanning.
- [x] Keep root `index.html` available as the original prototype/reference.

### P2. API and domain baseline
- [x] Bootstrap NestJS API with health/readiness endpoints.
- [x] Establish `/api/v1` route prefix.
- [ ] Add OpenAPI generation and contract validation.
- [ ] Define shared DTOs for curriculum summary and learner progress.
- [ ] Add consistent error responses and request/correlation IDs.
- [ ] Add PostgreSQL/Prisma setup and first migration only after schema review.
- [ ] Do not expose learner-scoped production endpoints before authentication and guardian authorization.

### P3. Web shell
- [x] Bootstrap React + TypeScript + Vite app.
- [x] Add a responsive foundation shell and visible non-production disclosure.
- [ ] Establish reusable design tokens and accessible component conventions.
- [ ] Add a typed API client and explicit environment-based demo mode.
- [x] Add baseline smoke test for non-production disclosures.
- [ ] Expand keyboard, screen-reader, responsive, and accessibility tests.

### P4. Android shell
- [ ] Bootstrap native Kotlin/Jetpack Compose app.
- [ ] Add app shell, navigation, theme, loading/error/offline states.
- [ ] Add typed API boundary and environment configuration without embedded secrets.
- [ ] Add unit/UI test baseline and CI build.
- [ ] Keep signing keys and store credentials outside the repository.

### P5. Chess and learning vertical-slice design
- [ ] Define chess domain interface and legal-move regression suite.
- [ ] Select and pin a tested chess rules library for each runtime needed.
- [ ] Define curriculum/lesson/assessment contracts and mastery algorithm versioning.
- [ ] Plan one lesson + one validated puzzle + persisted progress as the first vertical slice.
- [x] Keep AI/coach integration unconfigured until provider, child-safety, and data-flow review.

## Completion criteria for Phase 1

- [ ] Web and Android shells build from documented commands.
- [ ] API starts locally and exposes health/readiness plus OpenAPI.
- [ ] CI runs agreed quality gates on pull requests with frozen dependency installs.
- [ ] No secrets or real child data are committed.
- [ ] Demo/mock mode is explicit and cannot masquerade as production persistence.
- [ ] Authentication/authorization boundaries are documented before learner data routes are enabled.
- [x] Original prototype remains accessible until replacement parity is accepted.

## Risks to resolve early

- Identity provider and launch-jurisdiction requirements.
- Whether Android and API builds can run in the available CI environment.
- Rules library compatibility and server/client consistency.
- Curriculum content and mastery criteria must be approved before claiming learning outcomes.
