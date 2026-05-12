# Operability, Observability, Security, And Deploy

This guide documents a generic baseline for product operability.

## Observability
- Capture client events without storing unnecessary sensitive identifiers.
- Record backend errors with stable request correlation ids.
- Separate product analytics from audit-oriented logs.

## Security
- Keep secrets server-side.
- Validate privileged actions on the server.
- Log security-relevant state transitions with enough context for debugging.

## Deploy
- Document required environment variables close to the owning feature.
- Keep validation and smoke checks reproducible.
- Do not treat local-only testing as final release evidence.
