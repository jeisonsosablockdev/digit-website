#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const rootDir = process.cwd();
const appDir = path.join(rootDir, "app");
const errors = [];

function read(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(rootDir, relativePath));
}

function walkTsx(dirPath, fileList = []) {
  if (!fs.existsSync(dirPath)) return fileList;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const nextPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkTsx(nextPath, fileList);
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      fileList.push(nextPath);
    }
  }
  return fileList;
}

const layoutPath = "app/layout.tsx";
if (!exists(layoutPath)) {
  errors.push("Missing app/layout.tsx.");
} else {
  const layoutSource = read(layoutPath);
  if (!/export\s+const\s+metadata|export\s+async\s+function\s+generateMetadata|export\s+function\s+generateMetadata/.test(layoutSource)) {
    errors.push("app/layout.tsx must export metadata or generateMetadata.");
  }
  if (!/metadataBase\s*:/.test(layoutSource)) {
    errors.push("app/layout.tsx metadata should define metadataBase.");
  }
  if (/^["']use client["'];?/m.test(layoutSource)) {
    errors.push("app/layout.tsx cannot be a client component.");
  }
}

if (!exists("app/robots.ts") && !exists("public/robots.txt")) {
  errors.push("Missing robots definition: add app/robots.ts or public/robots.txt.");
}

if (!exists("app/sitemap.ts")) {
  errors.push("Missing app/sitemap.ts.");
}

const tsxFiles = walkTsx(appDir);
const pageFiles = tsxFiles.filter((filePath) => filePath.endsWith(`${path.sep}page.tsx`));
for (const pageFile of pageFiles) {
  const source = fs.readFileSync(pageFile, "utf8");
  const relative = path.relative(rootDir, pageFile);
  const h1Count = (source.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) {
    errors.push(`${relative} must contain exactly one <h1>. Found ${h1Count}.`);
  }
  if (/^["']use client["'];?/m.test(source)) {
    errors.push(`${relative} should not be a client component unless explicitly justified.`);
  }
}

for (const filePath of tsxFiles) {
  const source = fs.readFileSync(filePath, "utf8");
  const relative = path.relative(rootDir, filePath);
  if (/<script(?![^>]*type=["']application\/ld\+json["'])/i.test(source)) {
    errors.push(`${relative} contains a raw <script> tag. Use controlled SEO/script patterns instead.`);
  }
  if (/<img[\s>]/i.test(source)) {
    errors.push(`${relative} contains raw <img>. Prefer next/image on public surfaces.`);
  }
}

if (errors.length > 0) {
  console.error("SEO/performance validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("SEO/performance validation passed.");
