# Phase 0 — Existing Prototype Audit

**Repository:** `athavrani/ChessAcademy`  
**Branch:** `main`  
**File reviewed:** `index.html`  
**Date:** 2026-10-25  
**Method:** Static source inspection; no browser/device, backend, security, or accessibility test is claimed.

## 1. Executive summary

The current prototype is a useful stakeholder-demo shell. It has a branded responsive single-page experience, learner navigation, a sample learning journey, a selectable chessboard, a predefined-response chess buddy, achievements, and a sample parent overview. It is not yet a functional chess-learning MVP.

The source explicitly states that the board does not check legal moves, coach replies are predefined examples, and sample progress is not server-persisted. Preserve these disclosures and standardize demo labels wherever an interaction could be mistaken for a live integration.

## 2. Inventory

| Area | Observed in `index.html` | Status |
|---|---|---|
| Branding/navigation | Little Knights; Home, Learning Journey, Practice Board, AI Chess Buddy, Achievements, Parents' Corner | Demo baseline |
| Responsive layout | Desktop/mobile CSS breakpoints and horizontally scrollable mobile navigation | Promising; device testing needed |
| Learner dashboard | Points, streak, lessons, badges, sample lesson cards | Hard-coded sample metrics |
| Learning journey | Six visible lesson examples across two levels | Illustrative, not 114-hour curriculum |
| Practice board | Starting arrangement; selection/highlight and piece explanations | Not playable; no legal move engine |
| AI Chess Buddy | Keyword matching to canned replies | Simulated; no live AI or board context |
| Achievements | Static badges and totals | Not evidence-driven or persisted |
| Parent view | Sample progress and family tips | No guardian authentication or live data |
| Persistence | Counters mutate in JavaScript memory | Lost on reload; no cross-device sync |
| Backend/auth | No backend or authentication evident in reviewed file | Not implemented here |
| Android | Responsive web only in this file | Native/packaged Android not evidenced |
| Voice | No actual voice integration evident | Not implemented here |
| Accessibility | Some visible focus styling and labels | Not audited or proven |

## 3. Strengths to retain

- Friendly, recognizable chess visual language.
- Clear separation of learner, practice, coach, progress, and parent areas.
- Responsive CSS starting point.
- Positive, effort-oriented language.
- Useful explicit disclaimers about the board, canned coach replies, and sample data.
- Lightweight artifact suitable for stakeholder discussion before selecting a production stack.

## 4. Gaps and risks

### P0 — Before calling it a learning MVP
1. **Chess legality:** integrate a tested rules engine for legal moves, captures, special moves, checks, terminal states, draws, undo, and promotion.
2. **Curriculum integrity:** replace illustrative lesson counts/levels with the approved 114-hour curriculum and age-band variants.
3. **Mastery:** separate lesson completion from concept mastery; add validated assessments, retries, and remediation.
4. **Persistence:** store official progress in an authenticated backend and define offline/retry/idempotency behavior.
5. **Guardian authorization:** implement real authentication and server-side guardian-child access checks.
6. **Simulation labeling:** label all mock responses, sample metrics, and unpersisted actions consistently.

### P1 — Before a child-facing pilot
1. Child-safe account/consent model, data minimization, retention/deletion, and privacy review.
2. Position-aware coach with trusted chess context, output safety, rate/cost limits, and fallback.
3. Accessibility validation: contrast, scalable text, screen reader semantics, keyboard support, touch targets, reduced motion, and text alternatives.
4. Web/Android parity tests, lifecycle/network recovery, and device coverage.
5. Production telemetry and error handling that avoid unnecessary child content in logs.

### P2 — Later unless separately approved
Live human play, matchmaking, tournaments, full academy administration, payments/subscriptions, push notifications, and advanced game analysis.

## 5. Specific source observations

- The board uses piece glyphs and click handlers to select squares; it does not model turns, move generation, captures, checks, or game state.
- The coach matches keywords to a small canned response set and does not use current position, a chess engine, or a live AI endpoint.
- “Mark lesson complete” increments points and lesson count in page memory; the count is capped at 12. This must be replaced with data-driven progress for the 114-hour curriculum.
- Dashboard stats, streaks, badges, and parent summaries are hard-coded sample values and may become inconsistent after interaction.
- Navigation and selected mini-lesson state are client-side only.
- A single HTML file is acceptable for a prototype but should not become the long-term architecture for parallel web and Android delivery without an explicit technical decision.
- Existing disclaimers are useful, but sample status should also appear near metrics and actions that appear to save, connect, speak, or generate responses.

## 6. Traceability snapshot

| Requirement | Evidence | Status | Next action |
|---|---|---|---|
| Child-friendly experience | Branding, navigation, dashboard | Partial | Validate with age-band usability checks |
| Age bands 5–7 / 8–10 / 11–13 | No explicit adaptation shown | Gap | Define content and interaction variants |
| 114-hour mastery curriculum | Not represented | Gap | Approve curriculum and map stable IDs/time |
| Legal chess practice | Select-only board and disclaimer | Gap | Integrate rules engine |
| Position-aware AI | Canned keyword replies | Simulated | Add bounded engine-backed context |
| Voice | No real integration evident | Gap | Decide scope/provider; label mock controls |
| Progress persistence | In-memory counters | Gap | Backend progress and sync |
| Parent oversight | Static sample summary | Simulated | Guardian authorization and live summaries |
| Web responsiveness | Breakpoint CSS | Partial | Test real devices, zoom, accessibility |
| Android client | Not evidenced in file | Gap | Technology spike and delivery plan |
| Privacy/security | No account/backend controls in file | Gap | Threat model and privacy review |
| Mock labeling | Some disclaimers | Partial | Standardize labels and production behavior |

## 7. Suggested prototype validation tests

- Open desktop, tablet, and narrow mobile widths; check overflow except intended nav scrolling.
- Navigate every section with mouse, keyboard, and touch.
- Check focus visibility, heading structure, accessible names, contrast, zoom, and screen-reader order.
- Verify demo notices remain visible on board, coach, progress, and parent sections.
- Reload and verify the team understands that in-memory values reset; never describe them as saved.
- Test every visible control and record whether it navigates, changes local state, or is a placeholder.
- Check starting-piece placement and piece explanations; do not treat the current board as playable chess.
- Run basic HTML/CSS validation and inspect browser console errors in the next prototype pass.

## 8. Recommendations

1. Treat the current artifact as a stakeholder prototype, not a production foundation.
2. Review product requirements and architecture before refactoring.
3. Select the web/Android stack with a documented technical spike.
4. Baseline curriculum and mastery rules before adding more hard-coded lesson counters.
5. Build a vertical slice: guardian/learner access boundary, one approved lesson, legal practice, one validated puzzle, persisted progress, and transparent coach fallback.
6. Add CI for linting, unit tests, API contracts, chess regression, accessibility smoke tests, and Android builds.
7. Keep demo fixtures and simulated integrations separate from production configuration.

## 9. Phase 0 checklist

- [x] Inspect repository and current `index.html`.
- [x] Record prototype behavior and explicit limitations.
- [x] Draft product requirements.
- [x] Draft proposed architecture.
- [ ] Approve exact 114-hour curriculum breakdown and mastery thresholds.
- [ ] Record web/Android stack and backend deployment decisions.
- [ ] Agree target jurisdictions and privacy/consent review scope.
- [ ] Approve MVP scope, acceptance criteria, and Phase 1 estimate.
