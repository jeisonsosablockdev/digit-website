# Feature Implementation: Shared AI Web Vitals Guardrails

Last Updated: 2026-05-19 UTC
Status: planned
Owner: shared workflow
Related Problem Artifact: `docs/features/feature-shared-ai-web-vitals-guardrails.md`

## Summary

La implementación aterriza esta mejora en cuatro capas:

1. política canónica en `docs/governance/seo-performance-policy.md`
2. workflow y policies de `.codex`
3. prompts de agentes para planner, frontend, qa, docs y reviewer
4. enforcement reproducible en `scripts/ci/validate-seo-performance.js`

## Technical Decisions

- Las metas base del sistema usarán los thresholds vigentes documentados en web.dev:
  - LCP `<= 2.5s`
  - INP `<= 200ms`
  - CLS `<= 0.1`
  - TTFB `<= 0.8s` como supporting metric y guía aproximada
- TTFB se trata como supporting metric, no como Core Web Vital.
- La política debe exigir explícitamente distinguir entre evidencia estática, de laboratorio y de campo.
- No se habilitará `webVitalsAttribution` en `next.config.ts` porque la documentación oficial de Next.js todavía lo marca como experimental y no recomendado para producción.
- El validador del repo debe seguir siendo estable y reproducible; por eso se endurece sobre patrones de riesgo verificables, no sobre medición falsa de campo.

## Validation Plan

- `npm run validate:docs-governance`
- `npm run validate:seo-performance`
- `npm run validate`

## Traceability

- Esta mejora se relaciona con la línea de gobernanza SEO/performance iniciada en `docs/features/feature-shared-seo-performance-governance-dig-5.md`.
- La intención aquí es integrar Web Vitals y TTFB más profundamente en el sistema de desarrollo con AI del repo.
