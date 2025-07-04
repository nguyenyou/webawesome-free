import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Popovers display interactive content when their anchor element is clicked.
 */
const meta: Meta = {
  component: 'wa-popover',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-popover for="popover__overview">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <p>This popover contains interactive content that users can engage with directly.</p>
        <wa-button variant="primary" size="small">Take Action</wa-button>
      </div>
    </wa-popover>

    <wa-button id="popover__overview">Show popover</wa-button>
  `,
};
