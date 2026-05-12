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
7. Direct single-branch work targets `develop`; slice PRs target the parent `*-integration` branch.
8. Only release PRs may target `main` from `develop`.
9. Squash and merge only.

## Single-Issue Slice Planning

Applies to `feature/*`, `fix/*`, `security/*`, and `refactor/*` work expected to require multiple slices, multiple PRs, or more than one technical area.

Branch naming examples:
- `feature/app-auth-shell`
- `fix/shared-branch-policy`
- `security/app-session-hardening`
- `refactor/infra-ci-cleanup`

Integration branch examples:
- `feature/shared-doc-governance-bri-149-integration`

Slice branch examples:
- `feature/shared-doc-governance-bri-149-s01-policy-cleanup`

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

## Develop PR Governance Gates

Every PR targeting `develop` must pass:
1. `npm run validate`
2. required docs scope check
3. commit convention check (`type(scope): summary`)
4. label policy: one `scope:*`, one `type:*`, one `risk:*`
5. PR body policy check (`Issue`, `RFC`, `Riesgos`, `Rollback Plan`, `Validation`)
6. PR size policy
7. branch lifetime policy
