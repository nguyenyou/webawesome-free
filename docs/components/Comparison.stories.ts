import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * This is especially useful for comparing images, but can be used for comparing any type of content (for an example of using it to compare entire UIs, check out our [theme pages](/docs/themes/default/)).
 * For best results, use content that shares the same dimensions.
 * The slider can be controlled by dragging or pressing the left and right arrow keys. (Tip: press shift + arrows to move the slider in larger intervals, or home + end to jump to the beginning or end.)
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
    <wa-comparison>
      <img
        slot="before"
        src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
        alt="Grayscale version of kittens in a basket looking around."
      />
      <img
        slot="after"
        src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        alt="Color version of kittens in a basket looking around."
      />
    </wa-comparison>
  `,
};
