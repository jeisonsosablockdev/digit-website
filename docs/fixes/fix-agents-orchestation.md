# Fix: Agents Orchestation

Last Updated: 2026-05-18 UTC
Status: planned
Owner: shared workflow

## Summary

Este fix redefine el sistema de agentes, branching, artefactos, RFC, TDD y sincronización con Linear para que las reglas del repositorio dejen de ser mayormente declarativas y pasen a ser realmente enforceables.

El problema principal no es falta de reglas. El problema es que hoy existe demasiado espacio entre:

- lo que la gobernanza dice
- lo que los agentes creen que deben hacer
- y lo que los scripts bloquean de verdad

También existe un hueco importante entre:

- lo que `AGENTS.md` y `.codex` describen
- y lo que el sistema realmente fuerza en ejecución

Este documento reestructura todo el fix alrededor de esa realidad.

## Executive Diagnosis

Hoy el sistema tiene buena intención arquitectónica, pero enforcement incompleto.

Las debilidades más importantes son estas:

1. Los artefactos existen, pero todavía no gobiernan el trabajo.
2. `docs/fixes/*.md` no está enforced al mismo nivel que `docs/features/*.md`.
3. La mother branch todavía puede desviarse de Linear.
4. El documentation slice existe como idea, pero no está suficientemente obligado como primer slice.
5. Los RFCs tienen formato, pero no ownership operacional fuerte dentro del documentation slice.
6. TDD no existe como gate real del repo.
7. PR governance sigue siendo en gran parte placeholder.
8. QA responsive y evidencias browser-critical siguen dependiendo demasiado del juicio manual.
9. Commits y staging siguen permitiendo comportamientos que rompen atomicidad y gitflow.
10. `AGENTS.md` y `.codex` tienen partes efectivas, pero también partes aspiracionales no conectadas a enforcement real.

En corto:

- el sistema ya sabe qué quiere
- pero todavía no sabe bloquear lo incorrecto con suficiente consistencia

## Primary Goal

Convertir el sistema actual en un workflow donde:

- todo trabajo relevante nace en Linear
- la mother branch se toma solo desde `git branch name` del issue madre en Linear
- todo feature y fix tiene artefacto previo obligatorio
- ese artefacto manda el slicing y la trazabilidad
- el documentation slice es obligatorio y ocurre antes de implementación
- si aplica RFC, el RFC vive en el documentation slice
- TDD pasa a ser tests-first real
- reviewer y qa bloquean con base en reglas verificables, no en interpretación blanda

## Scope

Este fix cubre:

- artefactos para features y fixes
- integración operativa con Linear
- mother branch y slice model
- ownership del documentation slice
- ownership del RFC
- TDD base del repositorio
- enforcement de PR y gitflow
- enforcement responsive/browser-critical
- responsabilidades de `planner`, `docs`, `frontend`, `qa` y `reviewer`

## Non-Goals

Este fix no busca:

- reemplazar todo el sistema actual de una sola vez
- introducir una plataforma compleja de orquestación externa
- agregar más agentes si no hacen falta
- reemplazar Playwright por completo
- automatizar todos los juicios humanos de UX

La prioridad es endurecer lo existente con contratos más claros y gates reales.

## Current-State Review

## How AGENTS.md And .codex Work Today

## AGENTS.md

`AGENTS.md` hoy sí funciona como:

- instrucción de entrada al repo
- resumen operativo de routing
- contrato de intención sobre workflows, especialistas y Definition of Done

Pero no funciona como enforcement técnico por sí mismo.

No existe un script local que compruebe automáticamente:

- que realmente se empezó por `planner`
- que se cargaron solo los workflows correctos
- que siempre participó `reviewer`
- que `qa` y `security` entraron exactamente cuando debían

Conclusión:

`AGENTS.md` hoy gobierna comportamiento del agente, pero no lo bloquea técnicamente.

## .codex

`.codex` hoy está dividido en:

- `policies/*.md`
- `workflows/*.md`
- `agents/*.toml`
- `config.toml`

Lo que sí hace:

- provee contexto operativo útil
- define prompts, scopes y responsabilidades esperadas
- mejora la consistencia del razonamiento del agente

Lo que no hace todavía:

- no ejecuta enforcement local por sí mismo
- no bloquea writes fuera de `owns_paths`
- no obliga `delegates_to`
- no obliga `parallel_safe`
- no obliga `reads`

Conclusión:

`.codex` hoy es una capa de orquestación declarativa, no una capa de enforcement runtime del repo.

## AGENTS/.codex Enforcement Classification

### Enforced

- `npm run validate`
- `validate:seo-performance`
- `validate:docs-governance`
- required docs parciales por scope
- parte del branch naming en `git-start.sh`

### Partially Enforced

- feature notes para `docs/features/*.md`
- routing por scope de frontend/docs/testing en práctica del agente
- responsive QA como workflow conceptual
- SEO/performance en superficies públicas
- RFC structure por template

### Not Enforced

- uso obligatorio de `planner`
- participación obligatoria de `qa`, `security` o `reviewer`
- enforcement de `owns_paths`
- enforcement de `parallel_safe`
- enforcement de `delegates_to`
- enforcement de `reads`
- drift automático entre `AGENTS.md`, `.codex` y canonical docs
- ownership de RFC por documentation slice
- issue obligatorio en Linear
- mother branch obligatoria desde `git branch name`
- TDD real del repo

## 1. Artefactos

Estado actual:

- existe convención de `docs/features/*.md`
- ya existe `docs/fixes/`
- la política de documentación exige docs por scope

Problema:

- el artefacto todavía aparece como output frecuente, no como input obligatorio
- no se fuerza su creación o actualización antes de implementar
- `docs/fixes/*.md` no está enforced por scripts

Conclusión:

El artefacto documenta el trabajo. Todavía no lo gobierna.

## 2. Linear

Estado actual:

- Linear ya participa en el proceso
- ya existe la idea de mother branch generada por Linear

Problema:

- no está enforced que todo RFC, feature o fix nuevo empiece con issue en Linear
- no está enforced que la mother branch salga del `git branch name`
- no hay verificación real de que la branch usada coincida con la canónica de Linear

Conclusión:

Linear participa, pero todavía no controla formalmente la identidad de la iniciativa.

## 3. Branching and Slices

Estado actual:

- la política ya habla de mother branch
- ya habla de documentation slice
- ya habla de commit traceability

Problema:

- todavía se puede trabajar demasiado en la mother branch
- no está enforced que el documentation slice sea el primero
- no está enforced que las slices de implementación dependan del plan atómico del documentation slice
- los scripts todavía permiten caminos demasiado flexibles

Conclusión:

La estructura existe, pero la secuencia no está lo bastante endurecida.

## 4. RFC

Estado actual:

- hay templates RFC
- hay scaffold RFC
- hay política RFC

Problema:

- el RFC no está ligado operativamente al documentation slice
- el scaffold no entiende contexto de issue, mother branch o slice owner
- el template no exige ownership suficiente sobre branch, issue y slice

Conclusión:

El RFC tiene forma. No tiene enforcement de ownership.

## 5. TDD

Estado actual:

- hay validaciones
- hay QA manual y por scripts
- hay menciones de Playwright y browser evidence

Problema:

- no hay script `test`
- `validate` no corre tests
- no existe evidencia obligatoria de rojo -> verde
- no existe carpeta de tests ni convención mínima

Conclusión:

No hay TDD real. Solo hay validación posterior.

## 6. PR and Merge Governance

Estado actual:

- hay política de PR bien definida
- hay scripts preflight

Problema:

- `pr-ready.sh` es checklist textual
- `pr-metadata-lint.sh` es placeholder
- `pr-open.sh` es placeholder
- varias reglas de labels, body, tamaño y aging no se están ejecutando realmente

Conclusión:

La gobernanza de PR existe en docs, pero no está automatizada de forma suficiente.

## 7. Commit and Staging Discipline

Estado actual:

- existen helpers de git

Problema:

- `git-save.sh` hace `git add .`
- eso rompe atomicidad potencial
- no bloquea commits directos en `develop`
- no bloquea commits directos en `main`

Conclusión:

El helper actual favorece velocidad sobre integridad del workflow.

## 8. Responsive and Browser QA

Estado actual:

- hay `responsive-qa`
- hay reglas de evidence para `320`, `375`, `768`, `1024`

Problema:

- no hay gate automático de artifact mínimo
- no hay regla ejecutable de “captura ambigua = fail”
- no hay validación explícita de overflow global previa a refinamiento local

Conclusión:

Responsive QA existe, pero todavía es más humano que contractual.

## 9. AGENTS.md and .codex drift risk

Estado actual:

- `AGENTS.md` resume la gobernanza canónica
- `.codex/policies/*.md` y `.codex/workflows/*.md` también la resumen o la reinterpretan

Problema:

- no existe un drift checker específico para `AGENTS.md` y `.codex`
- si una policy canónica cambia, estas capas pueden quedarse desalineadas sin que `validate` falle

Conclusión:

`AGENTS.md` y `.codex` hoy pueden derivar hacia desalineación silenciosa.

## 10. .codex agent TOML files are descriptive, not enforceable

Estado actual:

- existen `planner.toml`, `frontend.toml`, `qa.toml`, `docs.toml`, `security.toml`, `reviewer.toml`

Problema:

- no encontré uso local dentro del repo que convierta esos TOML en enforcement técnico
- `owns_paths`, `parallel_safe`, `delegates_to`, `reads` y `scope` son metadata útil, pero no gates reales

Conclusión:

Los TOML expresan intención de orquestación, no control ejecutable del repositorio.

## 11. .codex/config.toml appears drifted from the current repo domain

Estado actual:

- `.codex/config.toml` todavía contiene referencias a `helius` y `solana-mcp-server`

Problema:

- ese contenido parece desalineado con el dominio operativo actual del repo
- si la capa Solana fue removida del sistema de trabajo, este archivo quedó como drift operativo

Conclusión:

`.codex/config.toml` necesita revisión como parte del fix porque hoy transmite contexto de tooling que ya no representa el estado actual del proyecto.

## Root Cause Pattern

La mayoría de las fallas comparten la misma raíz:

- la regla vive en docs
- el agente la conoce
- pero el sistema no la convierte en bloqueo real

Ese patrón se repite en:

- AGENTS routing
- .codex agent ownership
- artefactos
- Linear
- mother branch
- documentation slice
- RFC
- TDD
- PR governance
- responsive QA
- drift entre resúmenes operativos y política canónica

## Target Operating Model

## 1. Linear first

Todo RFC, feature o fix nuevo debe empezar con issue en Linear.

Regla:

- primero usar conector `Linear`
- si no resuelve, usar `Computer Use`

No se inicia trabajo nuevo relevante sin issue.

## 2. Mother branch from Linear only

Para iniciativas con mother branch:

- la mother branch sale solo del campo `git branch name` del issue madre en Linear
- esa rama es la canónica
- no se inventa una rama madre paralela

Las demás ramas:

- documentation slice
- implementation slices
- RFC-related slices

sí siguen las reglas de naming del repositorio.

## 3. Artifact first

Antes de tocar implementación debe existir artefacto local obligatorio:

- feature: `docs/features/feature-<slug>.md`
- fix: `docs/fixes/fix-<slug>.md`

Ese artefacto debe:

- crearse si no existe
- actualizarse si ya existe
- preceder la implementación
- preceder las actualizaciones importantes en Linear

## 4. Documentation slice before implementation

Si la iniciativa corre en slice mode:

- primero mother branch
- luego documentation slice
- luego implementation slices

El documentation slice debe definir:

- alcance
- atomic slice plan
- riesgos
- validation gates
- test plan first
- Linear sync notes

## 5. RFC owned by documentation slice

Si aplica RFC:

- el RFC nace o se actualiza en el documentation slice
- el documentation slice es dueño de esa trazabilidad
- la mother branch integra el RFC ya revisado, pero no debe ser donde se redacta de forma primaria

## 6. Tests first

Para slices que requieren TDD:

1. definir test plan en el artefacto
2. escribir pruebas primero
3. ejecutar pruebas
4. implementar
5. re-ejecutar pruebas hasta pasar
6. correr `validate`
7. cerrar slice

## 7. Reviewer and QA as hard gates

`qa` y `reviewer` deben bloquear cierre cuando falte:

- issue en Linear
- mother branch canónica
- artefacto previo
- documentation slice obligatoria
- RFC en slice documental cuando aplique
- evidencia TDD cuando aplique
- evidencia responsive/browser-critical suficiente

## Mandatory Artifact Contract

Todo artefacto de feature o fix debe incluir como mínimo:

- Summary
- Problem Statement
- Goal
- Scope
- Non-Goals
- Linear Issue
- Mother Branch
- Documentation Slice
- Atomic Slice Plan
- Test Plan First
- Validation Gates
- Risks
- Linear Sync Notes
- Commit Traceability
- Completion Criteria

Si requiere RFC, además:

- RFC Required
- RFC Path
- RFC Owner Slice
- RFC Status

## Atomic Slice Contract

Cada slice debe declarar:

- branch
- objetivo
- alcance
- pruebas esperadas
- docs afectadas
- gate de cierre

Si es documentation slice, además:

- artefacto dueño
- RFC dueño cuando aplique
- contenido que se propagará a Linear

## TDD Standard

## Recommended Test Stack

Base recomendada para este repo:

- `node:test`
- `node:assert/strict`

Razones:

- liviano
- nativo
- suficiente para scripts, validadores y contratos
- compatible con una evolución posterior hacia Playwright u otras capas

## Required TDD Surfaces

### Shared scripts and governance logic

Deben cubrir:

- naming rules
- branch generation
- linear plan generation
- RFC scaffolding helpers
- gating helpers
- CI validators

### Browser-critical UI

Debe combinar:

- tests estructurales cuando aplique
- Playwright para flujos críticos
- responsive QA como evidencia complementaria

### Features and fixes

Ambos deben definir en el artefacto:

- qué prueba se escribe primero
- qué comportamiento bloquea
- qué comando demuestra rojo -> verde

## Enforcement Gaps To Fix

Esta es la lista concreta de debilidades actuales del enforcement:

1. `docs/fixes/*.md` no está enforced por `check-required-docs.sh`.
2. No hay enforcement de artefacto previo; solo de “algún doc en el diff”.
3. No hay enforcement de issue obligatorio en Linear para todo RFC/feature/fix nuevo.
4. No hay enforcement de mother branch tomada desde `git branch name`.
5. No hay enforcement de documentation slice como primer slice.
6. No hay enforcement de que el RFC viva en el documentation slice.
7. `git-save.sh` hace `git add .` y debilita atomicidad.
8. No hay bloqueo de commit directo en `develop` o `main`.
9. `git-push.sh` mantiene lógica que no refleja por completo el modelo mother branch canónica desde Linear.
10. `pr-ready.sh` es checklist textual, no gate real.
11. `pr-metadata-lint.sh` es placeholder.
12. `pr-open.sh` es placeholder.
13. No existe `npm test`.
14. `validate` no corre tests.
15. No existe convención mínima de carpeta/tests para el repo.
16. No existe enforcement de evidencia rojo -> verde.
17. Responsive QA no trata evidencia ambigua como fail automático.
18. No existe enforcement de artifact mínimo para browser-critical QA.
19. `validate:seo-performance` es útil pero demasiado superficial para el estándar actual.
20. No hay enforcement de sincronía artifact -> Linear.
21. No hay enforcement técnico de `planner` como entrypoint obligatorio.
22. No hay enforcement técnico de participación obligatoria de `reviewer`.
23. No hay enforcement técnico de entrada de `qa` o `security` por trigger de scope.
24. No hay enforcement de `owns_paths` de los agentes declarados en `.codex/agents/*.toml`.
25. No hay enforcement de `delegates_to`, `parallel_safe` o `reads` declarados en `.codex/agents/*.toml`.
26. No hay drift check específico entre `AGENTS.md`, `.codex/*` y los documentos canónicos.
27. `.codex/config.toml` parece conservar configuración de tooling que ya no representa el dominio actual del repo.

## Agent Responsibilities

## planner

Debe:

- exigir issue nuevo en Linear para todo RFC, feature o fix nuevo
- exigir artefacto previo
- decidir si la iniciativa requiere mother branch + slices
- tomar la mother branch desde el `git branch name` del issue madre en Linear
- exigir documentation slice antes de implementación multi-slice
- decidir si aplica RFC
- exigir que el RFC viva en el documentation slice
- exigir test plan first antes de abrir slices de código
- detectar drift operativo entre instrucciones de resumen y fuentes canónicas cuando sea visible

## docs

Debe:

- crear o actualizar artefacto antes de implementación
- crear o actualizar RFC cuando aplique
- fijar atomic slice plan
- mantener artefacto sincronizado con avance real
- mantener sincronía entre artefacto, RFC y Linear
- mantener sincronía entre `AGENTS.md`, `.codex/*` y la gobernanza canónica cuando esos archivos cambien
- usar el artefacto como base de Linear
- intentar primero conector `Linear`
- usar `Computer Use` como fallback

## frontend / implementation agents

Deben:

- leer el artefacto antes de cambiar código
- respetar slice scope
- escribir pruebas primero cuando aplique
- devolver evidencia alineada con el test plan

## qa

Debe:

- validar contra el artefacto, no solo contra el diff
- verificar evidencia tests-first cuando aplique
- verificar artifacts responsive/browser-critical obligatorios
- bloquear cuando la evidencia sea ambigua o incompleta

## reviewer

Debe bloquear cuando:

- el routing operativo prometido por `AGENTS.md` o `.codex` no coincide con lo que realmente ocurrió en la tarea cuando eso sea verificable
- no existe issue en Linear
- no existe artefacto previo
- el artefacto no fue actualizado
- no existe documentation slice en iniciativas multi-slice
- la mother branch no coincide con la canónica de Linear
- la iniciativa requiere RFC y el RFC quedó fuera del documentation slice
- no existe evidencia tests-first cuando el cambio lo requiere
- faltan gates de QA obligatorios

## Files This Fix Must Touch

Cuando se implemente de verdad, este fix debe tocar al menos:

- `AGENTS.md`
- `.codex/workflows/frontend-cycle.md`
- `.codex/workflows/responsive-qa.md`
- `.codex/policies/testing-policy.md`
- `.codex/policies/frontend-policy.md`
- `.codex/policies/docs-policy.md`
- `.codex/agents/*.toml`
- `.codex/config.toml`
- `docs/governance/documentation-policy.md`
- `docs/governance/git-monorepo-policy.md`
- `docs/guides/linear-single-issue-slice-planning.md`
- `docs/templates/linear-single-issue-slices.template.md`
- `docs/rfcs/templates/EPIC-README.template.md`
- `docs/rfcs/templates/STORY.template.md`
- `scripts/ci/check-required-docs.sh`
- `scripts/ci/pr-ready.sh`
- `scripts/ci/pr-metadata-lint.sh`
- `scripts/ci/pr-open.sh`
- `scripts/git-start.sh`
- `scripts/git-save.sh`
- `scripts/git-push.sh`
- `scripts/linear-plan-core.js`
- `scripts/rfc-new-core.js`
- `package.json`

También probablemente:

- nuevo directorio `tests/`
- helpers para verificar issue en Linear
- helpers para validar mother branch canónica
- drift checkers para `AGENTS.md` y `.codex`

## New Mandatory Rules

## Rule 1

Todo RFC, feature o fix nuevo debe tener issue en Linear antes de comenzar.

## Rule 2

Para iniciativas con mother branch, la mother branch sale solo del `git branch name` del issue madre en Linear.

## Rule 3

Ningún feature o fix no trivial empieza sin artefacto previo.

## Rule 4

Todo trabajo multi-slice debe tener:

- mother branch
- documentation slice
- slice map atómico

## Rule 5

La documentation slice debe existir antes de slices de implementación.

## Rule 6

Si la iniciativa requiere RFC, el RFC nace y se actualiza en el documentation slice.

## Rule 7

Linear se actualiza desde el artefacto, no al revés.

## Rule 8

Para crear o actualizar la entrada operativa, se usa primero el conector `Linear`; si falla, se usa `Computer Use`.

## Rule 9

Cuando aplique TDD, primero se escriben las pruebas y luego se implementa.

## Rule 10

Sin evidencia de tests-first, el slice no cierra.

## Rule 11

Captura ambigua, evidence incompleta o overflow no resuelto cuentan como `block`.

## Rule 12

Features y fixes comparten el mismo estándar estructural de artefacto y trazabilidad.

## Rule 13

`AGENTS.md` y `.codex` no pueden divergir silenciosamente de la gobernanza canónica.

## Rule 14

Los archivos declarativos de agentes no deben contener ownership o tooling drift que el sistema ya no reconozca como parte del dominio actual.

## Phased Implementation Plan

## Phase 1: Documentation and policy alignment

- endurecer `documentation-policy`
- endurecer `git-monorepo-policy`
- endurecer guías y templates
- endurecer templates RFC
- revisar `AGENTS.md` y `.codex/*` como capa de resumen operativo

## Phase 2: Branching and Linear enforcement

- actualizar `git-start.sh`
- actualizar `linear-plan-core.js`
- agregar enforcement de issue en Linear
- agregar enforcement de mother branch canónica

## Phase 3: Artifact enforcement

- obligar `docs/features/*.md`
- obligar `docs/fixes/*.md`
- validar artefacto previo
- validar documentation slice

## Phase 4: RFC enforcement

- ligar scaffold RFC al documentation slice
- exigir ownership de RFC en templates y políticas

## Phase 5: TDD enforcement

- agregar `tests/`
- agregar `npm test`
- agregar tests con `node:test` y `node:assert/strict`
- integrar tests en `validate`

## Phase 6: PR and QA enforcement

- reemplazar placeholders de PR por gates reales
- endurecer responsive QA
- exigir artifacts browser-critical mínimos

## Phase 7: AGENTS/.codex enforcement and drift control

- revisar `.codex/config.toml`
- alinear o depurar tooling driftado
- decidir qué partes de `agents/*.toml` seguirán siendo declarativas
- agregar drift checks para `AGENTS.md` y `.codex` contra fuentes canónicas

## Completion Criteria

Este fix se considera completo cuando:

- existe issue obligatorio en Linear para RFCs, features y fixes nuevos
- la mother branch sale del `git branch name` del issue madre
- existe artefacto obligatorio para features y fixes
- el artefacto es previo al cambio
- mother branch + documentation slice + implementation slices quedan endurecidos como secuencia
- el RFC queda anclado al documentation slice cuando aplique
- existe `npm test`
- TDD queda definido como tests-first con stack ligera de asserts
- `validate` incorpora pruebas reales
- los scripts de PR dejan de ser placeholders
- QA responsive/browser-critical tiene bloqueo contractual real
- `AGENTS.md` y `.codex` dejan de ser capas parcialmente desalineables sin visibilidad

## Notes

- La mejor mejora no es agregar más agentes. Es quitar ambigüedad.
- El sistema ya tiene buena arquitectura conceptual; este fix trata de volverla ejecutable.
- OpenAI recomienda workflows simples con evals y gates claros antes de aumentar complejidad multi-agent; este fix va exactamente en esa dirección.
