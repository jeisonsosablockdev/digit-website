#!/usr/bin/env bash
set -euo pipefail

POLICY_PATH="${POLICY_PATH:-docs/governance/pr-policy-source-of-truth.json}"
PR_BODY="${PR_BODY:-}"
PR_LABELS="${PR_LABELS:-}"
CHANGED_LINES="${CHANGED_LINES:-0}"
BRANCH_AGE_DAYS="${BRANCH_AGE_DAYS:-0}"

node - <<'NODE' "${POLICY_PATH}" "${PR_BODY}" "${PR_LABELS}" "${CHANGED_LINES}" "${BRANCH_AGE_DAYS}"
const fs = require("node:fs");

const [policyPath, prBodyRaw, prLabelsRaw, changedLinesRaw, branchAgeRaw] = process.argv.slice(2);
const policy = JSON.parse(fs.readFileSync(policyPath, "utf8"));
const prBody = String(prBodyRaw || "");
const labels = String(prLabelsRaw || "")
  .split(",")
  .map((label) => label.trim())
  .filter(Boolean);
const changedLines = Number(changedLinesRaw || "0");
const branchAgeDays = Number(branchAgeRaw || "0");

function fail(message) {
  console.error(`::error::${message}`);
  process.exit(1);
}

for (const section of policy.requiredPrSections) {
  const matcher = new RegExp(`(^|\\n)#+\\s*${section}\\b`, "i");
  if (!matcher.test(prBody)) {
    fail(`Missing PR body section: ${section}`);
  }
}

for (const [groupName, allowedLabels] of Object.entries(policy.labels)) {
  if (!Array.isArray(allowedLabels)) continue;
  const matches = labels.filter((label) => allowedLabels.includes(label));
  if (matches.length !== 1) {
    fail(`Expected exactly one label from group ${groupName}. Received: ${matches.join(", ") || "none"}`);
  }
}

if (changedLines > policy.thresholds.maxAddedLines && !labels.includes(policy.labels.sizeExempt)) {
  fail(`PR exceeds maxAddedLines threshold (${policy.thresholds.maxAddedLines}) without ${policy.labels.sizeExempt}.`);
}

if (branchAgeDays > policy.thresholds.maxBranchAgeDays && !labels.includes(policy.labels.branchAgeExempt)) {
  fail(`Branch age exceeds threshold (${policy.thresholds.maxBranchAgeDays} days) without ${policy.labels.branchAgeExempt}.`);
}

console.log("PR metadata lint passed.");
NODE
