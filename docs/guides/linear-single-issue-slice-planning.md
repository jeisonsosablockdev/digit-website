# Linear Single-Issue Slice Planning

Use the single-issue model for non-trivial `feature/*`, `fix/*`, `security/*`, and `refactor/*` work when the task:
- requires more than one logical slice
- requires more than one PR before `develop`
- touches more than one technical area

Prefer one parent issue containing:
- objective
- scope
- non-goals
- integration branch
- slice plan table
- execution order
- risks
- completion gate
