# Security And Quality Policy

Security and quality gates are mandatory for implementation work.

## Core Rules
- Critical tests must execute in the required environment.
- Privileged or risky flows must be verified with reproducible evidence.
- Client state is never authoritative.
- High-risk changes require explicit trust-boundary review.
- Missing evidence blocks completion.

## Acceptance Expectations
- Validation commands must be recorded.
- High-risk paths need test or browser proof.
- Application-layer mocks are not acceptable as final proof for critical production behavior when real verification is required.

## Documentation Alignment
- When security posture or trust boundaries change, keep `docs/threat-model.md`, `docs/auth-flow.md`, `docs/session-model.md`, and related feature notes aligned.
