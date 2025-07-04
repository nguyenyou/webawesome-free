import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Dropdowns expose additional content that "drops down" in a panel.
 */
const meta: Meta = {
  component: 'wa-icon',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-icon name="eyedropper"></wa-icon>
    <wa-icon name="grip-vertical"></wa-icon>
    <wa-icon name="play"></wa-icon>
    <wa-icon name="star"></wa-icon>
    <wa-icon name="user"></wa-icon>
  `,
};
