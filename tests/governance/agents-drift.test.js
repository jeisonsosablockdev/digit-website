import { execFileSync } from "node:child_process";

import { describe, expect, it } from "vitest";

describe("orchestration drift validation", () => {
  it("passes against the current repository state", () => {
    expect(() =>
      execFileSync("node", ["./scripts/ci/validate-orchestration-drift.js"], {
        cwd: process.cwd(),
        stdio: "pipe"
      })
    ).not.toThrow();
  });
});
