#!/usr/bin/env bash
set -euo pipefail

echo "== PR Readiness Preflight =="
echo "1) Run npm run validate"
echo "2) Run docs governance validation"
echo "3) Ensure PR body includes: Issue, RFC, Riesgos, Rollback Plan, Validation"
echo "4) Ensure qualifying product work updated docs/features/*.md"
