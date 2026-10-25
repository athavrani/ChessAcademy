# Security, Privacy, and Child Safety Baseline

**Status:** Engineering baseline, not legal advice or a completed compliance assessment.
**Release gate:** Required before any child-facing production pilot.

## Threat model

Protect learners, guardians, credentials, lesson/progress records, and any optional voice/AI inputs from unauthorized access, accidental exposure, manipulation, and misleading product behavior.

Consider at least:
- A user changing learner IDs to access another family's records.
- Stolen or leaked sessions and provider credentials.
- Malicious or malformed client payloads.
- Prompt injection or unsafe generated coaching content.
- Incorrect or fabricated chess analysis presented as fact.
- Data exposure through logs, analytics, screenshots, fixtures, or support tools.
- Dependency compromise, vulnerable packages, and insecure deployment defaults.
- Confusion between demo data and persisted production data.

## Required controls

### Identity and access
- Select an identity provider only after jurisdiction, privacy, cost, and integration review.
- Use secure, short-lived sessions and standard OIDC flows.
- Enforce guardian/learner relationship checks on every learner-scoped server operation.
- Apply least privilege to service accounts, administrators, and background workers.
- Test object-level authorization and cross-guardian denial cases.

### Data protection
- Collect only information needed for a defined product purpose.
- Keep secrets server-side and out of source control, client bundles, CI logs, and error responses.
- Use TLS in transit and managed encryption at rest where supported.
- Define access, correction, export, deletion, retention, and backup-expiry workflows.
- Avoid sending names, precise birth dates, family details, or historical records to AI providers unless necessary and reviewed.

### Child-safe experience
- Use an adult-managed account/consent path appropriate to launch jurisdiction.
- Provide clear, age-appropriate explanations of AI/voice features and controls.
- Do not include public child profiles, open direct messaging, behavioral advertising, or live matchmaking in the MVP without explicit approval.
- Avoid manipulative engagement patterns, punitive streaks, shame-based feedback, or rewards that pressure children to continue.
- Provide a route for guardians to report safety concerns and request account/data actions before pilot launch.

### AI and voice
- Chess legality, move validation, and official mastery are deterministic application responsibilities, not LLM responsibilities.
- Treat model output as untrusted: constrain context, validate output shape, apply safety checks, and provide fallback.
- Establish provider data-use/retention terms, regional processing, age-related restrictions, and cost/rate limits before selecting a vendor.
- Voice must be optional, visibly active when recording/processing, and have text alternatives. Define whether audio is stored or transient before implementation.
- Never silently swap a failed live integration for mock output.

### Operations
- Add dependency and secret scanning; keep dependencies patched.
- Use separate development, staging, and production configuration.
- Restrict production data access and audit privileged operations.
- Define incident triage, containment, notification, recovery, and post-incident review.
- Log operational metadata without tokens, transcripts, or unnecessary child data.

## Privacy review checklist

Before pilot approval, record:
- Target countries/states and applicable child privacy requirements.
- Data inventory, purpose, lawful basis/consent flow as applicable.
- Guardian verification and withdrawal process.
- Vendor/subprocessor inventory and data-flow diagram.
- Data residency and cross-border transfer assessment.
- Retention schedule, deletion/export workflow, backup policy.
- Analytics and crash-reporting payload review.
- Security testing and incident response owner.
- Support escalation and safety-report handling.
- Accessibility and age-appropriate design review.

## Release gate

A successful build is not privacy approval. A child-facing pilot must remain blocked until product, engineering, security, and appropriate legal/privacy reviewers have documented acceptance of the above controls and unresolved risks.
