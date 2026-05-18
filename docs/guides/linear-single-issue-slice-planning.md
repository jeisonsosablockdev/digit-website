# Linear Single-Issue Slice Planning

Use the single-issue model for non-trivial `feature/*`, `fix/*`, `security/*`, and `refactor/*` work when the task:
- requires more than one logical slice
- requires more than one PR before `develop`
- touches more than one technical area

Prefer one parent issue containing:
- objective
- scope
- non-goals
- mother issue branch generated from Linear when available
- problem artifact reference
- solution artifact reference
- slice plan table
- execution order
- risks
- completion gate

When Linear generates the parent branch for the mother issue, use that branch as the canonical base for slices instead of inventing a parallel manual parent branch.

If the initiative runs in slice mode, include one dedicated documentation slice.

That documentation slice should:
- branch from the mother issue branch
- carry canonical docs, feature-note updates, and planning traceability
- create or update the problem artifact first
- create or update the solution artifact second
- own RFC creation/update when applicable
- remain separate from heavier implementation slices so governance/doc review stays clean

The solution artifact must be decision-complete before implementation slices begin.

That means it must already answer:

- what is being built
- how slices are ordered
- what tests are written first
- what tooling will be installed or configured
- what material technical questions are still open

If a material technical question remains unresolved and cannot be derived from the repo, record it in the solution artifact and ask the user before opening the affected implementation slice.

When the initiative introduces new tooling, document in the solution artifact:

- dependency names
- package manager target (`package.json` or equivalent)
- new scripts
- setup/config files
- the slice responsible for landing that tooling

When you document progress in the parent Linear issue, include:
- mother branch
- slice branches
- PR reference when available
- commit hash plus short summary for each completed slice
- mother-branch integration commits after slices are merged there

Operational planning docs should be maintained in English and Spanish so the repo and Linear stay aligned across both language surfaces.
