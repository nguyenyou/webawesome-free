import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Progress rings are used to show the progress of a determinate operation in a circular fashion.
 */
const meta: Meta = {
  component: 'wa-progress-ring',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-progress-ring value="25"></wa-progress-ring>
  `,
};
