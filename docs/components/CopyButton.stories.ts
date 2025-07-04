import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Copies data to the clipboard when the user clicks the button.
 */
const meta: Meta = {
  component: 'wa-comparison',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-copy-button value="Web Awesome rocks!"></wa-copy-button>
  `,
};
