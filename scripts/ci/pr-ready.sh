#!/usr/bin/env bash
set -euo pipefail

source "$(dirname "$0")/pr-governance-lib.sh"

VALIDATE_MODE="${VALIDATE_MODE:-${1:-full}}"
REQUIRES_BROWSER_QA="${REQUIRES_BROWSER_QA:-0}"

echo "== PR Readiness Preflight =="

VALIDATE_COMMAND="$(resolve_pr_ready_validate_command "${VALIDATE_MODE}")"
if [[ -n "${VALIDATE_COMMAND}" ]]; then
  echo "Running: ${VALIDATE_COMMAND}"
  eval "${VALIDATE_COMMAND}"
fi

if [[ "${REQUIRES_BROWSER_QA}" == "1" ]]; then
  echo "Running browser-critical preflight: npm run test:e2e -- --list"
  npm run test:e2e -- --list >/dev/null
fi

echo "Running metadata lint: npm run pr:metadata"
npm run pr:metadata

echo "PR readiness checks passed."
