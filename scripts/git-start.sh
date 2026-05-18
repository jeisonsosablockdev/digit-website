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
  ./scripts/git-start.sh feature shared seo-performance-governance --mode integration --issue DIG-5 --linear-branch jeisonsosablockdev/dig-5-seo-performance-governance
  ./scripts/git-start.sh feature docs seo-performance-governance --mode slice --issue DIG-5 --slice-id S00 --slice-slug documentation --base feature/shared-seo-performance-governance-dig-5
  ./scripts/git-start.sh feature shared seo-performance-governance --mode slice --issue DIG-5 --slice-id S01 --slice-slug governance-policy --base feature/shared-seo-performance-governance-dig-5
USAGE
}

is_branch_type() {
  [[ "${1:-}" =~ ^(feature|fix|security|refactor)$ ]]
}

is_branch_scope() {
  [[ "${1:-}" =~ ^(app|shared|docs|infra|security)$ ]]
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

  echo "❌ Issue inválido: ${raw}. Usa formato DIG-5."
  exit 1
}

current_branch() {
  git branch --show-current 2>/dev/null || true
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
LINEAR_BRANCH=""
POSITIONAL=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --mode) MODE="$2"; shift 2 ;;
    --issue) ISSUE_KEY="$2"; shift 2 ;;
    --linear-branch) LINEAR_BRANCH="$2"; shift 2 ;;
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
  normalize_issue_key "${ISSUE_KEY}" >/dev/null
  if [[ -z "${LINEAR_BRANCH}" ]]; then
    echo "❌ --linear-branch es obligatorio para ramas integration. Usa el git branch name generado por Linear."
    exit 1
  fi
  BRANCH="${LINEAR_BRANCH}"
  BASE_BRANCH="${BASE_BRANCH:-develop}"
else
  NORMALIZED_ISSUE="$(normalize_issue_key "${ISSUE_KEY}")"
  NORMALIZED_SLICE_ID="$(printf '%s' "${SLICE_ID}" | tr '[:upper:]' '[:lower:]')"
  NORMALIZED_SLICE_SLUG="$(slugify "${SLICE_SLUG}")"
  BRANCH="${BRANCH_PREFIX}-${NORMALIZED_ISSUE}-${NORMALIZED_SLICE_ID}-${NORMALIZED_SLICE_SLUG}"
  BASE_BRANCH="${BASE_BRANCH:-$(current_branch)}"

  if [[ -z "${BASE_BRANCH}" ]]; then
    echo "❌ No se pudo inferir la rama base actual para el slice. Usa --base <parent-branch>."
    exit 1
  fi
fi

ensure_base_branch_available "${BASE_BRANCH}"
git checkout -b "${BRANCH}"
echo "✅ Rama creada: ${BRANCH}"
