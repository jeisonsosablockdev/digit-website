# DIGIT

Bootstrap de gobernanza y orquestacion de agentes importado desde `brids`.

Este repositorio arranca con la capa de agentes, politicas, workflows, plantillas RFC y scripts operativos, pero sin heredar el codigo de producto de `brids`.

<!-- DOCS-AUTO:START -->
## Documentation Snapshot (Auto-generated)

Updated: 2026-05-14 15:40:25 UTC

| Document | Scope | Last Updated | Last Commit |
| --- | --- | --- | --- |
| [`architecture.md`](./docs/architecture.md) | core | 2026-05-12 UTC | 2026-05-12 5e45aec |
| [`auth-flow.md`](./docs/auth-flow.md) | frontend/auth | 2026-05-14 UTC | 2026-05-12 892af11 |
| [`authority-model.md`](./docs/authority-model.md) | core | 2026-05-12 UTC | 2026-05-12 5e45aec |
| [`linear-context.md`](./docs/linear-context.md) | general | not set | not committed |
| [`session-model.md`](./docs/session-model.md) | frontend/auth | 2026-05-14 UTC | 2026-05-12 892af11 |
| [`state-machine.md`](./docs/state-machine.md) | core | 2026-05-12 UTC | 2026-05-12 5e45aec |
| [`threat-model.md`](./docs/threat-model.md) | core | 2026-05-12 UTC | 2026-05-12 5e45aec |

### Required Docs by Change Type
- Core architecture: `architecture.md`, `authority-model.md`, `state-machine.md`, `threat-model.md`
- Frontend/Auth (/app): `auth-flow.md`, `session-model.md`
<!-- DOCS-AUTO:END -->

## Base Importada

- `AGENTS.md` y `GEMINI.md` para routing y reglas globales.
- `.codex/` con agentes, politicas y workflows.
- `docs/governance/` como fuente canonica de reglas.
- `docs/guides/` y `docs/knowledge/` para guias y promocion de conocimiento.
- `docs/rfcs/templates/` y `docs/templates/` para planeacion estructurada.
- `scripts/` para sync de docs, preflight de PR y scaffolding operativo.

## Siguientes Pasos

- Ajustar las politicas a la realidad tecnica de `DIGIT` segun su stack y dominios reales.
- Crear el codigo base del producto (`app/`, `lib/`, `tests/`, etc.) sobre esta gobernanza.
- Ejecutar `./scripts/readme-sync.sh` cuando se actualicen los docs raiz.
