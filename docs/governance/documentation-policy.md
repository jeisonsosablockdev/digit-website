# Continuous Documentation Policy

Documentation must be created and updated alongside development.

## Canonical Precedence
- This file is the canonical documentation policy for the repository.
- `AGENTS.md`, guides, helper scripts, and workflow summaries may reference this policy, but must not redefine it with conflicting or looser rules.
- The executable enforcement source is `scripts/ci/check-required-docs.sh`.

## Core Architecture Changes

Changes that alter architecture, domain state, security boundaries, or persistence shape must update the relevant canonical docs:
- `/docs/architecture.md`
- `/docs/authority-model.md`
- `/docs/state-machine.md`
- `/docs/threat-model.md`

Documentation should capture:
- system boundaries
- ownership and permission rules
- state transitions and invariants
- risks and mitigations

## Frontend/Auth Changes (`/app`)

Must update or create:
- `/docs/auth-flow.md`
- `/docs/session-model.md`

Must document:
- authentication flow
- session lifecycle
- cookie or token strategy
- replay protection logic when applicable
- trust boundaries

## SEO And Performance Governance Changes

Changes that alter frontend delivery rules, performance budgets, rendering constraints, metadata standards, robots, sitemap, font strategy, image strategy, or first-load script policy must update:
- `/docs/governance/seo-performance-policy.md`

If the change is implemented as a shared feature initiative, also update a feature note under:
- `/docs/features/*.md`

If the initiative is running in single-issue slice mode, documentation updates must live in an explicit documentation slice branched from the mother issue branch rather than being mixed informally into the mother branch.

## Strict Rule

If documentation is missing or outdated, the task is incomplete.

## Feature Notes for Small or Iterative Work

For branch types:
- `feature/*`
- `fix/*`
- `refactor/*`

If changes touch product code (`/app`, `/packages`, `/lib`, `/tests`, `/e2e`), the PR must update at least one Markdown file under `/docs/features/*.md`.

Shared governance, agent-routing, workflow, CI, or validation work that changes how product work is gated must also update at least one Markdown file under `/docs/features/*.md`.

When that work belongs to a multi-slice mother issue, plan and execute a dedicated documentation slice so the doc delta is reviewable on its own.

## RFC Workflow by Epic

Use RFCs to document architecture debate, multi-model review, and final technical decisions for epics or stories with meaningful complexity.

Mandatory directory and file convention:
- `/docs/rfcs/EPIC-<id>-<slug>/`
- `/docs/rfcs/EPIC-<id>-<slug>/README.md`
- `/docs/rfcs/EPIC-<id>-<slug>/STORY-<id>-<slug>.md`

Mandatory sections per story RFC:
- `Context`
- `Proposal`
- `Critique`
- `Resolution`
- `Decision`
- `Status`

Allowed status values:
- `draft`
- `in-review`
- `approved`
- `implemented`
- `rejected`
