# Android Implementation Plan

**Chosen default:** Native Kotlin + Jetpack Compose.
**Status:** Planned; no native Android app is currently implemented.

## Goals

Deliver a first-class Android experience with the same curriculum, mastery semantics, authorization model, and progress behavior as the web client. Share contracts and trusted business rules through the API; do not fork curriculum or mastery logic into independent client implementations.

## Proposed structure

- `apps/android/`: Android Studio/Gradle project.
- Kotlin + Jetpack Compose for UI.
- ViewModel/state-holder layer for screen state.
- Repository/API client boundary for remote data.
- Kotlin serialization or an equivalent explicit serialization approach, chosen during implementation.
- Unit tests for state/domain behavior and Compose UI tests for critical flows.
- Environment configuration without secrets embedded in source or APK.

This is a target layout, not a claim that these files exist.

## Initial screens

1. App launch and configuration/error state.
2. Adult-managed sign-in/consent entry point after provider selection.
3. Learner selection restricted to authorized relationships.
4. Learning journey and lesson detail.
5. Guided lesson and practice board.
6. Puzzle attempt and feedback.
7. Progress summary.
8. Parent/guardian summary and account controls.

Only implement screens that have real backend contracts or are clearly marked as preview/demo. Avoid decorative navigation to nonexistent production features.

## State and resilience

- Model loading, success, empty, error, offline, and unsynced states explicitly.
- Handle process recreation, app backgrounding, rotation/resizing, and intermittent connectivity.
- Define retry/idempotency semantics before queueing progress writes offline.
- Do not store long-lived secrets in app preferences or source.
- Do not claim progress is saved until the server confirms it.

## Chess board

- Use accessible touch targets and support board orientation where useful.
- Validate every move with a tested rules implementation; the API remains authoritative for persisted game state.
- If local engine validation is used for responsiveness, reconcile with server validation and test engine-version consistency.
- Support screen readers and avoid communicating legal/illegal state by color alone.
- Test promotion, castling, en passant, check, checkmate, stalemate, and supported draw rules.

## CI and testing

- Add Gradle wrapper and pin compatible toolchain versions.
- Add Android build/test jobs only when the repository's CI runner has the required SDK/tooling.
- Keep signing keys and store credentials out of GitHub source; use protected secrets for release workflows.
- Test minimum supported Android version, representative mid-range devices, network interruptions, and accessibility settings.

## Exit criteria for Android foundation

- Clean checkout builds with documented commands.
- Compose app launches and renders accessible shell states.
- API base URL is environment-configurable and contains no embedded secret.
- Unit/UI test baseline runs in CI or the limitation is documented with a plan.
- No learner-facing screen implies authentication, persistence, coaching, or chess legality that is not implemented.
