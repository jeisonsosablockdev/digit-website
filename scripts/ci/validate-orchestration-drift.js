const fs = require("node:fs");
const path = require("node:path");

const rootDir = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf8");
}

function assertIncludes(haystack, needle, message) {
  if (!haystack.includes(needle)) {
    throw new Error(message);
  }
}

function assertExcludes(haystack, needle, message) {
  if (haystack.includes(needle)) {
    throw new Error(message);
  }
}

function main() {
  const agents = read("AGENTS.md");
  const docsPolicy = read(".codex/policies/docs-policy.md");
  const testingPolicy = read(".codex/policies/testing-policy.md");
  const codexConfig = read(".codex/config.toml");

  [
    "docs/governance/documentation-policy.md",
    "docs/governance/git-monorepo-policy.md",
    "docs/governance/frontend-ui-policy.md",
    "docs/governance/seo-performance-policy.md",
    "docs/governance/security-quality-policy.md",
    "docs/governance/pr-policy-source-of-truth.json",
    "scripts/ci/check-required-docs.sh"
  ].forEach((requiredPath) => {
    assertIncludes(agents, requiredPath, `AGENTS.md missing canonical truth entry: ${requiredPath}`);
  });

  assertIncludes(docsPolicy, "problem artifact", "docs-policy must mention problem artifacts.");
  assertIncludes(docsPolicy, "solution artifact", "docs-policy must mention solution artifacts.");
  assertIncludes(docsPolicy, "English and Spanish", "docs-policy must mention bilingual operational documentation.");

  assertIncludes(testingPolicy, "Vitest", "testing-policy must mention Vitest.");
  assertIncludes(testingPolicy, "@testing-library/react", "testing-policy must mention Testing Library.");
  assertIncludes(testingPolicy, "Playwright", "testing-policy must mention Playwright.");

  assertExcludes(codexConfig, "helius", ".codex/config.toml should not reference helius.");
  assertExcludes(codexConfig, "solana-mcp-server", ".codex/config.toml should not reference solana-mcp-server.");

  console.log("Orchestration drift validation passed.");
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`::error::${message}`);
  process.exit(1);
}
