import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

import { describe, expect, it } from "vitest";

const metadataScript = path.resolve("scripts/ci/pr-metadata-lint.sh");

function validBody() {
  return [
    "# Issue",
    "DIG-7",
    "# RFC",
    "N/A",
    "# Riesgos",
    "Low",
    "# Rollback Plan",
    "Revert",
    "# Validation",
    "npm run validate"
  ].join("\n");
}

describe("pr governance", () => {
  it("passes with required sections and labels", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "digit-pr-policy-"));
    const policyPath = path.join(tempDir, "policy.json");

    await fs.writeFile(
      policyPath,
      JSON.stringify({
        labels: {
          scope: ["scope:shared"],
          type: ["type:fix"],
          risk: ["risk:low"],
          sizeExempt: "size-exempt",
          branchAgeExempt: "branch-age-exempt"
        },
        requiredPrSections: ["issue", "rfc", "riesgos", "rollback plan", "validation"],
        thresholds: {
          maxAddedLines: 400,
          maxBranchAgeDays: 3
        }
      }),
      "utf8"
    );

    expect(() =>
      execFileSync("bash", [metadataScript], {
        env: {
          ...process.env,
          POLICY_PATH: policyPath,
          PR_BODY: validBody(),
          PR_LABELS: "scope:shared,type:fix,risk:low",
          CHANGED_LINES: "40",
          BRANCH_AGE_DAYS: "1"
        }
      })
    ).not.toThrow();

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("fails when a required label group is missing", () => {
    let failed = false;

    try {
      execFileSync("bash", [metadataScript], {
        env: {
          ...process.env,
          POLICY_PATH: path.resolve("docs/governance/pr-policy-source-of-truth.json"),
          PR_BODY: validBody(),
          PR_LABELS: "scope:shared,type:fix",
          CHANGED_LINES: "40",
          BRANCH_AGE_DAYS: "1"
        },
        stdio: "pipe"
      });
    } catch {
      failed = true;
    }

    expect(failed).toBe(true);
  });
});
