# Codex Orchestration Architecture

This repository uses a small orchestration layer under `.codex/`:
- `agents/` defines specialist roles
- `policies/` defines execution constraints
- `workflows/` defines path-aware task flows

Current active specialists:
- `planner`
- `frontend`
- `qa`
- `docs`
- `security`
- `reviewer`

Current active workflows:
- `frontend-cycle`
- `responsive-qa`
- `mainnet-hardening`

The intent is simple:
1. `planner` detects scope.
2. Matching workflows are activated.
3. Specialists handle only their narrow concern.
4. `reviewer` is the final gate.
