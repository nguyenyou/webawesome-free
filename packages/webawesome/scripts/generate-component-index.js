#!/usr/bin/env node

/**
 * This script automatically generates a barrel export file for all web components
 * to make it easier to import all components at once in Storybook and other environments.
 */

import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateComponentIndex() {
  const componentsDir = join(__dirname, '../src/components');
  const outputFile = join(__dirname, '../src/index.ts');
  
  try {
    // Read all directories in the components folder
    const entries = await fs.readdir(componentsDir, { withFileTypes: true });
    const componentDirs = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .sort();
    
    // Generate export statements
    const exports = [];
    
    for (const componentDir of componentDirs) {
      const componentPath = join(componentsDir, componentDir);
      const files = await fs.readdir(componentPath);
      
      // Look for .ts files that are not test files
      const componentFiles = files.filter(file => 
        file.endsWith('.ts') && !file.endsWith('.test.ts')
      );
      
      for (const file of componentFiles) {
        const fileName = file.replace('.ts', '.js');
        exports.push(`export * from './components/${componentDir}/${fileName}';`);
      }
    }
    
    // Generate the file content
    const content = `// Auto-generated component imports
// This file automatically imports all web components for use in Storybook and other environments
// Generated by: npm run generate:component-index

${exports.join('\n')}
`;
    
    // Write the file
    await fs.writeFile(outputFile, content);
    
    console.log(`✅ Generated component index with ${exports.length} exports`);
    console.log(`📁 File: ${outputFile}`);
    
  } catch (error) {
    console.error('❌ Error generating component index:', error);
    process.exit(1);
  }
}

generateComponentIndex(); 