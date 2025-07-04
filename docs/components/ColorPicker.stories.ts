import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
 */
const meta: Meta = {
  component: 'wa-color-picker',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-color-picker label="Select a color"></wa-color-picker>
  `,
};
