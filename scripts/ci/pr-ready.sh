#!/usr/bin/env bash
set -euo pipefail

echo "== PR Readiness Preflight =="
echo "1) Run npm run validate"
echo "2) If public web delivery changed, ensure npm run validate:seo-performance passes"
echo "3) Run docs governance validation"
echo "4) Ensure PR body includes: Issue, RFC, Riesgos, Rollback Plan, Validation"
echo "5) Ensure qualifying product or shared governance work updated docs/features/*.md"
