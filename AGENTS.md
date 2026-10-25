# Agent Instructions — Kids Chess Academy

## 1. Project purpose

Build a safe, engaging, mastery-based chess learning product for children ages 5–13, with age bands 5–7, 8–10, and 11–13. The planned curriculum target is 114 hours. Web and Android are first-class clients and should be developed together from the foundation.

Read these documents before making substantial changes:
- `README.md`
- `docs/PRODUCT_REQUIREMENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISION_LOG.md`
- `docs/IMPLEMENTATION_ROADMAP.md`
- The current phase plan under `docs/`, when applicable.

If these documents conflict, identify the conflict and update the decision log or ask for clarification rather than silently inventing a product decision.

## 2. Current repository state

- The repository is a pnpm monorepo.
- Web foundation: React, TypeScript, and Vite in `apps/web`.
- API foundation: NestJS and TypeScript in `apps/api`.
- The API is versioned under `/api/v1`.
- Android native Kotlin/Jetpack Compose foundation is planned but not yet implemented.
- The current web screen is a foundation preview, not a production learning experience.
- Identity, database persistence, live AI coaching, voice, and production integrations are not configured unless verified in code and deployment configuration.

Never describe a planned, mocked, simulated, or unconfigured capability as production-ready. Label demo/simulation behavior clearly in both UI and documentation.

## 3. Engineering principles

1. Prefer small, reviewable changes that match the active roadmap phase.
2. Preserve TypeScript strictness and use explicit types; avoid `any` unless justified.
3. Keep business logic out of presentation components and isolate external providers behind adapters.
4. Validate untrusted input at API boundaries and return consistent, safe errors.
5. Keep secrets in environment variables or a managed secret store. Never commit tokens, credentials, private keys, or real child data.
6. Do not add dependencies without a concrete need; explain significant dependency or architecture changes.
7. Update documentation and tests whenever behavior, setup, architecture, or requirements change.
8. Do not claim a command, test, deployment, integration, or GitHub operation succeeded unless its result confirms success.

## 4. Chess correctness

- Chess legality and game-state transitions must be determined by a chess rules engine, never by an LLM.
- The server must be authoritative for persisted games, lesson completion, mastery decisions, and other trusted state.
- Test edge cases such as check, checkmate, stalemate, castling, en passant, promotion, draw conditions, and invalid moves when implementing game logic.
- Keep curriculum completion separate from demonstrated mastery. Define measurable mastery criteria and test them.
- Do not present an unvalidated engine, generated explanation, or sample position as authoritative.

## 5. Child safety and privacy

- Treat learner data as sensitive. Minimize collection, access, retention, and exposure.
- Enforce guardian/learner authorization on the server; never rely on client-side checks alone.
- Do not add public child profiles, open messaging, behavioral advertising, or live matchmaking to the MVP without explicit product and safety review.
- Do not use real children's personal data in development, tests, screenshots, fixtures, or logs.
- Avoid collecting unnecessary identifiers. Do not log credentials, access tokens, private lesson content, or sensitive learner data.
- Before any child-facing pilot, document the relevant privacy, consent, retention, deletion, and incident-response requirements for the target jurisdictions.

## 6. AI, voice, and integrations

- Keep AI coaching behind a provider-neutral server-side adapter with timeouts, error handling, and usage limits.
- AI may explain or coach; it must not decide legal chess moves or bypass authorization.
- Voice is optional and deferred until its value, privacy implications, consent flow, and operational cost are reviewed.
- Keep provider credentials server-side. Never place secrets in web or Android bundles.
- If a provider is unavailable, use an explicit demo state or a clear error; never silently fabricate live data.
- Document which behavior is real, simulated, or not implemented.

## 7. Repository layout and conventions

- `apps/web`: web client.
- `apps/api`: backend API.
- `docs/`: product requirements, architecture, decisions, phase plans, and audit notes.
- `.github/workflows/`: CI workflows.
- Keep shared contracts and utilities in an intentional workspace package if/when needed; do not duplicate complex domain rules across clients.

Use descriptive filenames and small modules. Keep UI responsive, keyboard accessible, and usable with visible focus indicators. Avoid color-only status communication.

## 8. Validation before proposing a change

Use Node.js 22 and pnpm 10.10.0 as specified by the repository.

From the repository root, run the relevant checks:
- `pnpm install --frozen-lockfile` when a valid committed `pnpm-lock.yaml` exists.
- `pnpm --filter @kids-chess-academy/web typecheck`
- `pnpm --filter @kids-chess-academy/web build`
- `pnpm --filter @kids-chess-academy/web test`
- `pnpm --filter @kids-chess-academy/api typecheck`
- `pnpm --filter @kids-chess-academy/api build`
- `pnpm --filter @kids-chess-academy/api test`

The lockfile has not yet been verified as committed. Until it exists, follow the current CI workflow's install command and do not claim frozen-lockfile validation passed. Generate the lockfile with the declared pnpm version in a network-enabled environment; do not hand-author it.

For changes affecting both workspaces, run all relevant checks. Add regression tests for bug fixes. If a check cannot run, state exactly which check was not run and why.

## 9. CI, branches, and pull requests

- Keep changes focused on the active phase and avoid unrelated refactors.
- Use a descriptive feature or documentation branch; do not commit directly to `main` unless explicitly requested or repository policy requires it.
- Use a clear commit message and open a pull request with purpose, implementation summary, tests run, limitations, and follow-up work.
- Review CI results before merging. Investigate failures rather than bypassing required checks.
- Do not add broad permissions or disable checks merely to make a workflow pass.
- Never report a PR as merged unless GitHub confirms it is merged.

## 10. Definition of done

A change is complete only when:
- Requirements and acceptance criteria are addressed.
- Relevant tests are added or updated.
- Applicable typecheck/build/test checks pass, or any blockers are stated explicitly.
- Documentation and demo/production disclosures match actual behavior.
- Child safety, privacy, security, accessibility, and failure states have been considered.
- The final report summarizes files changed, checks performed, results, and remaining limitations.
