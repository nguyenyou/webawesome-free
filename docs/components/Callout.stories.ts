import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Callouts are used to display important messages inline.
 */
const meta: Meta = {
  component: 'wa-callout',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-callout>
      <wa-icon slot="icon" name="circle-info" variant="regular"></wa-icon>
      This is a standard callout. You can customize its content and even the icon.
    </wa-callout>
  `,
};
