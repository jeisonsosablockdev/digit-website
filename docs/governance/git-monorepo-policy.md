# Git Governance + Monorepo Policy

## Monorepo Structure

Repository should follow clear boundaries:
- `/app` -> frontend or route layer
- `/packages` -> shared types or utilities
- `/tests` -> integration tests
- `/scripts` -> automation

Optional:
- `/infra`
- `/.github`

## Branch Strategy

Main rules:
1. `main` is protected.
2. `develop` is the default integration branch for day-to-day work.
3. Parent work branches (`feature/*`, `fix/*`, `security/*`, `refactor/*`) must start from latest `develop`.
4. No direct commits to `main`.
5. No direct commits to `develop`.
6. All changes go through pull request.
7. Direct single-branch work targets `develop`; slice PRs target the canonical mother branch unless an explicit integration branch is documented for the initiative.
8. Only release PRs may target `main` from `develop`.
9. Squash and merge only.

## Single-Issue Slice Planning

Applies to `feature/*`, `fix/*`, `security/*`, and `refactor/*` work expected to require multiple slices, multiple PRs, or more than one technical area.

### Parent Linear Issue Branch Rule

When a parent issue is created and Linear generates a branch for that issue, that branch is the canonical mother branch for the initiative.

Rules:
1. The branch generated from the parent Linear issue is the official branch for the mother issue.
2. Planning docs, feature notes, and PR traceability should reference that branch as the parent branch.
3. Slice branches must start from that parent Linear branch unless an explicit exception is documented.
4. Do not invent a parallel manual parent branch when Linear already generated one for the mother issue.
5. If an additional integration layer is needed, it must still point back to the parent Linear branch in docs and PR traceability.
6. Multi-slice initiatives must include an explicit documentation slice so canonical docs and feature-note work are reviewed independently from code-heavy slices.
7. The documentation slice must branch from the canonical mother branch like any other slice; do not hide documentation-only governance changes inside the mother branch without a slice when the initiative is running in slice mode.
8. When work is documented in Linear, the parent issue must include commit traceability, not only branch and PR traceability.

Branch naming examples:
- `feature/app-auth-shell`
- `fix/shared-branch-policy`
- `security/app-session-hardening`
- `refactor/infra-ci-cleanup`

Parent branch examples:
- `feature/shared-seo-performance-governance-dig-5`

Slice branch examples:
- `feature/shared-seo-performance-governance-dig-5-s00-documentation`
- `feature/shared-seo-performance-governance-dig-5-s01-governance`
- `feature/shared-seo-performance-governance-dig-5-s05-linear-parent-branch`

## Path-Aware Execution Rule

If changes touch:
- `/app` -> run `@frontend-cycle`
- `/packages` -> run strict shared validation
- major release or hardening work -> run `@mainnet-hardening`

If multiple areas are affected, run all relevant cycles.

## PR Requirements

Before creating a PR:
1. Run required validation.
2. Run relevant workflow gates based on path.
3. Ensure documentation scope is updated.

PR must include:
- clear description
- security impact analysis
- screenshots if frontend changed
- issue reference
- RFC reference if applicable
- risk analysis
- rollback plan
- validation section
- feature note path under `/docs/features/*.md` for qualifying feature, fix, or refactor work
- parent Linear branch reference when the work belongs to a sliced mother issue

Linear issue documentation for sliced work must include:
- mother branch
- slice branch list
- PR reference
- commit hashes and commit summaries for each slice
- integration commit hashes on the mother branch when slices have already been merged there

## Develop PR Governance Gates

Every PR targeting `develop` must pass:
1. `npm run validate`
2. required docs scope check
3. commit convention check (`type(scope): summary`)
4. label policy: one `scope:*`, one `type:*`, one `risk:*`
5. PR body policy check (`Issue`, `RFC`, `Riesgos`, `Rollback Plan`, `Validation`)
6. PR size policy
7. branch lifetime policy
