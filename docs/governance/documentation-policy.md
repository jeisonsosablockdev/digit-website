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

If the initiative is documented in Linear, the issue body or canonical update comment must include branch, PR, and commit-hash traceability for the slices already executed.

## Strict Rule

If documentation is missing or outdated, the task is incomplete.

## Initiative Artifacts For Features And Fixes

Non-trivial `feature/*`, `fix/*`, `security/*`, and `refactor/*` initiatives must use two artifacts:

- a problem artifact
- a solution artifact

Recommended locations:

- feature problem artifact: `/docs/features/feature-<slug>.md`
- feature solution artifact: `/docs/features/feature-<slug>-implementation.md`
- fix problem artifact: `/docs/fixes/fix-<slug>.md`
- fix solution artifact: `/docs/fixes/fix-<slug>-implementation.md`

Required order:

1. create or update the problem artifact
2. create or update the solution artifact
3. open implementation slices only after the solution artifact is ready for that level of execution

Problem artifacts must capture:

- the problem statement
- the expected outcome
- why the work matters
- initial scope
- open questions

Solution artifacts must capture:

- the chosen technical approach
- atomic slice plan
- branch and merge structure
- tests-first plan
- validation gates
- tooling changes
- commit and Linear traceability

## Solution Artifact Quality Rule

The solution artifact is not a conceptual note. It is the technical implementation source of truth for the next slice.

It must be decision-complete for the level of implementation it unlocks.

That means it must:

- state explicit technical choices
- state execution order and dependencies
- state tests-first expectations
- state package, script, and configuration changes when new tooling is introduced
- state critical open technical questions when they exist

If a material technical decision cannot be derived from the repository and still depends on user intent, the solution artifact must:

- record the question explicitly
- block the corresponding implementation slice until the question is answered

## Bilingual Operational Documentation

Required operational documentation for features, fixes, RFCs, and execution artifacts must be maintained in English and Spanish.

Allowed forms:

- one file with aligned ES and EN sections
- two linked files when a policy explicitly allows that structure

In both cases:

- both language versions must describe the same current operating state
- neither language version may lag behind the other

## Feature Notes for Small or Iterative Work

For branch types:
- `feature/*`
- `fix/*`
- `refactor/*`

If changes touch product code (`/app`, `/packages`, `/lib`, `/tests`, `/e2e`), the PR must update at least one Markdown file under `/docs/features/*.md`.

Shared governance, agent-routing, workflow, CI, or validation work that changes how product work is gated must also update at least one Markdown file under `/docs/features/*.md`.

When that work belongs to a multi-slice mother issue, plan and execute a dedicated documentation slice so the doc delta is reviewable on its own.

For Linear-tracked slice work, that documentation slice should own the commit-traceability update in the parent issue unless a later documentation slice explicitly supersedes it.

When dual artifacts exist, the feature note under `/docs/features/*.md` acts as the thin shared traceability layer, while the deeper problem/solution detail remains in the owning feature or fix artifacts.

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

If the initiative runs in slice mode:

- the RFC must be created or updated in the documentation slice
- the documentation slice is the owner of RFC traceability for that initiative
- implementation slices must reference the RFC already established by the documentation slice instead of creating ad hoc RFC updates later
