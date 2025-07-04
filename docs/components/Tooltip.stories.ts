import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-tooltip',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-tooltip for="my-button">This is a tooltip</wa-tooltip> <wa-button id="my-button">Hover Me</wa-button>
  `,
};
