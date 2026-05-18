import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

import { describe, expect, it } from "vitest";

import { createRfcScaffold } from "../../scripts/rfc-new-core.js";

async function makeTempWorkspace() {
  const rootDir = await fs.mkdtemp(path.join(os.tmpdir(), "digit-rfc-"));
  await fs.mkdir(path.join(rootDir, "docs", "rfcs", "templates"), { recursive: true });

  await fs.writeFile(
    path.join(rootDir, "docs", "rfcs", "templates", "EPIC-README.template.md"),
    [
      "# EPIC-<id>-<slug>",
      "- Language Coverage: `bilingual` (`bilingual | exception-documented`)",
      "- Mother Branch: `<mother-branch>`",
      "- Documentation Slice: `<documentation-slice>`",
      "## Traceability",
      "- Problem artifact:",
      "- Solution artifact:"
    ].join("\n"),
    "utf8"
  );

  await fs.writeFile(
    path.join(rootDir, "docs", "rfcs", "templates", "STORY.template.md"),
    [
      "# STORY-<id>-<slug>",
      "- Language Coverage: `bilingual` (`bilingual | exception-documented`)",
      "- Mother Branch: `<mother-branch>`",
      "- Documentation Slice: `<documentation-slice>`",
      "## Traceability",
      "- Problem artifact:",
      "- Solution artifact:"
    ].join("\n"),
    "utf8"
  );

  execFileSync("git", ["init"], { cwd: rootDir, stdio: "ignore" });
  execFileSync("git", ["checkout", "-b", "fix/docs-dig-7-s00-documentation"], { cwd: rootDir, stdio: "ignore" });

  return rootDir;
}

describe("rfc-new-core", () => {
  it("writes mother branch, documentation slice, and artifact traceability", async () => {
    const rootDir = await makeTempWorkspace();
    const result = await createRfcScaffold({
      rootDir,
      epicId: "7",
      epicSlug: "agents-orchestation",
      storyId: "01",
      storySlug: "policy-foundation",
      owner: "tester",
      motherBranch: "jeisonsosablockdev/dig-7-fix-agents-orchestation",
      documentationSlice: "fix/shared-dig-7-s00-documentation",
      problemArtifact: "docs/fixes/fix-agents-orchestation.md",
      solutionArtifact: "docs/fixes/fix-agents-orchestation-implementation.md"
    });

    const readme = await fs.readFile(result.epicReadmePath, "utf8");
    expect(readme).toContain("jeisonsosablockdev/dig-7-fix-agents-orchestation");
    expect(readme).toContain("fix/shared-dig-7-s00-documentation");
    expect(readme).toContain("docs/fixes/fix-agents-orchestation.md");
    expect(readme).toContain("docs/fixes/fix-agents-orchestation-implementation.md");

    await fs.rm(rootDir, { recursive: true, force: true });
  });

  it("rejects non-documentation slices", async () => {
    const rootDir = await makeTempWorkspace();

    await expect(
      createRfcScaffold({
        rootDir,
        epicId: "7",
        epicSlug: "agents-orchestation",
        motherBranch: "jeisonsosablockdev/dig-7-fix-agents-orchestation",
        documentationSlice: "fix/shared-dig-7-s04-rfc-enforcement"
      })
    ).rejects.toThrow("documentation slice");

    await fs.rm(rootDir, { recursive: true, force: true });
  });
});
