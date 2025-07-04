import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-animated-image',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-animated-image
      src="https://shoelace.style/assets/images/walk.gif"
      alt="Animation of untied shoes walking on pavement"
    ></wa-animated-image>
  `,
};
