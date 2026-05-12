#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Uso: ./scripts/git-save.sh <scope> \"mensaje\""
  exit 1
fi

SCOPE="$1"
MSG="$2"
CURRENT_BRANCH="$(git branch --show-current)"

if [[ ! "${SCOPE}" =~ ^(app|shared|docs|infra|security)$ ]]; then
  echo "❌ Scope inválido para commit convencional: ${SCOPE}"
  exit 1
fi

COMMIT_TYPE="feat"
case "${CURRENT_BRANCH}" in
  feature/*) COMMIT_TYPE="feat" ;;
  fix/*) COMMIT_TYPE="fix" ;;
  security/*) COMMIT_TYPE="security" ;;
  refactor/*) COMMIT_TYPE="refactor" ;;
  docs/*) COMMIT_TYPE="docs" ;;
  chore/*) COMMIT_TYPE="chore" ;;
esac

git add .
git commit -m "${COMMIT_TYPE}(${SCOPE}): ${MSG}"
echo "✅ Commit creado"
