# Phase 1 — Foundation Implementation Plan

**Status:** Ready to start  
**Branch:** `phase-1/foundation`  
**Prerequisite:** Phase 0 product and architecture baseline accepted

## Objective

Create a safe, testable cross-platform foundation before replacing the existing prototype or building out the full curriculum.

## Work packages

### P1. Repository and quality gates
- [ ] Establish app/API/shared-contract/Android folder structure.
- [ ] Add root scripts and package-manager lockfile.
- [ ] Add lint, format, typecheck, and test commands.
- [ ] Add CI workflow that fails on lint/type/test errors.
- [ ] Add secret/dependency scanning and safe environment examples.
- [ ] Keep `index.html` available as the original prototype/reference.

### P2. API and domain baseline
- [ ] Bootstrap NestJS API with health/readiness endpoint.
- [ ] Add `/api/v1` route convention and OpenAPI generation.
- [ ] Define shared DTOs for curriculum summary and learner progress.
- [ ] Add request validation, consistent error responses, and request IDs.
- [ ] Add PostgreSQL/Prisma setup and first migration only after schema review.
- [ ] No public learner endpoints until authentication and guardian authorization are implemented.

### P3. Web shell
- [ ] Bootstrap React + TypeScript + Vite app.
- [ ] Establish design tokens and accessible component conventions based on Little Knights.
- [ ] Add routes/screens as clearly labelled placeholders, not fake production features.
- [ ] Add API client and explicit demo mode configuration.
- [ ] Add responsive, keyboard, and accessibility smoke tests.

### P4. Android shell
- [ ] Bootstrap native Kotlin/Jetpack Compose app.
- [ ] Add app shell, navigation, theme, loading/error/offline states.
- [ ] Add typed API boundary and environment configuration without embedded secrets.
- [ ] Add unit/UI test baseline and CI build.
- [ ] Validate app signing and store credentials remain outside the repository.

### P5. Chess and learning vertical slice design
- [ ] Define chess domain interface and legal-move regression suite.
- [ ] Select and pin a tested chess rules library for each runtime needed.
- [ ] Define curriculum/lesson/assessment contract and mastery algorithm versioning.
- [ ] Plan one lesson + one validated puzzle + persisted progress as the first vertical slice.
- [ ] Keep coach behind an interface until provider, child-safety, and data-flow review.

## Completion criteria for Phase 1

- Web and Android shells build from documented commands.
- API starts locally and exposes health/readiness plus OpenAPI.
- CI runs the agreed quality gates on pull requests.
- No secrets or real child data are committed.
- Demo/mock mode is explicit and cannot masquerade as production persistence.
- Authentication/authorization boundaries are documented before learner data routes are enabled.
- The original prototype remains accessible until replacement parity is accepted.

## Proposed first vertical slice (Phase 2)

1. Load one approved lesson from versioned curriculum data.
2. Render instruction and one guided board interaction.
3. Validate moves with the chess rules engine.
4. Present one validated puzzle and explain the outcome.
5. Persist a learning attempt and progress event behind authenticated authorization.
6. Verify the same learner can resume across web and Android.
7. Test guardian access and denial cases.

## Risks to resolve early

- Identity provider and launch-jurisdiction requirements.
- Whether Android and API builds can run in the available CI environment.
- Rules library compatibility and server/client consistency.
- Curriculum content and mastery criteria must be approved before claiming learning outcomes.
