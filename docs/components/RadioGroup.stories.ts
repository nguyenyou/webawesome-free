import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Radio groups are used to group multiple radios so they function as a single form control.
 */
const meta: Meta = {
  component: 'wa-radio-group',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-radio-group label="Select an option" name="a" value="1">
      <wa-radio value="1">Option 1</wa-radio>
      <wa-radio value="2">Option 2</wa-radio>
      <wa-radio value="3">Option 3</wa-radio>
    </wa-radio-group>
  `,
};
