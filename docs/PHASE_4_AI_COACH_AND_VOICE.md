# Phase 4 — AI Coach and Optional Voice

**Goal:** Add bounded, age-appropriate coaching that explains trusted chess facts without taking authority away from the chess engine or curriculum.
**Prerequisite:** Validated chess state, lesson objectives, server authorization, and approved child-safety/data-flow review.
**Status:** Planned; no production AI or voice provider is currently configured.

## Scope and non-goals

Included: provider-neutral server adapter, context construction, structured output, safety and factuality evaluation, timeouts, rate/cost limits, visible status, and fallback. Voice remains optional and may be deferred.

Excluded: unmoderated social chat, autonomous changes to learner records, model-authoritative move legality, hidden recording, and silent mock-to-live substitution.

## Work packages

### P4.1 Provider and data review
- [ ] Evaluate providers for target-jurisdiction eligibility, child-related terms, retention/training policy, region, security, latency, cost, and reliability.
- [ ] Document exact data sent, purpose, retention, subprocessors, and cross-border transfers.
- [ ] Minimize context to current board facts, lesson objective, relevant learner-selected difficulty/age band, and necessary conversation state.
- [ ] Keep credentials server-side and configure per-environment secrets.
- [ ] Obtain product/security/privacy approval before production traffic.

### P4.2 Coach orchestration
- [ ] Define a provider-neutral request/response interface.
- [ ] Use trusted engine output for legal moves, checks, tactical facts, and candidate-line validation.
- [ ] Constrain the model to explanation, hints, and age-appropriate teaching language.
- [ ] Validate response schema, length, and allowed content.
- [ ] Add timeouts, bounded retries, concurrency/rate limits, and per-user/product budget controls.
- [ ] Define safe fallback when the provider fails; label static fallback separately from live AI.
- [ ] Prevent coach output from directly writing mastery, moving pieces, or changing authorization state.

### P4.3 Child-safe interaction
- [ ] Define age-band language and explanation guidelines.
- [ ] Add tests for unsafe content, manipulation, personal-data solicitation, off-topic conversation, and inappropriate relationship framing.
- [ ] Avoid shame, pressure, or engagement tactics that exploit children.
- [ ] Provide a clear route to guardian/support help where appropriate.
- [ ] Do not expose public conversations or learner-generated content.

### P4.4 Evaluation
- [ ] Build a synthetic evaluation set spanning legal positions, tactical misconceptions, ambiguity, prompt injection, malformed input, and provider failure.
- [ ] Measure chess factuality against engine-validated ground truth.
- [ ] Measure age appropriateness, clarity, hint usefulness, refusal behavior, latency, and cost.
- [ ] Review false confidence and hallucinated lines manually with chess experts.
- [ ] Define release thresholds and regression evaluation for prompt/model/provider changes.

### P4.5 Optional voice
- [ ] Decide whether speech recognition, speech synthesis, or both are needed.
- [ ] Provide text alternatives and explicit microphone/processing state.
- [ ] Define consent, retention, deletion, processing location, and vendor handling before enabling.
- [ ] Avoid retaining raw audio by default unless a reviewed need exists.
- [ ] Test noisy environments, recognition errors, interruption, mute, permissions denial, and accessibility.

## Acceptance criteria

- Coach statements about board state are grounded in trusted engine results.
- Invalid/unsafe model output is rejected or safely handled.
- Provider outages and limits produce honest, understandable states.
- Demo output cannot be mistaken for live provider output.
- AI/voice data flow and retention are documented and approved.
- Evaluation suite passes agreed thresholds before release.
- Voice remains disabled until its separate approval gate passes.

## Exit evidence

Record provider assessment, data-flow diagram, evaluation results, prompt/model version, operational limits, incident/fallback runbook, and privacy/security approval.
