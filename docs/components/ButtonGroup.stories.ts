import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Button groups can be used to group related buttons into sections.
 */
const meta: Meta = {
  component: 'wa-button-group',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-button-group label="Alignment">
      <wa-button>Left</wa-button>
      <wa-button>Center</wa-button>
      <wa-button>Right</wa-button>
    </wa-button-group>
  `,
};
