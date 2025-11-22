#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Start timer
const startTime = Date.now();

// Fix Windows path issue: get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Premium Banner
console.log(chalk.cyanBright(`
┌────────────────────────────────────────────────┐
│                    create-thiz-app             │
│      Backend development. Clean. Fast. THIZ.   │
└────────────────────────────────────────────────┘
`));

// Read project name
const projectName = process.argv[2];
if (!projectName) {
  console.log(chalk.red("✖ No project name provided."));
  console.log(chalk.yellow("Usage: create-thiz-app <project-name>"));
  process.exit(1);
}

// Define paths
const currentDir = process.cwd();
const targetDir = path.join(currentDir, projectName);
const templateDir = path.join(__dirname, "templates");

// If exists → abort
if (fs.existsSync(targetDir)) {
  console.log(chalk.red(`✖ The folder "${projectName}" already exists. Choose another name.`));
  process.exit(1);
}

// Step 1: Create project folder
console.log(chalk.cyan("▶ Creating project...\n"));
await fs.copy(templateDir, targetDir);
console.log(chalk.green("✔ Project structure created."));

// Step 2: Create .env
const envExample = path.join(targetDir, ".env.example");
const envFile = path.join(targetDir, ".env");

if (fs.existsSync(envExample)) {
  await fs.copy(envExample, envFile);
  console.log(chalk.green("✔ Environment file (.env) created."));
}

// Step 3: Update package.json name
const pkgPath = path.join(targetDir, "package.json");
const pkgData = JSON.parse(await fs.readFile(pkgPath, "utf-8"));
pkgData.name = projectName;
await fs.writeFile(pkgPath, JSON.stringify(pkgData, null, 2));
console.log(chalk.green("✔ package.json updated."));

// Step 4: Install dependencies
console.log(chalk.cyan("\n▶ Installing dependencies...\n"));

try {
  execSync("npm install", { stdio: "inherit", cwd: targetDir });
  console.log(chalk.green("\n✔ Dependencies installed successfully."));
} catch (err) {
  console.log(chalk.red("✖ Failed to install dependencies. Run npm install manually."));
}

// End timer
const endTime = Date.now();
const totalSeconds = ((endTime - startTime) / 1000).toFixed(2);

// Final Message
console.log(chalk.greenBright("\n✔ THIZ is ready !\n"));
console.log(
  chalk.cyanBright(`Next steps:
  cd ${projectName}
  npm run dev

Your logic. Your flow. THIZ handles the rest.`)
);

// Show execution time
console.log(chalk.gray(`\nDone in ${totalSeconds}s\n`));