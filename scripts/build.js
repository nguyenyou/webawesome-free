import { fileURLToPath } from "node:url";
import { execSync } from "child_process";
import ora from "ora";
import chalk from "chalk";
import { deleteAsync } from 'del';
import { getCdnDir, getDistDir, getDocsDir, getRootDir, getSiteDir, runScript } from './utils.js';
import { mkdir, readFile } from 'fs/promises';

const spinner = ora({ text: "Web Awesome", color: "cyan" }).start();

async function build() {
  console.log("build");
  /**
   * Runs the full build.
   */
  async function buildAll() {
    console.log("buildAll");
    const start = Date.now();
    try {
      await cleanup();
      await generateManifest();
    } catch (err) {
      spinner.fail();
      console.log(chalk.red(`\n${err}`));
    }
  }

  /** Empties the dist directory. */
  async function cleanup() {
    spinner.start("Cleaning up dist");

    await deleteAsync(getDistDir());
    await deleteAsync(getCdnDir());
    await mkdir(getDistDir(), { recursive: true });
    await mkdir(getCdnDir(), { recursive: true });

    spinner.succeed();
  }

  await buildAll();

  /**
   * Analyzes components and generates the custom elements manifest file.
   */
  function generateManifest() {
    spinner.start("Generating CEM");

    try {
      execSync('cem analyze --config "custom-elements-manifest.js"');
    } catch (error) {
      console.error(`\n\n${error.message}`);

      if (!isDeveloping) {
        process.exit(1);
      }
    }

    spinner.succeed();

    return Promise.resolve();
  }

  //
  // Cleanup everything when the process terminates
  //
  function terminate() {
    // dispose of contexts.
    Object.values(buildContexts).forEach((context) => context?.dispose?.());

    if (spinner) {
      spinner.stop();
    }

    process.exit();
  }

  process.on("SIGINT", terminate);
  process.on("SIGTERM", terminate);
}

// https://exploringjs.com/nodejs-shell-scripting/ch_nodejs-path.html#detecting-if-module-is-main
// Detects if this was called via node scripts/build.js
function isRunAsMain() {
  if (import.meta.url.startsWith("file:")) {
    // (A)
    const modulePath = fileURLToPath(import.meta.url);
    if (process.argv[1] === modulePath) {
      // (B)
      return true;
    }
  }

  return false;
}

if (isRunAsMain()) {
  await build();
}
