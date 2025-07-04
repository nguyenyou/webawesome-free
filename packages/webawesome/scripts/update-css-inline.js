#!/usr/bin/env node

/**
 * Script: update-css-inline.js
 * ----------------------------------
 * Recursively scans the src directory (relative to this script's parent folder)
 * and appends the `?inline` query parameter to every .css import that does not
 * already have it.
 *
 * Examples transformed:
 *   import './tooltip.css';           -> import './tooltip.css?inline';
 *   import styles from './foo.css';   -> import styles from './foo.css?inline';
 *
 * Usage:
 *   node packages/webawesome/update-css-inline.js
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to the src folder we need to scan
const SRC_DIR = path.resolve(__dirname, '..', 'src');

// Matches both default/side-effect and named imports that point to a .css file
// 1st group → everything up to (and including) the opening quote
// 2nd group → the path ending with .css (without quotes)
// 3rd group → the closing quote
const CSS_IMPORT_REGEX = /(import\s+(?:[^'";]+?\s+from\s+)?["'])([^'";]+\.css)(["'])/g;

/**
 * Recursively walks through directories, processing files along the way.
 * @param {string} dir Absolute directory path to walk
 */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && /\.(t|j)sx?$/.test(entry.name)) {
        await processFile(fullPath);
      }
    }),
  );
}

/**
 * Reads a file, updates its CSS import paths, and writes it back if modified.
 * @param {string} file Absolute file path
 */
async function processFile(file) {
  const original = await readFile(file, 'utf8');
  const transformed = original.replace(CSS_IMPORT_REGEX, (match, prefix, cssPath, suffix) => {
    // Skip if ?inline already present or another query param exists
    if (/\?inline$/.test(cssPath) || cssPath.includes('?inline')) return match;
    return `${prefix}${cssPath}?inline${suffix}`;
  });

  if (transformed !== original) {
    await writeFile(file, transformed);
    console.log(`Updated ${path.relative(SRC_DIR, file)}`);
  }
}

// Kick things off
await walk(SRC_DIR);
console.log('✅ Finished updating CSS imports.'); 