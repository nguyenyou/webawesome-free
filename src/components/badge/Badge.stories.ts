import './badge.js'
import { html } from 'lit';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Badge',
}

export default meta;

export const Default = () => {
  return html`
      <wa-badge variant="brand" appearance="accent" attention="none">Badge</wa-badge>
  `;
};

