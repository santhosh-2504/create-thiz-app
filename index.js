#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Timer start
const start = Date.now();

// Fix ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Banner
console.log(
  chalk.cyanBright(`
┌──────────────────────────────────────────────────┐
│                     create-thiz-app              │
│        Backend development. Clean. Fast. THIZ.   │
└──────────────────────────────────────────────────┘
`)
);

// Read project name
const projectName = process.argv[2];
if (!projectName) {
  console.log(chalk.red("✖ Error: No project name provided."));
  console.log(chalk.yellow("Usage: create-thiz-app <project-name>"));
  process.exit(1);
}

// Paths
const cwd = process.cwd();
const targetDir = path.join(cwd, projectName);
const templateDir = path.join(__dirname, "templates");

// Prevent overwriting
if (fs.existsSync(targetDir)) {
  console.log(
    chalk.red(`✖ Error: The folder "${projectName}" already exists.`)
  );
  process.exit(1);
}

// Step 1: Create project
console.log(chalk.cyan("▶ Creating project...\n"));
await fs.copy(templateDir, targetDir);
console.log(chalk.green("✔ Project structure created."));

// Step 2: Create .env
const envExample = path.join(targetDir, ".env.example");
const envFile = path.join(targetDir, ".env");

if (fs.existsSync(envExample)) {
  await fs.copy(envExample, envFile);
  console.log(chalk.green("✔ .env file created."));
}

// Step 3: Update package.json
const pkgPath = path.join(targetDir, "package.json");
const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));

// Replace only the name field
pkg.name = projectName;

// Keep author empty so user can add theirs
pkg.author = "";

await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
console.log(chalk.green("✔ package.json updated."));

// Step 4: Install dependencies
console.log(chalk.cyan("\n▶ Installing dependencies...\n"));

try {
  execSync("npm install", { stdio: "inherit", cwd: targetDir });
  console.log(chalk.green("\n✔ Dependencies installed successfully."));
} catch {
  console.log(
    chalk.red("✖ Failed to install dependencies. Please run 'npm install' manually.")
  );
}

// End timer
const end = ((Date.now() - start) / 1000).toFixed(2);

// Final message
console.log(chalk.greenBright("\n✔ THIZ is ready!\n"));
console.log(
  chalk.cyanBright(`Next steps:
  cd ${projectName}
  npm run dev

Your logic. Your flow. THIZ handles the rest.`)
);

console.log(chalk.gray(`\nDone in ${end}s\n`));