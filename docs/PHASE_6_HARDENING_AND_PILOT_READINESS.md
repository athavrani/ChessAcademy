# Phase 6 — Hardening and Pilot Readiness

**Goal:** Establish evidence that the product is safe, reliable, accessible, supportable, and operationally ready for a limited pilot.
**Prerequisite:** MVP functionality and guardian controls are implemented; no unresolved critical security/privacy defects.
**Status:** Planned; a green build alone is not pilot approval.

## Work packages

### P6.1 Security and privacy
- [ ] Complete threat model and security review for web, Android, API, database, and vendors.
- [ ] Run dependency, secret, static-analysis, and appropriate dynamic/security tests.
- [ ] Test authentication/session expiry, authorization boundaries, rate limits, and abuse cases.
- [ ] Complete data inventory, data-flow map, retention schedule, deletion/export tests, and vendor review.
- [ ] Review consent and child privacy requirements for every intended launch jurisdiction with qualified counsel/privacy specialists.
- [ ] Verify logs, analytics, crash reports, and support tools do not expose unnecessary child data.
- [ ] Define incident response, notification/escalation, and breach-handling ownership.

### P6.2 Functional and chess correctness
- [ ] Run full chess regression suite, including special moves, terminal states, draw rules, replay, and puzzle validation.
- [ ] Run curriculum content QA and verify all published items have reviewer/version metadata.
- [ ] Verify mastery reproducibility and historical policy-version interpretation.
- [ ] Run cross-platform learner and guardian end-to-end scenarios.
- [ ] Test interrupted sessions, duplicate submissions, stale clients, and multi-device conflicts.

### P6.3 Accessibility and age appropriateness
- [ ] Complete web keyboard and screen-reader review.
- [ ] Test Android screen readers, font scaling, touch targets, contrast, orientation, and lifecycle.
- [ ] Verify audio alternatives, reduced-motion behavior, and error comprehension.
- [ ] Conduct age-appropriate usability testing using an approved research and consent process.
- [ ] Review non-manipulative engagement, notifications, and stopping points.

### P6.4 Performance and reliability
- [ ] Set and approve measurable SLOs/targets for API latency, error rate, lesson start, board interaction, sync, and Android stability.
- [ ] Test representative mid-range devices and supported browsers.
- [ ] Perform load and resilience testing appropriate to the pilot scale.
- [ ] Verify database backup/restore and migration rollback procedures.
- [ ] Test provider timeout, outage, quota exhaustion, and fallback behavior.
- [ ] Verify offline/unsynced progress states and recovery semantics.

### P6.5 Operations and support
- [ ] Add service health, error, latency, sync, and cost monitoring with privacy-safe telemetry.
- [ ] Create alerts with actionable runbooks and named owners.
- [ ] Document deployment, rollback, data migration, backup restoration, and incident response.
- [ ] Prepare support workflow for account access, data requests, and safety concerns.
- [ ] Define pilot enrollment, consent, feedback collection, exit, and data deletion processes.
- [ ] Keep a known-issues register and escalation path.

### P6.6 Pilot governance
- [ ] Define cohort size, duration, success measures, stop conditions, and responsible owner.
- [ ] Obtain product, engineering, security, privacy/legal, and curriculum sign-off.
- [ ] Verify no demo data or simulated integrations can enter pilot analytics unnoticed.
- [ ] Document unresolved risks and explicitly accepted mitigations.
- [ ] Confirm rollback and pilot pause authority.

## Pilot go/no-go checklist

A pilot must not start unless all applicable items are checked:

- [ ] No unresolved critical/high-severity security issues without formally approved mitigation.
- [ ] Guardian authorization and consent flows have been tested.
- [ ] Data inventory, retention, deletion, export, and incident-response procedures are operational.
- [ ] Chess correctness and content-review gates pass.
- [ ] Web and Android critical journeys pass on supported environments.
- [ ] Accessibility and age-appropriate experience reviews are complete.
- [ ] Monitoring, support ownership, rollback, and backup restoration are verified.
- [ ] AI/voice is disabled or separately reviewed and approved.
- [ ] Pilot success/stop criteria and participant protections are documented.
- [ ] All required reviewers have recorded approval.

## Exit criteria

Pilot readiness is an evidence-based decision, not an automatic consequence of finishing a checklist. Record each control's evidence, owner, status, exceptions, expiry/review date, and approving reviewer. If a required control is incomplete, limit scope or defer the pilot.
