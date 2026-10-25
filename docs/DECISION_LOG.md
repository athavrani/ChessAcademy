# Architecture Decision Record — Phase 1 Defaults

**Status:** Accepted for the initial implementation baseline; revisit through an explicit ADR when evidence requires a change.  
**Repository:** `athavrani/ChessAcademy`  
**Branch:** `phase-1/foundation`  
**Date:** 2026-10-25

The product and architecture requirements are accepted. To unblock Phase 1, the following defaults are selected. They are engineering defaults, not claims that infrastructure has already been provisioned.

## Accepted defaults

| Area | Default | Rationale / boundary |
|---|---|---|
| Repository shape | Monorepo | Keeps API contracts and product documentation together; isolates deployable apps |
| Web | React + TypeScript + Vite | Mature component ecosystem and fast feedback; preserve current HTML prototype as reference until parity is planned |
| Android | Native Kotlin + Jetpack Compose | Strong Android lifecycle, accessibility, and platform integration |
| Backend | Node.js + TypeScript + NestJS REST API | Structured modules, validation, dependency injection, OpenAPI support |
| Database | PostgreSQL | Relational model fits guardians, learners, curriculum, attempts, and mastery evidence |
| Database access | Prisma | Typed schema/migrations; migrations reviewed and tested |
| API contract | Versioned REST under `/api/v1`, OpenAPI | Clear client boundaries and generated/validated contracts |
| Chess rules | `chess.js` on TypeScript services/clients where appropriate, with server-authoritative validation | Deterministic rules; evaluate Kotlin compatibility or use API authority for Android |
| Authentication | Managed OIDC-compatible identity provider behind an adapter | Do not build password handling from scratch; select vendor after privacy/region review |
| Authorization | Server-side guardian/learner relationship checks | Client IDs never grant access |
| AI | Provider-neutral coach interface; no provider selected in core domain | Allows privacy, safety, cost, and quality evaluation before choosing a vendor |
| Voice | Optional, deferred behind a provider adapter | No audio capture or storage until consent, processing, and retention are approved |
| Hosting | Container-ready API; hosting vendor remains unprovisioned | Avoid binding the domain to an unreviewed vendor |
| Tests | TypeScript unit/API/contract tests; Android unit/UI tests; cross-platform acceptance tests | Validate rules, access control, and parity |
| CI | GitHub Actions for lint, typecheck, tests, dependency/secret scanning | Establish quality gates before feature expansion |
| Demo mode | Explicit fixture/mock mode, isolated from production configuration | No fake data presented as real saved/live behavior |

## Non-negotiable constraints

1. Legal chess state is determined by a trusted rules implementation, never by an LLM.
2. The server is authoritative for learner authorization and official progress.
3. Lesson completion and concept mastery remain separate.
4. Do not use real child data in development, tests, or demo fixtures.
5. Do not add public child profiles, open direct messaging, behavioral advertising, or live matchmaking to the MVP.
6. No AI/voice integration may silently fall back to a mock while claiming it is live.
7. Data collection, retention, deletion, and guardian consent must be reviewed for intended launch jurisdictions before a child-facing pilot.

## Deferred decisions

- Identity vendor and supported jurisdictions.
- Cloud provider, region, managed database, secrets manager, and deployment topology.
- AI and speech vendors, prompts/evaluation policy, retention, and budget limits.
- Exact supported Android API levels/devices and localization launch set.
- Curriculum hours by module, item bank, and numeric mastery thresholds.

## Change process

Any change to a selected default should include a short ADR with context, alternatives, decision, consequences, and migration/testing impact. Security/privacy decisions require review before implementation, not after launch.
