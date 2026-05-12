# Security Policy

## Canonical Sources
- `docs/governance/security-quality-policy.md`
- `docs/governance/documentation-policy.md`

## Apply When
- auth, admin, payment, data, or other privileged-path changes

## Hard Constraints
- Validate trust boundaries, authority transitions, replay protection, and privileged-path authorization.
- Frontend and auth code cannot make client-side authority decisions or allow unsigned state transitions.
- Blocking findings must be fixed before completion; waivers belong in canonical PR or RFC records, not in agent prompts.
- Keep threat-model and mitigation docs aligned through `docs-policy` when the risk surface changes.

## Required Evidence
- security findings and mitigations
- test or browser proof for each resolved high-risk path
- updated docs paths when the trust model changed
