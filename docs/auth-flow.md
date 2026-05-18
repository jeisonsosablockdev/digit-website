# Auth Flow

Last Updated: 2026-05-15 UTC

## Current State

- La app inicial es un landing SSR en Next.js App Router.
- Existen rutas publicas SSR para Inicio, Metodo DIGIT, Plataforma, Academia, Biblioteca, Membresia, Elite, Recursos e Iniciar sesion.
- No existe autenticacion, sesion ni panel protegido en esta fase.
- Los CTAs visibles son de presentacion y no ejecutan login.
- La ruta `/iniciar-sesion` existe solo como placeholder visual y todavia no implementa credenciales ni flujo de acceso.
- La home publica ahora incorpora baseline inicial de metadata, robots y sitemap como parte del delivery frontend.

## Notes

- Cuando aparezca auth real, este documento debe registrar el flujo completo y sus limites de confianza.
