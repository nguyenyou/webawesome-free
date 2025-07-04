import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Dividers are used to visually separate or group elements.
 */
const meta: Meta = {
  component: 'wa-divider',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-divider style="--width: 4px;"></wa-divider>
  `,
};
