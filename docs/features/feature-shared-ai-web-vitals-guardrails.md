# Feature: Shared AI Web Vitals Guardrails

Last Updated: 2026-05-19 UTC
Status: planned
Owner: shared workflow
Related Solution Artifact: `docs/features/feature-shared-ai-web-vitals-guardrails-implementation.md`

## Summary

Este feature institucionaliza dentro del sistema de desarrollo asistido por AI del repo una disciplina explícita para estrategia de carga inicial, SEO técnico y Web Vitals.

El problema actual no es ausencia total de governance. El problema es que el sistema todavía protege mejor reglas estructurales básicas que la calidad real de la entrega inicial.

Hoy ya existen:

- SSR-first para rutas públicas
- metadata, `robots` y `sitemap`
- un validador básico de SEO/performance
- workflow frontend con QA y reviewer

Pero todavía falta que el sistema trate como inputs obligatorios:

- LCP
- INP
- CLS
- TTFB
- razonamiento de estrategia de carga inicial
- diferencia entre evidencia estática, lab y field

## Expected Outcome

Después de este cambio, el sistema debe:

- obligar reasoning explícito de Web Vitals y TTFB en trabajo web público
- empujar a agentes, workflows, reviewer y QA a tratar carga inicial como contrato
- endurecer `validate:seo-performance` con más guardrails reproducibles
- mantener la política canónica alineada con `.codex`, `AGENTS.md` y la trazabilidad de feature

## Notes

- Este trabajo extiende la gobernanza base iniciada en `DIG-5`.
- No introduce medición de campo automática dentro del repo.
- Sí endurece el comportamiento esperado del sistema de desarrollo y review.
