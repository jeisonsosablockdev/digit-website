# Objective
{{GOAL}}

# Scope
{{SCOPE_ITEMS}}

# Non-goals
{{NON_GOAL_ITEMS}}

# Linear
- Issue: `{{ISSUE_ID}}`
- Owner: `{{OWNER}}`
- Mother Issue Branch: `{{PARENT_BRANCH}}`
- Problem Artifact: `{{PROBLEM_ARTIFACT_PATH}}`
- Solution Artifact: `{{SOLUTION_ARTIFACT_PATH}}`

# Integration Branch
`{{INTEGRATION_BRANCH}}`

# Slice Plan
| Slice | Status | Branch | Objective | Scope tecnico | Validation | PR |
| --- | --- | --- | --- | --- | --- | --- |
{{SLICE_ROWS}}

Documentation rule:
- Include one explicit documentation slice when the initiative is executed in slice mode.
- The documentation slice must branch from the mother issue branch and own canonical docs, feature-note updates, and planning traceability.
- The documentation slice must create or update the problem artifact first.
- The documentation slice must create or update the solution artifact second.
- If RFC is required, the documentation slice owns that RFC traceability.
- The solution artifact must be decision-complete before implementation slices begin.

# Commit Traceability
- Mother Branch: `{{PARENT_BRANCH}}`
- PR: `{{PR_REFERENCE}}`
- Slice commits:
{{SLICE_COMMIT_ITEMS}}
- Mother-branch integration commits:
{{INTEGRATION_COMMIT_ITEMS}}

# Order of Execution
{{EXECUTION_ORDER}}

# Risks
{{RISK_ITEMS}}

# Open Technical Questions
{{OPEN_TECHNICAL_QUESTIONS}}

# Tooling Changes
{{TOOLING_CHANGES}}

# Completion Gate
{{COMPLETION_GATE_ITEMS}}
