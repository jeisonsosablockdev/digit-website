#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Uso:
  ./scripts/git-start.sh <scope> <name>
  ./scripts/git-start.sh <type> <scope> <name> [options]

Ejemplos:
  ./scripts/git-start.sh app initial-ui
  ./scripts/git-start.sh fix shared policy-cleanup
  ./scripts/git-start.sh feature shared single-issue-slice-planning --mode integration --issue BRI-149
  ./scripts/git-start.sh feature shared single-issue-slice-planning --mode slice --issue BRI-149 --slice-id S01 --slice-slug governance-policy
USAGE
}

is_branch_type() {
  [[ "${1:-}" =~ ^(feature|fix|security|refactor)$ ]]
}

is_branch_scope() {
  [[ "${1:-}" =~ ^(app|shared|infra|security)$ ]]
}

slugify() {
  printf '%s' "${1:-}" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-+/-/g'
}

normalize_issue_key() {
  local raw="${1:-}"
  local value
  value="$(printf '%s' "${raw}" | tr '[:lower:]' '[:upper:]')"

  if [[ -z "${value}" ]]; then
    echo "❌ --issue es obligatorio para ramas integration/slice."
    exit 1
  fi

  if [[ "${value}" =~ ^[0-9]+$ ]]; then
    printf 'bri-%s' "${value}"
    return 0
  fi

  if [[ "${value}" =~ ^[A-Z]+-[0-9]+$ ]]; then
    printf '%s' "${value}" | tr '[:upper:]' '[:lower:]'
    return 0
  fi

  echo "❌ Issue inválido: ${raw}. Usa formato BRI-149."
  exit 1
}

ensure_base_branch_available() {
  local base_branch="$1"

  if git show-ref --verify --quiet "refs/heads/${base_branch}"; then
    git checkout "${base_branch}"
    return 0
  fi

  if git remote get-url origin >/dev/null 2>&1; then
    git fetch origin "${base_branch}" --depth=1 >/dev/null 2>&1 || true
    if git show-ref --verify --quiet "refs/remotes/origin/${base_branch}"; then
      git checkout -b "${base_branch}" "origin/${base_branch}"
      return 0
    fi
  fi

  echo "❌ Base branch no disponible: ${base_branch}"
  exit 1
}

TYPE="feature"
SCOPE=""
NAME=""
MODE="single"
ISSUE_KEY=""
SLICE_ID=""
SLICE_SLUG=""
BASE_BRANCH=""
POSITIONAL=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --mode) MODE="$2"; shift 2 ;;
    --issue) ISSUE_KEY="$2"; shift 2 ;;
    --slice-id) SLICE_ID="$2"; shift 2 ;;
    --slice-slug) SLICE_SLUG="$2"; shift 2 ;;
    --base) BASE_BRANCH="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) POSITIONAL+=("$1"); shift ;;
  esac
done

if [[ "${#POSITIONAL[@]}" -lt 2 ]]; then
  usage
  exit 1
fi

if [[ "${#POSITIONAL[@]}" -ge 3 ]] && is_branch_type "${POSITIONAL[0]}" && is_branch_scope "${POSITIONAL[1]}"; then
  TYPE="${POSITIONAL[0]}"
  SCOPE="${POSITIONAL[1]}"
  NAME="${POSITIONAL[2]}"
elif is_branch_scope "${POSITIONAL[0]}"; then
  SCOPE="${POSITIONAL[0]}"
  NAME="${POSITIONAL[1]}"
else
  echo "❌ Argumentos inválidos."
  usage
  exit 1
fi

NAME_SLUG="$(slugify "${NAME}")"
BRANCH_PREFIX="${TYPE}/${SCOPE}-${NAME_SLUG}"

if [[ "${MODE}" == "single" ]]; then
  BRANCH="${BRANCH_PREFIX}"
  BASE_BRANCH="${BASE_BRANCH:-develop}"
elif [[ "${MODE}" == "integration" ]]; then
  NORMALIZED_ISSUE="$(normalize_issue_key "${ISSUE_KEY}")"
  BRANCH="${BRANCH_PREFIX}-${NORMALIZED_ISSUE}-integration"
  BASE_BRANCH="${BASE_BRANCH:-develop}"
else
  NORMALIZED_ISSUE="$(normalize_issue_key "${ISSUE_KEY}")"
  NORMALIZED_SLICE_ID="$(printf '%s' "${SLICE_ID}" | tr '[:upper:]' '[:lower:]')"
  NORMALIZED_SLICE_SLUG="$(slugify "${SLICE_SLUG}")"
  BRANCH="${BRANCH_PREFIX}-${NORMALIZED_ISSUE}-${NORMALIZED_SLICE_ID}-${NORMALIZED_SLICE_SLUG}"
  BASE_BRANCH="${BASE_BRANCH:-${BRANCH_PREFIX}-${NORMALIZED_ISSUE}-integration}"
fi

ensure_base_branch_available "${BASE_BRANCH}"
git checkout -b "${BRANCH}"
echo "✅ Rama creada: ${BRANCH}"
