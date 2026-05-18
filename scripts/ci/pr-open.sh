#!/usr/bin/env bash
set -euo pipefail

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
TARGET_BRANCH="${TARGET_BRANCH:-develop}"

if [[ "${BRANCH}" == "main" || "${BRANCH}" == "develop" ]]; then
  echo "❌ Refusing PR helper on protected branch: ${BRANCH}"
  exit 1
fi

echo "Running PR metadata validation before open..."
npm run pr:metadata

echo "PR ready to open:"
echo "- Source branch: ${BRANCH}"
echo "- Target branch: ${TARGET_BRANCH}"
echo "- Next action: open the PR in GitHub or your connected workflow with the validated metadata."
