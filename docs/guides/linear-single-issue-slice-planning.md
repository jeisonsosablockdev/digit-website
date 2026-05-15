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
- slice plan table
- execution order
- risks
- completion gate

When Linear generates the parent branch for the mother issue, use that branch as the canonical base for slices instead of inventing a parallel manual parent branch.

If the initiative runs in slice mode, include one dedicated documentation slice.

That documentation slice should:
- branch from the mother issue branch
- carry canonical docs, feature-note updates, and planning traceability
- remain separate from heavier implementation slices so governance/doc review stays clean

When you document progress in the parent Linear issue, include:
- mother branch
- slice branches
- PR reference when available
- commit hash plus short summary for each completed slice
- mother-branch integration commits after slices are merged there
