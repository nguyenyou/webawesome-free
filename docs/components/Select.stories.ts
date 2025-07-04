import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-select',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-select>
      <wa-option value="option-1">Option 1</wa-option>
      <wa-option value="option-2">Option 2</wa-option>
      <wa-option value="option-3">Option 3</wa-option>
      <wa-option value="option-4">Option 4</wa-option>
      <wa-option value="option-5">Option 5</wa-option>
      <wa-option value="option-6">Option 6</wa-option>
    </wa-select>
  `,
};
