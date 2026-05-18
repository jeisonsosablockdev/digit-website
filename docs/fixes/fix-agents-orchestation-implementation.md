# Fix Implementation: Agents Orchestation

Last Updated: 2026-05-18 UTC
Status: planned
Owner: shared workflow
Related Problem Artifact: `docs/fixes/fix-agents-orchestation.md`
Linear Issue: `DIG-7`
Mother Branch: `jeisonsosablockdev/dig-7-fix-agents-orchestation`
Documentation Slice: `fix/docs-fix-agents-orchestation-dig-7-s00-documentation`

## Current State

- mother branch created
- documentation slice created
- problem artifact exists
- solution artifact exists
- S00 is the only slice allowed to exist before the implementation plan is approved

## ES

## Summary

Este artefacto describe la solución e implementación del fix `DIG-7`.

Su objetivo es convertir los hallazgos del artefacto del problema en una ejecución real, atómica y orientada por TDD, con slices pequeños, ramas claras y gates verificables.

## Goal

Implementar el fix en slices atómicos para que el sistema:

- obligue issue en Linear para RFCs, features y fixes nuevos
- tome la mother branch solo desde `git branch name`
- exija artefacto del problema y artefacto de solución
- obligue documentation slice antes de implementación multi-slice
- ancle RFCs al documentation slice
- introduzca TDD real con `Vitest`, `expect()`, `@testing-library/react` y `@testing-library/jest-dom`
- convierta PR governance, responsive QA y AGENTS/.codex drift en enforcement verificable

Este artefacto debe dejar la implementación técnicamente cerrada para el siguiente slice.

Eso significa:

- explicar la solución con suficiente precisión para evitar decisiones implícitas
- declarar decisiones técnicas explícitas, no solo intención general
- registrar dependencias, gates y secuencia de ejecución
- registrar preguntas técnicas críticas cuando existan
- bloquear el slice correspondiente si una decisión material sigue abierta y no puede descubrirse en el repo

## Non-Goals

- reescribir todo el sistema en una sola pasada
- resolver todos los flujos UI del repo dentro de este fix
- introducir una librería pesada de testing desde el día uno
- reemplazar por completo la verificación humana

## Implementation Strategy

La implementación se hará en slices secuenciales y atómicos.

Orden:

1. documentación base y artefactos
2. políticas y guías canónicas
3. enforcement de Linear y mother branch
4. enforcement de artefactos problem/solution
5. enforcement de RFC + documentation slice
6. base TDD y tests del repo
7. enforcement de PR governance
8. enforcement AGENTS/.codex y drift control

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `fix/docs-fix-agents-orchestation-dig-7-s00-documentation` | Establecer artefactos base | `docs/fixes/*` | No | `npm run validate:docs-governance` | Artefactos problem/solution presentes |
| S01 | `fix/shared-fix-agents-orchestation-dig-7-s01-governance` | Alinear políticas canónicas | `docs/governance/*`, `docs/guides/*`, `docs/templates/*` | Sí, tests de validadores cuando aplique | `npm run validate:docs-governance` | Reglas nuevas formalizadas |
| S02 | `fix/shared-fix-agents-orchestation-dig-7-s02-linear-branching` | Forzar issue en Linear y mother branch canónica | `scripts/git-start.sh`, `scripts/linear-plan-core.js`, docs relacionadas | Sí | `npm test`, `npm run validate:docs-governance` | Mother branch y issue workflow enforceables |
| S03 | `fix/shared-fix-agents-orchestation-dig-7-s03-artifact-enforcement` | Forzar dual artifact model | `scripts/ci/check-required-docs.sh`, policies, docs | Sí | `npm test`, `npm run validate:docs-governance` | Problem/solution artifacts obligatorios |
| S04 | `fix/shared-fix-agents-orchestation-dig-7-s04-rfc-enforcement` | Mover ownership RFC al documentation slice | `scripts/rfc-new-core.js`, templates RFC, policies | Sí | `npm test`, `npm run validate:docs-governance` | RFC ligado al documentation slice |
| S05 | `fix/shared-fix-agents-orchestation-dig-7-s05-tdd-foundation` | Introducir base TDD real | `package.json`, `tests/**`, config de test, scripts de validación | Sí, primero infraestructura de test | `npm test`, `npm run validate` | `Vitest` y matchers de DOM operativos |
| S06 | `fix/shared-fix-agents-orchestation-dig-7-s06-pr-enforcement` | Reemplazar placeholders de PR por gates reales y endurecer browser QA | `scripts/ci/pr-*`, metadata governance, `package.json`, config browser QA | Sí | `npm test`, `npm run validate` | PR governance y browser QA ejecutables |
| S07 | `fix/shared-fix-agents-orchestation-dig-7-s07-agents-codex-drift` | Controlar drift y aclarar qué es declarativo vs enforceable | `AGENTS.md`, `.codex/**`, drift checks | Sí | `npm test`, `npm run validate` | Drift visible y bloqueable |

## Slice Dependencies And Merge Order

- `S00` debe existir antes de cualquier slice de implementación.
- `S01` depende de `S00`.
- `S02` depende de `S01`.
- `S03` depende de `S01` y se apoya en la base de `S02`.
- `S04` depende de `S01` y `S03`.
- `S05` depende de `S01` y debe estar listo antes de endurecer slices posteriores con tests.
- `S06` depende de `S05`.
- `S07` depende de `S01` y `S05`.

Regla de merge:

- cada slice mergea de vuelta a `jeisonsosablockdev/dig-7-fix-agents-orchestation`
- ningún slice va directo a `develop`
- el cierre de la iniciativa ocurre solo cuando la mother branch ya integra todos los slices aprobados

## Per-Slice Deliverables

### S01 Governance

- formalizar dual artifact model en políticas canónicas
- formalizar bilingüismo operativo
- formalizar documentation slice como primer slice obligatorio
- formalizar ownership RFC dentro del documentation slice

### S02 Linear And Branching

- endurecer `git-start.sh`
- endurecer `linear-plan-core.js`
- bloquear mother branch manual cuando ya exista `git branch name`
- dejar trazabilidad explícita de issue madre + mother branch

### S03 Artifact Enforcement

- endurecer `check-required-docs.sh`
- exigir `docs/fixes/*.md`
- exigir problem artifact y solution artifact cuando aplique
- bloquear implementación no trivial sin ambos artefactos

### S04 RFC Enforcement

- mover creación/actualización de RFC al documentation slice
- endurecer templates RFC con ownership de issue, branch y slice
- endurecer scaffold RFC con traceability mínima

### S05 TDD Foundation

- agregar `npm test`
- agregar estructura `tests/`
- instalar y configurar `vitest`
- instalar y configurar `@testing-library/react`
- instalar y configurar `@testing-library/jest-dom`
- instalar y configurar `jsdom`
- agregar scripts como `test` y `test:watch`
- crear setup base de `Vitest`
- conectar tests al flujo de `validate`

### S06 PR Enforcement

- reemplazar placeholders de PR
- convertir metadata mínima en gate real
- endurecer helpers de apertura/preflight con checks ejecutables
- instalar y configurar `@playwright/test`
- agregar script browser/e2e como `test:e2e` o equivalente definido por la política final
- conectar `Playwright` al enforcement de browser-critical QA cuando aplique

### S07 AGENTS/.codex Drift

- detectar drift entre documentos canónicos y resúmenes operativos
- revisar `.codex/config.toml`
- distinguir explícitamente qué es declarativo y qué es enforceable

## TDD Plan First

## Test Stack

Base propuesta:

- `Vitest`
- `expect()` integrado de `Vitest`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `jsdom`
- `@playwright/test` para gates browser-critical

Razones:

- unifica el stack del repo para UI, scripts, validadores y governance tooling
- acelera el feedback loop para TDD
- alinea el repo con prácticas modernas de Next.js y React
- permite assertions de DOM expresivas basadas en experiencia real de usuario
- hace explícito desde el plan el costo de infraestructura en `package.json`, scripts y configuración

## Test Directory

Se propone crear:

- `tests/scripts/`
- `tests/governance/`
- `tests/ui/`
- `tests/setup/`

Ejemplos iniciales:

- `tests/scripts/git-start.test.js`
- `tests/scripts/linear-plan-core.test.js`
- `tests/scripts/rfc-new-core.test.js`
- `tests/scripts/check-required-docs.test.js`
- `tests/scripts/pr-governance.test.js`
- `tests/governance/agents-drift.test.js`
- `tests/ui/site-shell.test.tsx`
- `tests/setup/vitest.setup.ts`
- `playwright.config.ts` o equivalente definido por la política final

## Red -> Green Discipline

Cada slice que cambie enforcement debe seguir esta secuencia:

1. escribir prueba
2. ejecutar prueba y confirmar fallo inicial
3. implementar cambio mínimo
4. re-ejecutar prueba hasta pasar
5. correr `npm test`
6. correr `npm run validate`

## Slice-by-Slice TDD Targets

### S02 Linear and branching

Pruebas primero:

- falla si no hay issue en Linear cuando el flujo lo requiere
- falla si no se provee mother branch canónica
- falla si se intenta crear mother branch manual cuando ya existe `git branch name`

### S03 Artifact enforcement

Pruebas primero:

- falla si hay `feature/*` sin artifact requerido
- falla si hay `fix/*` sin `docs/fixes/*.md`
- falla si existe problem artifact pero no solution artifact donde aplique

### S04 RFC enforcement

Pruebas primero:

- falla si una iniciativa con RFC no lo asigna al documentation slice
- falla si el scaffold no incorpora traceability mínima esperada

### S05 TDD foundation

Pruebas primero:

- el runner descubre tests correctamente
- `npm test` falla con test roto
- `npm test` pasa con fixtures verdes
- `validate` integra la capa de tests
- los componentes Next.js/React pueden usar `expect()` + `jest-dom`
- `package.json` refleja el stack de `Vitest`, Testing Library y `jsdom`

### S06 PR enforcement

Pruebas primero:

- falla si faltan secciones de PR requeridas
- falla si faltan labels esperados cuando se implemente esa validación
- falla si el helper sigue siendo placeholder
- `Playwright` queda instalable y ejecutable para rutas browser-critical
- existe script browser/e2e documentado en `package.json`

### S07 AGENTS/.codex drift

Pruebas primero:

- falla si `AGENTS.md` o `.codex` contradicen reglas canónicas seleccionadas
- detecta referencias de tooling driftado en `.codex/config.toml`

## Documentation Rules For This Initiative

- todo cambio canónico debe quedar en inglés y en español cuando la política final así lo exija
- el problem artifact y el solution artifact deben mantenerse sincronizados
- Linear debe documentar tanto el problema como la solución
- ningún slice de implementación debe empezar si el solution artifact no refleja el slice map actual
- ningún slice de implementación debe empezar si el solution artifact deja una decisión técnica material sin resolver y sin pregunta explícita al usuario

## Linear Sync Plan

## What must be mirrored in Linear

- summary del problema
- objetivo de la solución
- mother branch canónica
- documentation slice
- slice plan
- estado de cada slice
- commit traceability por slice
- integration commits sobre la mother branch

## Source of Truth Rule

- el artifact local se actualiza primero
- luego se sincroniza a Linear
- nunca al revés

## Validation Gates

## Per Slice

- `npm run validate:docs-governance` para slices documentales puros
- `npm test` para slices con enforcement o scripts
- `npm run validate` para slices que ya modifiquen gates principales
- cuando el slice incorpore browser QA ejecutable, debe incluir además el comando `Playwright` definido por la política final

## Initiative Level

Antes de cerrar la mother branch:

- todos los slices mergeados en la mother branch
- todos los commits trazados en el solution artifact
- Linear actualizado desde artifacts
- `npm test`
- `npm run validate`

## Risks

- endurecer reglas demasiado rápido y romper flujo diario
- introducir checks frágiles con falsos positivos
- mezclar enforcement de policy con enforcement de contenido semántico difícil de validar
- sobrediseñar la capa de tests antes de tener cobertura mínima útil

## Mitigations

- implementar por slices pequeños
- empezar por contratos simples y verificables
- usar `Vitest` unificado y matchers del DOM antes de introducir tooling adicional
- validar cada enforcement nuevo contra el repo actual

## Commit Traceability

Estado actual:

- mother branch creada: `jeisonsosablockdev/dig-7-fix-agents-orchestation`
- documentation slice creada: `fix/docs-fix-agents-orchestation-dig-7-s00-documentation`
- commit actual del documentation slice:
  - `03df47a` `docs(docs): add agents orchestation fix artifact`

## Completion Criteria

Esta solución se considera completada cuando:

- existe dual artifact model operativo
- Linear issue + mother branch canónica están enforced
- documentation slice es obligatoria antes de implementation slices
- RFC queda owned por el documentation slice
- existe `npm test`
- tests-first está exigido por policy y por tooling
- `Vitest` queda definido como runner unificado del repo
- `@testing-library/jest-dom` queda definido como obligatorio para superficies UI de Next.js/React
- `package.json` lista explícitamente dependencias, scripts y setup del stack de test
- `Playwright` queda planificado explícitamente como parte del endurecimiento de browser-critical QA
- PR governance deja de depender de placeholders
- AGENTS/.codex drift se vuelve visible y bloqueable

---

## EN

## Current State

- mother branch created
- documentation slice created
- problem artifact exists
- solution artifact exists
- S00 is the only slice allowed to exist before the implementation plan is approved

## Summary

This artifact describes the solution and implementation plan for fix `DIG-7`.

Its purpose is to turn the findings from the problem artifact into a real, atomic, TDD-oriented execution plan with small slices, clear branches, and verifiable gates.

## Goal

Implement the fix through atomic slices so the system:

- enforces a Linear issue for every new RFC, feature, and fix
- derives the mother branch only from Linear `git branch name`
- requires both a problem artifact and a solution artifact
- requires a documentation slice before multi-slice implementation
- anchors RFC work to the documentation slice
- introduces real TDD using `Vitest`, integrated `expect()`, `@testing-library/react`, and `@testing-library/jest-dom`
- turns PR governance, responsive QA, and AGENTS/.codex drift into enforceable checks

This artifact must leave the implementation technically closed for the next slice.

That means it must:

- explain the solution with enough precision to avoid implicit decisions
- record explicit technical choices, not only general intent
- record dependencies, gates, and execution order
- record critical technical questions when they exist
- block the corresponding slice when a material decision is still open and cannot be discovered from the repo

## Non-Goals

- rewriting the entire system in one pass
- solving all UI flows inside this fix
- introducing a heavy test framework from day one
- replacing human review entirely

## Implementation Strategy

Implementation will proceed through sequential atomic slices.

Order:

1. baseline documentation and artifacts
2. canonical policies and guides
3. Linear and mother-branch enforcement
4. problem/solution artifact enforcement
5. RFC + documentation-slice enforcement
6. TDD foundation
7. PR enforcement
8. AGENTS/.codex drift enforcement

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `fix/docs-fix-agents-orchestation-dig-7-s00-documentation` | Establish baseline artifacts | `docs/fixes/*` | No | `npm run validate:docs-governance` | Problem/solution artifacts exist |
| S01 | `fix/shared-fix-agents-orchestation-dig-7-s01-governance` | Align canonical policies | `docs/governance/*`, `docs/guides/*`, `docs/templates/*` | Yes, validator tests where applicable | `npm run validate:docs-governance` | New rules formalized |
| S02 | `fix/shared-fix-agents-orchestation-dig-7-s02-linear-branching` | Enforce Linear issue and canonical mother branch | `scripts/git-start.sh`, `scripts/linear-plan-core.js`, related docs | Yes | `npm test`, `npm run validate:docs-governance` | Mother branch and issue workflow enforceable |
| S03 | `fix/shared-fix-agents-orchestation-dig-7-s03-artifact-enforcement` | Enforce dual artifact model | `scripts/ci/check-required-docs.sh`, policies, docs | Yes | `npm test`, `npm run validate:docs-governance` | Problem/solution artifacts mandatory |
| S04 | `fix/shared-fix-agents-orchestation-dig-7-s04-rfc-enforcement` | Move RFC ownership into documentation slice | `scripts/rfc-new-core.js`, RFC templates, policies | Yes | `npm test`, `npm run validate:docs-governance` | RFC tied to documentation slice |
| S05 | `fix/shared-fix-agents-orchestation-dig-7-s05-tdd-foundation` | Introduce real TDD foundation | `package.json`, `tests/**`, test config, validation scripts | Yes, infrastructure first | `npm test`, `npm run validate` | `Vitest` and DOM matchers operational |
| S06 | `fix/shared-fix-agents-orchestation-dig-7-s06-pr-enforcement` | Replace PR placeholders with real gates and harden browser QA | `scripts/ci/pr-*`, metadata governance, `package.json`, browser QA config | Yes | `npm test`, `npm run validate` | PR governance and browser QA executable |
| S07 | `fix/shared-fix-agents-orchestation-dig-7-s07-agents-codex-drift` | Control drift and clarify declarative vs enforceable behavior | `AGENTS.md`, `.codex/**`, drift checks | Yes | `npm test`, `npm run validate` | Drift visible and blockable |

## Slice Dependencies And Merge Order

- `S00` must exist before any implementation slice.
- `S01` depends on `S00`.
- `S02` depends on `S01`.
- `S03` depends on `S01` and builds on `S02`.
- `S04` depends on `S01` and `S03`.
- `S05` depends on `S01` and must exist before later slices harden against tests.
- `S06` depends on `S05`.
- `S07` depends on `S01` and `S05`.

Merge rule:

- every slice merges back into `jeisonsosablockdev/dig-7-fix-agents-orchestation`
- no slice goes directly to `develop`
- the initiative closes only when the mother branch already contains all approved slices

## Per-Slice Deliverables

### S01 Governance

- formalize the dual artifact model in canonical policies
- formalize bilingual operational documentation
- formalize the documentation slice as the required first slice
- formalize RFC ownership inside the documentation slice

### S02 Linear And Branching

- harden `git-start.sh`
- harden `linear-plan-core.js`
- block manual mother branches when `git branch name` already exists
- make parent issue + mother branch traceability explicit

### S03 Artifact Enforcement

- harden `check-required-docs.sh`
- require `docs/fixes/*.md`
- require both problem and solution artifacts where applicable
- block non-trivial implementation without both artifacts

### S04 RFC Enforcement

- move RFC creation/update into the documentation slice
- harden RFC templates with issue, branch, and slice ownership
- harden RFC scaffolding with minimum traceability

### S05 TDD Foundation

- add `npm test`
- add `tests/` structure
- install and configure `vitest`
- install and configure `@testing-library/react`
- install and configure `@testing-library/jest-dom`
- install and configure `jsdom`
- add scripts such as `test` and `test:watch`
- create the base `Vitest` setup
- connect tests into the `validate` flow

### S06 PR Enforcement

- replace PR placeholders
- turn minimum PR metadata into a real gate
- harden open/preflight helpers with executable checks
- install and configure `@playwright/test`
- add a browser/e2e script such as `test:e2e` or the equivalent chosen by final policy
- connect `Playwright` into browser-critical QA enforcement where required

### S07 AGENTS/.codex Drift

- detect drift between canonical docs and operational summaries
- review `.codex/config.toml`
- explicitly distinguish declarative vs enforceable behavior

## TDD Plan First

## Test Stack

Proposed base stack:

- `Vitest`
- integrated `expect()` from `Vitest`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `jsdom`
- `@playwright/test` for browser-critical gates

Reasons:

- unifies the repo stack across UI, scripts, validators, and governance tooling
- keeps TDD feedback fast
- aligns the repo with modern Next.js and React practice
- enables expressive DOM assertions based on real user-visible behavior
- makes the infrastructure cost explicit in `package.json`, scripts, and config from the start

## Test Directory

Proposed structure:

- `tests/scripts/`
- `tests/governance/`
- `tests/ui/`
- `tests/setup/`

Initial examples:

- `tests/scripts/git-start.test.js`
- `tests/scripts/linear-plan-core.test.js`
- `tests/scripts/rfc-new-core.test.js`
- `tests/scripts/check-required-docs.test.js`
- `tests/scripts/pr-governance.test.js`
- `tests/governance/agents-drift.test.js`
- `tests/ui/site-shell.test.tsx`
- `tests/setup/vitest.setup.ts`
- `playwright.config.ts` or the equivalent required by final policy

## Red -> Green Discipline

Every slice that changes enforcement must follow:

1. write the test
2. run it and confirm the initial failure
3. implement the minimum change
4. rerun until green
5. run `npm test`
6. run `npm run validate`

## Slice-by-Slice TDD Targets

### S02 Linear and branching

Tests first:

- fail when no Linear issue exists where required
- fail when the canonical mother branch is missing
- fail when a manual mother branch is created even though Linear already provides `git branch name`

### S03 Artifact enforcement

Tests first:

- fail when `feature/*` lacks its required artifact
- fail when `fix/*` lacks `docs/fixes/*.md`
- fail when a problem artifact exists but a solution artifact is missing where required

### S04 RFC enforcement

Tests first:

- fail when an RFC initiative does not attach RFC ownership to the documentation slice
- fail when the scaffold does not include the expected traceability

### S05 TDD foundation

Tests first:

- test runner discovers tests
- `npm test` fails on red fixtures
- `npm test` passes on green fixtures
- `validate` integrates the test layer
- Next.js/React components can use `expect()` + `jest-dom`
- `package.json` reflects the `Vitest`, Testing Library, and `jsdom` stack

### S06 PR enforcement

Tests first:

- fail when required PR sections are missing
- fail when expected labels are missing once label validation is implemented
- fail while the helper remains a placeholder
- `Playwright` is installable and executable for browser-critical routes
- a browser/e2e script exists and is documented in `package.json`

### S07 AGENTS/.codex drift

Tests first:

- fail when `AGENTS.md` or `.codex` contradict selected canonical rules
- detect drifted tooling references inside `.codex/config.toml`

## Documentation Rules For This Initiative

- all required operational documentation should exist in English and Spanish when the final policy enforces bilingual documentation
- the problem artifact and the solution artifact must remain synchronized
- Linear must document both the problem and the solution
- no implementation slice should begin if the solution artifact no longer reflects the current slice map
- no implementation slice should begin if the solution artifact leaves a material technical decision unresolved without an explicit user-facing question

## Linear Sync Plan

## What must be mirrored in Linear

- problem summary
- solution goal
- canonical mother branch
- documentation slice
- slice plan
- slice status
- per-slice commit traceability
- mother-branch integration commits

## Source of Truth Rule

- local artifacts are updated first
- then Linear is updated
- never the other way around

## Validation Gates

## Per Slice

- `npm run validate:docs-governance` for pure documentation slices
- `npm test` for enforcement and script slices
- `npm run validate` for slices that modify primary repo gates
- when a slice introduces executable browser QA, it must also include the `Playwright` command defined by final policy

## Initiative Level

Before closing the mother branch:

- all slices merged into the mother branch
- all commits traced in the solution artifact
- Linear updated from artifacts
- `npm test`
- `npm run validate`

## Risks

- hardening rules too fast and breaking normal delivery
- adding fragile checks with false positives
- mixing policy enforcement with semantic judgments that are too hard to validate
- overdesigning the test layer before establishing useful minimum coverage

## Mitigations

- implement in small slices
- start with simple verifiable contracts
- use unified `Vitest` and DOM matchers before adding extra tooling
- validate each new enforcement rule against the current repo

## Commit Traceability

Current state:

- mother branch created: `jeisonsosablockdev/dig-7-fix-agents-orchestation`
- documentation slice created: `fix/docs-fix-agents-orchestation-dig-7-s00-documentation`
- current documentation-slice commit:
  - `03df47a` `docs(docs): add agents orchestation fix artifact`

## Completion Criteria

This solution is complete when:

- the dual artifact model is operational
- Linear issue + canonical mother branch are enforced
- the documentation slice is mandatory before implementation slices
- RFC work is owned by the documentation slice
- `npm test` exists
- tests-first is enforced by policy and tooling
- `Vitest` is defined as the unified repo runner
- `@testing-library/jest-dom` is defined as mandatory for Next.js/React UI surfaces
- `package.json` explicitly lists test stack dependencies, scripts, and setup
- `Playwright` is explicitly planned as part of browser-critical QA hardening
- PR governance no longer depends on placeholders
- AGENTS/.codex drift becomes visible and blockable
