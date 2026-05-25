# Feature Implementation: Shared Stitch MCP Integration

Last Updated: 2026-05-25 UTC
Status: implemented
Owner: shared workflow
Related Problem Artifact: `docs/features/feature-shared-stitch-mcp-integration.md`

## Summary

La implementación agrega una entrada HTTP MCP para Stitch en `.codex/config.toml` y resuelve la autenticación de manera segura con `env_http_headers`.

## Technical Decisions

- La integración vive en `.codex/config.toml` porque es la configuración MCP local que Codex comparte entre CLI y app para el proyecto.
- Se usa `url = "https://stitch.googleapis.com/mcp"` como endpoint del servidor.
- La API key no se registra en `http_headers`; se configura mediante `[mcp_servers.stitch.env_http_headers]`.
- El header queda mapeado como `"X-Goog-Api-Key" = "STITCH_API_KEY"`.

- `required = false` mantiene el servidor como opcional para que la ausencia de credenciales locales no rompa el arranque del entorno.
- No se modifica `AGENTS.md` ni las políticas canónicas porque el cambio introduce tooling de diseño, no reglas nuevas de gobernanza.

## Local Setup

Para habilitar Stitch localmente, el colaborador debe exportar la variable:

```bash
export STITCH_API_KEY='<your-local-key>'
```

Luego puede reiniciar Codex o volver a cargar su configuración local para que el header se inyecte desde el entorno.

## Validation Plan

- `npm run validate:docs-governance`
- `npm run validate:orchestration`
- `npm run validate`

## Security Notes

- La credencial entregada por el usuario no se persiste en archivos versionados.
- El header se obtiene del entorno local en runtime.
- La configuración queda alineada con el criterio del repo de evitar entradas MCP driftadas o secretos checked-in.
