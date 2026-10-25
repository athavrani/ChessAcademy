# Phase 3 — Curriculum, Assessment, and Mastery

**Goal:** Expand the validated vertical slice into a versioned, reviewable curriculum with evidence-based progression.
**Prerequisite:** Phase 2 slice proves the content, chess, persistence, and authorization boundaries.
**Status:** Planned; the 114-hour allocation is a proposal pending expert approval.

## Scope

- Approved curriculum map targeting 114 active learning hours.
- Modules, lessons, objectives, prerequisites, and age-band variants.
- Versioned assessment bank with validated solutions and difficulty metadata.
- Explicit mastery policy and review scheduling.
- Remediation paths, retry behavior, and progress summaries.
- Content authoring/review/publishing workflow appropriate to current team size.

## Work packages

### P3.1 Curriculum approval
- [ ] Review the hour allocation with qualified chess and learning experts.
- [ ] Reconcile total active learning time with module/lesson estimates; define how optional practice and breaks are counted.
- [ ] Approve learning objectives and prerequisites for every module.
- [ ] Confirm age-band adaptations and accessibility alternatives.
- [ ] Define content licensing, attribution, translation, and review ownership.

### P3.2 Content model and lifecycle
- [ ] Define immutable curriculum releases and stable IDs.
- [ ] Track draft, in-review, approved, published, deprecated states.
- [ ] Prevent edits to a published version from silently changing historical learner records.
- [ ] Validate prerequisite graphs for missing references and cycles.
- [ ] Validate every puzzle's board state, legal solution, alternative solutions, and explanation.
- [ ] Provide content QA tooling or scripts before large-scale content import.

### P3.3 Mastery policy
- [ ] Define evidence types and eligibility rules.
- [ ] Define thresholds using multiple items/attempts and, where appropriate, delayed/repeated evidence.
- [ ] Define hint usage, retries, remediation, and reassessment semantics.
- [ ] Version the algorithm and preserve the policy version on mastery records.
- [ ] Separate completion, proficiency estimate, and mastery.
- [ ] Ensure random guessing or repeated identical attempts cannot trivially award mastery.
- [ ] Test policy changes against synthetic historical evidence.

### P3.4 Progression and review
- [ ] Implement prerequisite unlocks based on server-validated state.
- [ ] Recommend next lessons from unmet objectives and approved progression rules.
- [ ] Schedule review where supported by evidence and learning design.
- [ ] Explain why an activity is recommended without overstating diagnostic certainty.
- [ ] Preserve progress meaning across curriculum releases.

### P3.5 Reporting and evaluation
- [ ] Provide objective-level progress and areas to revisit.
- [ ] Measure completion, assessment performance, retention, and return-to-skill outcomes separately.
- [ ] Avoid ranking children publicly or using speed/win rate as a proxy for overall learning.
- [ ] Review analytics for data minimization and age appropriateness.

## Acceptance criteria

- Every published lesson has objectives, prerequisites, age variants, assessment, feedback, accessibility notes, and reviewer/version metadata.
- The approved curriculum totals 114 active learning hours under a documented counting method.
- Mastery outcomes are reproducible from versioned evidence and policy.
- Historical records remain interpretable after curriculum or policy updates.
- Progression and remediation behavior has unit, integration, and end-to-end coverage.
- Product claims match evidence and approved curriculum content.

## Exit evidence

Publish the approved curriculum release manifest, review sign-offs, mastery policy specification, test report, migration/compatibility notes, and unresolved content gaps.
