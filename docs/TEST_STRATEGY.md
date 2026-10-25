# Test Strategy and Quality Gates

## Objectives

Prevent chess-rule errors, cross-learner data exposure, inconsistent mastery, false claims about integrations, and regressions across web and Android.

## Test layers

1. **Static checks:** formatting/linting, TypeScript typecheck, dependency and secret scanning.
2. **Unit tests:** domain rules, DTO validation, mastery calculations, curriculum prerequisites, error mapping.
3. **API/contract tests:** endpoint schemas, validation, authorization, idempotency, readiness behavior, OpenAPI consistency.
4. **Database integration tests:** migrations, constraints, transactions, deletion/retention workflows, and concurrency behavior.
5. **Chess regression tests:** legal and illegal moves, turns, captures, check, checkmate, stalemate, castling, en passant, promotion, draw conditions, undo/replay, and puzzle solution validation.
6. **Web component tests:** accessible names, keyboard interaction, loading/error/empty states, responsive layouts, and demo disclosures.
7. **Android tests:** domain/view-model unit tests, Compose UI tests, lifecycle/process recreation, rotation, network loss, and app resume.
8. **End-to-end tests:** one learner journey from lesson start through validated practice, assessment, persisted progress, resume, and guardian summary.
9. **Security/privacy tests:** cross-guardian access denial, session expiry, direct-object-reference attempts, rate limiting, logging payload review, and deletion propagation.
10. **Accessibility/usability:** keyboard and screen reader checks, contrast, zoom/text scaling, touch targets, reduced motion, and audio alternatives.

## Minimum chess regression matrix

- Reject illegal piece movement and wrong-turn moves.
- Validate capture rules and king-safety constraints.
- Validate both sides' castling rights and all castling restrictions.
- Validate en passant availability and expiration.
- Validate promotion choices and resulting piece state.
- Detect check, checkmate, stalemate, and supported draw conditions.
- Verify move history replay produces the same state.
- Reject puzzle positions with invalid setup or ambiguous/unapproved solutions.
- Verify coach explanations cannot override engine legality.

## Progress and mastery tests

- A completion click alone cannot award mastery.
- Mastery is derived from approved evidence and a known policy version.
- Duplicate submissions do not create duplicate rewards/evidence when idempotency applies.
- Retrying or reconnecting does not silently erase completed work.
- Concurrent device updates follow the documented conflict policy.
- Curriculum version changes preserve interpretation of historical evidence.

## Current baseline commands

Use Node.js 22 and pnpm 10.10.0:

```bash
pnpm --filter @kids-chess-academy/web typecheck
pnpm --filter @kids-chess-academy/web build
pnpm --filter @kids-chess-academy/web test
pnpm --filter @kids-chess-academy/api typecheck
pnpm --filter @kids-chess-academy/api build
pnpm --filter @kids-chess-academy/api test
```

Run `pnpm install --frozen-lockfile` only after a valid `pnpm-lock.yaml` is committed. Until then, follow the current CI install step and explicitly report the lockfile gap.

## CI expectations

- Run applicable checks on pull requests and main-branch pushes.
- Fail on test/typecheck/build errors; do not bypass checks to merge.
- Keep synthetic fixtures deterministic and free of real child data.
- Upload only useful, non-sensitive artifacts; scrub logs and test output.
- Add a regression test for each fixed bug when practical.
- Document checks that could not run and the reason.

## Definition of test completion

A feature is not adequately tested merely because it compiles. The pull request must state tests run, results, untested risk areas, and any manual test steps.
