import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * The Resize Observer component offers a thin, declarative interface to the ResizeObserver API.
 */
const meta: Meta = {
  component: 'wa-resize-observer',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="resize-observer-overview">
      <wa-resize-observer>
        <div>Resize this box and watch the console 👉</div>
      </wa-resize-observer>
    </div>

    <script>
      const container = document.querySelector('.resize-observer-overview');
      const resizeObserver = container.querySelector('wa-resize-observer');

      resizeObserver.addEventListener('wa-resize', event => {
        console.log(event.detail);
      });
    </script>

    <style>
      .resize-observer-overview div {
        display: flex;
        border: solid 2px var(--wa-color-surface-border);
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 4rem 2rem;
      }
    </style>
  `,
};
