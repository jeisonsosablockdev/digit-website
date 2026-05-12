const fs = require("node:fs/promises");
const path = require("node:path");

const TEMPLATE_RELATIVE_PATH = path.join("docs", "templates", "linear-single-issue-slices.template.md");
const ALLOWED_TYPES = new Set(["feature", "fix", "security", "refactor"]);
const ALLOWED_SCOPES = new Set(["app", "shared", "docs", "infra", "security"]);

function slugify(rawValue) {
  return String(rawValue ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/--+/g, "-");
}

function normalizeIssueId(rawIssueId) {
  const value = String(rawIssueId ?? "").trim().toUpperCase();
  if (!value) throw new Error("`--issue` is required (example: --issue BRI-149).");
  if (/^\d+$/.test(value)) return `BRI-${value}`;
  if (/^[A-Z]+-\d+$/.test(value)) return value;
  throw new Error("`--issue` must look like BRI-149 or 149.");
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

function parseArgs(argv) {
  const args = { issueId: "", type: "feature", scope: "", slug: "", title: "", help: false };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--help" || token === "-h") args.help = true;
    else if (token === "--issue") args.issueId = argv[++i];
    else if (token === "--type") args.type = argv[++i];
    else if (token === "--scope") args.scope = argv[++i];
    else if (token === "--slug") args.slug = argv[++i];
    else if (token === "--title") args.title = argv[++i];
    else throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

async function readTemplate(rootDir) {
  const templatePath = path.join(rootDir, TEMPLATE_RELATIVE_PATH);
  return { templatePath, templateContent: await fs.readFile(templatePath, "utf8") };
}

async function runCli(argv) {
  const args = parseArgs(argv);
  if (args.help) {
    console.log("Usage: npm run linear:plan -- --issue BRI-149 --type feature --scope shared --slug doc-governance");
    return;
  }

  const issueId = normalizeIssueId(args.issueId);
  const type = normalizeType(args.type);
  const scope = normalizeScope(args.scope);
  const slug = slugify(args.slug);
  if (!slug) throw new Error("`--slug` is required.");

  const rootDir = process.cwd();
  const { templateContent } = await readTemplate(rootDir);
  const output = templateContent
    .replaceAll("{{ISSUE_ID}}", issueId)
    .replaceAll("{{TYPE}}", type)
    .replaceAll("{{SCOPE}}", scope)
    .replaceAll("{{SLUG}}", slug)
    .replaceAll("{{TITLE}}", args.title || slug);

  const outputPath = path.join(rootDir, "docs", "linear-context.md");
  await fs.writeFile(outputPath, output, "utf8");
  console.log(`Wrote ${path.relative(rootDir, outputPath)}`);
}

module.exports = { runCli };
