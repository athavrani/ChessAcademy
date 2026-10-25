# Phase 0 — Product and Architecture Baseline

**Purpose:** Establish a shared, reviewable product definition before expanding implementation.
**Status:** Documentation baseline exists; stakeholder approval and open-decision closure remain required.

## Outcomes

- Define users, goals, MVP boundaries, age bands, and success measures.
- Audit the existing Little Knights prototype without treating it as production.
- Define the proposed 114-hour curriculum target and mark unapproved allocations clearly.
- Establish architecture, trust boundaries, privacy guardrails, and delivery sequence.
- Record accepted defaults and unresolved decisions.

## Work packages

### P0.1 Product scope
- [x] Draft product requirements for ages 5–13 and age bands 5–7, 8–10, 11–13.
- [x] Document learner, guardian, and later instructor/admin roles.
- [x] Define initial MVP and non-goals.
- [ ] Obtain stakeholder approval for MVP scope and measurable acceptance criteria.
- [ ] Confirm launch jurisdictions, languages, and supported devices.

### P0.2 Prototype audit
- [x] Record prototype strengths, gaps, and non-production status.
- [ ] Map each retained prototype feature to keep, redesign, replace, or remove.
- [ ] Confirm migration/replacement strategy before removing prototype assets.

### P0.3 Curriculum baseline
- [x] Document the 114-hour target and a proposed domain allocation.
- [ ] Have a qualified chess educator and learning designer review the allocation.
- [ ] Define measurable learning objectives and mastery policy before production claims.

### P0.4 Architecture and risks
- [x] Document proposed client/API/data boundaries and deterministic chess authority.
- [x] Record initial engineering defaults and deferred vendor choices.
- [x] Document privacy, child-safety, test, and release principles.
- [ ] Complete a web/Android technical spike and record findings.
- [ ] Assign owners and due dates to open decisions.

## Deliverables

- `PRODUCT_REQUIREMENTS.md`
- `ARCHITECTURE.md`
- `PHASE_0_PROTOTYPE_AUDIT.md`
- `CURRICULUM_BLUEPRINT.md`
- `DECISION_LOG.md`
- `IMPLEMENTATION_ROADMAP.md`
- This phase plan.

## Exit gate

Phase 0 is complete only when product scope, curriculum approach, architecture boundaries, launch jurisdiction assumptions, and high-risk decisions have named reviewers and documented approval. Documents being present in GitHub does not by itself mean stakeholder approval has occurred.

## Risks

- The 114-hour total can be mistaken for approved content; label allocations as proposed until reviewed.
- A visually convincing prototype can be mistaken for working authentication, saved progress, legal chess, or live AI.
- Privacy and consent requirements depend on launch jurisdiction and data flow; do not defer review until after implementation.
