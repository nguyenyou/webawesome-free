import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-spinner',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

/**
 * Spinners are sized based on the current font size. 
 * To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.
 */
export const Size: Story = {
  render: () => html`
    <wa-spinner></wa-spinner>
    <wa-spinner style="font-size: 2rem;"></wa-spinner>
    <wa-spinner style="font-size: 3rem;"></wa-spinner>
  `,
};
