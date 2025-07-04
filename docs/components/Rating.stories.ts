import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Ratings give users a way to quickly view and provide feedback.
 */
const meta: Meta = {
  component: 'wa-qr-code',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-rating label="Rating"></wa-rating>
  `,
};
