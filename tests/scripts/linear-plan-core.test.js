import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { runCli } from "../../scripts/linear-plan-core.js";

async function makeTempWorkspace() {
  const rootDir = await fs.mkdtemp(path.join(os.tmpdir(), "digit-linear-plan-"));
  await fs.mkdir(path.join(rootDir, "docs", "templates"), { recursive: true });
  await fs.writeFile(
    path.join(rootDir, "docs", "templates", "linear-single-issue-slices.template.md"),
    [
      "# Linear",
      "- Issue: `{{ISSUE_ID}}`",
      "- Mother Issue Branch: `{{PARENT_BRANCH}}`",
      "- Problem Artifact: `{{PROBLEM_ARTIFACT_PATH}}`",
      "- Solution Artifact: `{{SOLUTION_ARTIFACT_PATH}}`",
      "",
      "# Open Technical Questions",
      "{{OPEN_TECHNICAL_QUESTIONS}}",
      "",
      "# Tooling Changes",
      "{{TOOLING_CHANGES}}"
    ].join("\n"),
    "utf8"
  );

  return rootDir;
}

afterEach(async () => {
  // no-op placeholder so vitest keeps async teardown pattern consistent for future expansion
});

describe("linear-plan-core", () => {
  it("renders new artifact and tooling placeholders", async () => {
    const rootDir = await makeTempWorkspace();
    const previousCwd = process.cwd();

    process.chdir(rootDir);
    try {
      await runCli([
        "--issue",
        "DIG-7",
        "--type",
        "fix",
        "--scope",
        "shared",
        "--slug",
        "agents-orchestation",
        "--parent-branch",
        "jeisonsosablockdev/dig-7-fix-agents-orchestation",
        "--problem-artifact",
        "docs/fixes/fix-agents-orchestation.md",
        "--solution-artifact",
        "docs/fixes/fix-agents-orchestation-implementation.md",
        "--open-technical-question",
        "Define exact Playwright gate timing",
        "--tooling-change",
        "Add Vitest and Playwright dependencies"
      ]);

      const output = await fs.readFile(path.join(rootDir, "docs", "linear-context.md"), "utf8");
      expect(output).toContain("docs/fixes/fix-agents-orchestation.md");
      expect(output).toContain("docs/fixes/fix-agents-orchestation-implementation.md");
      expect(output).toContain("Define exact Playwright gate timing");
      expect(output).toContain("Add Vitest and Playwright dependencies");
    } finally {
      process.chdir(previousCwd);
      await fs.rm(rootDir, { recursive: true, force: true });
    }
  });
});
