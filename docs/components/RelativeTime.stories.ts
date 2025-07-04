import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Outputs a localized time phrase relative to the current date and time.
 */
const meta: Meta = {
  component: 'wa-relative-time',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-relative-time date="2020-07-15T09:17:00-04:00"></wa-relative-time>
  `,
};
