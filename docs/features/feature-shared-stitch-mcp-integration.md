# Feature: Shared Stitch MCP Integration

Last Updated: 2026-05-25 UTC
Status: implemented
Owner: shared workflow
Related Solution Artifact: `docs/features/feature-shared-stitch-mcp-integration-implementation.md`

## Summary

Este cambio agrega al repositorio una configuración MCP local para Stitch orientada a flujos de diseño asistidos por Codex.

La necesidad es práctica: el repo ya usa exports y referencias de Stitch como insumo de diseño, pero no tenía una integración MCP declarada dentro de `.codex/config.toml` para que ese contexto de diseño pudiera habilitarse desde la misma configuración compartida del proyecto.

## Why This Matters

Sin una entrada MCP explícita:

- la integración depende de configuración manual fuera del repo
- el setup entre colaboradores se vuelve inconsistente
- el agente no tiene una pista durable de que Stitch forma parte del tooling esperado

Al mismo tiempo, este tipo de integración no debe introducir deuda de seguridad:

- la API key no debe quedar versionada
- el repo no debe fallar al iniciar si la credencial no existe localmente
- la configuración debe seguir alineada con el dominio actual del proyecto

## Expected Outcome

Después de este cambio, el proyecto debe:

- exponer un servidor MCP `stitch` en `.codex/config.toml`
- usar autenticación por variable de entorno en vez de header estático versionado
- tratar la integración como opcional para no bloquear arranque local sin credenciales
- dejar trazabilidad documental suficiente para mantenimiento futuro

## Notes

- La variable de entorno esperada es `STITCH_API_KEY`.
- La credencial vive solo en el entorno local del usuario y no en archivos tracked del repo.
- La integración queda enfocada a diseño; no cambia rutas de app, auth ni políticas de producto.
