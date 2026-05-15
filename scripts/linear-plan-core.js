const fs = require("node:fs/promises");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const TEMPLATE_RELATIVE_PATH = path.join("docs", "templates", "linear-single-issue-slices.template.md");
const ALLOWED_TYPES = new Set(["feature", "fix", "security", "refactor"]);
const ALLOWED_SCOPES = new Set(["app", "shared", "docs", "infra", "security"]);

function slugify(rawValue) {
  return String(rawValue ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}

function normalizeIssueId(rawIssueId) {
  const value = String(rawIssueId ?? "").trim().toUpperCase();
  if (!value) throw new Error("`--issue` is required (example: --issue DIG-5).");
  if (/^[A-Z]+-\d+$/.test(value)) return value;
  throw new Error("`--issue` must look like DIG-5.");
}

function normalizeType(rawType) {
  const value = String(rawType ?? "").trim().toLowerCase();
  if (!ALLOWED_TYPES.has(value)) throw new Error("`--type` inválido.");
  return value;
}

function normalizeScope(rawScope) {
  const value = String(rawScope ?? "").trim().toLowerCase();
  if (!ALLOWED_SCOPES.has(value)) throw new Error("`--scope` inválido.");
  return value;
}

function currentBranch(rootDir) {
  try {
    return execFileSync("git", ["branch", "--show-current"], {
      cwd: rootDir,
      encoding: "utf8"
    }).trim();
  } catch {
    return "";
  }
}

function parseArgs(argv) {
  const args = {
    issueId: "",
    type: "feature",
    scope: "",
    slug: "",
    title: "",
    owner: process.env.USER || process.env.USERNAME || "unknown",
    goal: "",
    scopeItems: [],
    nonGoals: [],
    risks: [],
    executionOrder: [],
    completionGates: [],
    slices: [],
    sliceCommits: [],
    integrationCommits: [],
    prReference: "TBD",
    parentBranch: "",
    integrationBranch: "",
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--help" || token === "-h") {
      args.help = true;
    } else if (token === "--issue") {
      args.issueId = argv[++i];
    } else if (token === "--type") {
      args.type = argv[++i];
    } else if (token === "--scope") {
      args.scope = argv[++i];
    } else if (token === "--slug") {
      args.slug = argv[++i];
    } else if (token === "--title") {
      args.title = argv[++i];
    } else if (token === "--owner") {
      args.owner = argv[++i];
    } else if (token === "--goal") {
      args.goal = argv[++i];
    } else if (token === "--scope-item") {
      args.scopeItems.push(argv[++i]);
    } else if (token === "--non-goal") {
      args.nonGoals.push(argv[++i]);
    } else if (token === "--risk") {
      args.risks.push(argv[++i]);
    } else if (token === "--order") {
      args.executionOrder.push(argv[++i]);
    } else if (token === "--completion-gate") {
      args.completionGates.push(argv[++i]);
    } else if (token === "--slice") {
      args.slices.push(argv[++i]);
    } else if (token === "--slice-commit") {
      args.sliceCommits.push(argv[++i]);
    } else if (token === "--integration-commit") {
      args.integrationCommits.push(argv[++i]);
    } else if (token === "--pr") {
      args.prReference = argv[++i];
    } else if (token === "--parent-branch") {
      args.parentBranch = argv[++i];
    } else if (token === "--integration-branch") {
      args.integrationBranch = argv[++i];
    } else {
      throw new Error(`Unknown argument: ${token}`);
    }
  }

  return args;
}

async function readTemplate(rootDir) {
  const templatePath = path.join(rootDir, TEMPLATE_RELATIVE_PATH);
  return {
    templateContent: await fs.readFile(templatePath, "utf8")
  };
}

function renderBulletList(items, fallback = "- TBD") {
  if (!items || items.length === 0) return fallback;
  return items.map((item) => `- ${item}`).join("\n");
}

function renderOrderedList(items, fallback = "1. TBD") {
  if (!items || items.length === 0) return fallback;
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function renderSliceRows(items) {
  if (!items || items.length === 0) {
    return "| S01 | planned | `TBD` | TBD | TBD | TBD | TBD |";
  }

  return items
    .map((item) => {
      const parts = String(item).split("|").map((part) => part.trim());
      const [slice, status, branch, objective, scope, validation, pr] = parts;
      return `| ${slice || "S??"} | ${status || "planned"} | \`${branch || "TBD"}\` | ${objective || "TBD"} | ${scope || "TBD"} | ${validation || "TBD"} | ${pr || "TBD"} |`;
    })
    .join("\n");
}

async function runCli(argv) {
  const args = parseArgs(argv);
  if (args.help) {
    console.log(
      "Usage: npm run linear:plan -- --issue DIG-5 --type feature --scope shared --slug seo-performance-governance --parent-branch feature/shared-seo-performance-governance-dig-5"
    );
    return;
  }

  const rootDir = process.cwd();
  const issueId = normalizeIssueId(args.issueId);
  const type = normalizeType(args.type);
  const scope = normalizeScope(args.scope);
  const slug = slugify(args.slug);
  if (!slug) throw new Error("`--slug` is required.");

  const parentBranch = args.parentBranch || currentBranch(rootDir) || `${type}/${scope}-${slug}-${issueId.toLowerCase()}`;
  const integrationBranch = args.integrationBranch || parentBranch;

  const { templateContent } = await readTemplate(rootDir);
  const output = templateContent
    .replaceAll("{{GOAL}}", args.goal || "TBD")
    .replaceAll("{{SCOPE_ITEMS}}", renderBulletList(args.scopeItems))
    .replaceAll("{{NON_GOAL_ITEMS}}", renderBulletList(args.nonGoals))
    .replaceAll("{{ISSUE_ID}}", issueId)
    .replaceAll("{{OWNER}}", args.owner)
    .replaceAll("{{PARENT_BRANCH}}", parentBranch)
    .replaceAll("{{PR_REFERENCE}}", args.prReference || "TBD")
    .replaceAll("{{INTEGRATION_BRANCH}}", integrationBranch)
    .replaceAll("{{SLICE_ROWS}}", renderSliceRows(args.slices))
    .replaceAll("{{SLICE_COMMIT_ITEMS}}", renderBulletList(args.sliceCommits))
    .replaceAll("{{INTEGRATION_COMMIT_ITEMS}}", renderBulletList(args.integrationCommits))
    .replaceAll("{{EXECUTION_ORDER}}", renderOrderedList(args.executionOrder))
    .replaceAll("{{RISK_ITEMS}}", renderBulletList(args.risks))
    .replaceAll("{{COMPLETION_GATE_ITEMS}}", renderBulletList(args.completionGates));

  const outputPath = path.join(rootDir, "docs", "linear-context.md");
  await fs.writeFile(outputPath, output, "utf8");
  console.log(`Wrote ${path.relative(rootDir, outputPath)}`);
}

module.exports = { runCli };
