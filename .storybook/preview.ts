import type { Preview } from '@storybook/web-components-vite'
import { setCustomElementsManifest } from '@storybook/web-components-vite';


import "../packages/webawesome/src/styles/themes/default.css"
import "../packages/webawesome/src/styles/webawesome.css"
import "./custom.css"

import customElements from "../packages/webawesome/dist/custom-elements.json";

// Components - Auto-import all components via barrel export
import '../packages/webawesome/src/index.js';

setCustomElementsManifest(customElements);


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;