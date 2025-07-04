import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Zoomable frames render iframe content with zoom and interaction controls.
 */
const meta: Meta = {
  component: 'wa-zoomable-frame',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
   <wa-zoomable-frame src="https://backers.webawesome.com/" zoom="0.5"> </wa-zoomable-frame>
  `,
};
