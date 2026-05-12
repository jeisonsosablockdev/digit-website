#!/usr/bin/env bash
set -euo pipefail

source "$(dirname "$0")/pr-governance-lib.sh"

BASE_REF="${BASE_REF:-${GITHUB_BASE_REF:-develop}}"
HEAD_REF="${HEAD_REF:-HEAD}"
HEAD_BRANCH="${HEAD_BRANCH:-${GITHUB_HEAD_REF:-}}"
LOCAL_NOISE_REGEX='^(\.npm-cache/|\.env\.vercel$|docs/linear-context\.md$)'

origin_base_ref="origin/${BASE_REF}"
committed_changed_files=""
working_tree_changed_files=""
untracked_changed_files=""

if git show-ref --verify --quiet "refs/remotes/${origin_base_ref}"; then
  committed_changed_files="$(git diff --name-only "${origin_base_ref}...${HEAD_REF}" || true)"
fi

if git rev-parse --verify HEAD >/dev/null 2>&1; then
  working_tree_changed_files="$(git diff --name-only HEAD || true)"
fi

untracked_changed_files="$(git ls-files --others --exclude-standard | grep -E -v "${LOCAL_NOISE_REGEX}" || true)"

CHANGED_FILES="$(
  {
    printf '%s\n' "${committed_changed_files}"
    printf '%s\n' "${working_tree_changed_files}"
    printf '%s\n' "${untracked_changed_files}"
  } | merge_changed_file_sets
)"

if [[ -z "${CHANGED_FILES}" ]]; then
  echo "No changed files detected. Docs check skipped."
  exit 0
fi

has_changed() {
  local regex="$1"
  grep -E -q -- "${regex}" <<<"${CHANGED_FILES}"
}

changed_files_include_path() {
  local file_path="$1"
  grep -Fx -q -- "${file_path}" <<<"${CHANGED_FILES}"
}

require_docs_changed() {
  local scope="$1"
  shift
  local missing=0
  for doc in "$@"; do
    if [[ ! -f "${doc}" ]]; then
      echo "::error::Missing required doc file for ${scope}: ${doc}"
      missing=1
      continue
    fi
    if ! changed_files_include_path "${doc}"; then
      echo "::error::Missing required doc update for ${scope}: ${doc}"
      missing=1
    fi
  done
  return "${missing}"
}

touches_app=0
touches_core=0
touches_product_code=0
missing_any=0

if has_changed '^app/'; then
  touches_app=1
fi

if has_changed '^(packages|lib|tests|e2e)/'; then
  touches_core=1
  touches_product_code=1
fi

if has_changed '^app/'; then
  touches_product_code=1
fi

if [[ "${touches_core}" -eq 1 ]]; then
  require_docs_changed "core" \
    "docs/architecture.md" \
    "docs/authority-model.md" \
    "docs/state-machine.md" \
    "docs/threat-model.md" || missing_any=1
fi

if [[ "${touches_app}" -eq 1 ]]; then
  require_docs_changed "app" \
    "docs/auth-flow.md" \
    "docs/session-model.md" || missing_any=1
fi

requires_feature_doc=0
CURRENT_BRANCH="${HEAD_BRANCH:-$(git branch --show-current 2>/dev/null || true)}"
if [[ "${touches_product_code}" -eq 1 && "${CURRENT_BRANCH}" =~ ^(feature|fix|refactor)/ ]]; then
  requires_feature_doc=1
fi

if [[ "${requires_feature_doc}" -eq 1 ]]; then
  if ! grep -E -q '^docs/features/.*\.md$' <<<"${CHANGED_FILES}"; then
    echo "::error::Missing feature note update under docs/features/."
    missing_any=1
  fi
fi

if [[ "${missing_any}" -ne 0 ]]; then
  exit 1
fi

echo "Required docs check passed."
