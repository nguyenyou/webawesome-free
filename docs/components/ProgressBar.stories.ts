import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Progress bars are used to show the status of an ongoing operation.
 */
const meta: Meta = {
  component: 'wa-progress-bar',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-progress-bar value="40"></wa-progress-bar>
  `,
};
