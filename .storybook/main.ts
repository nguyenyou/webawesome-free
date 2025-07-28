import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/web-components-vite';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  "stories": [
    "../docs/**/*.mdx",
    "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    config.base = process.env.PAGES_BASE_PATH || '/';
    return config;
  }
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}