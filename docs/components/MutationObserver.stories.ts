import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * The Mutation Observer component offers a thin, declarative 
 */
const meta: Meta = {
  component: 'wa-mutation-observer',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="mutation-overview">
      <wa-mutation-observer attr="variant">
        <wa-button variant="brand">Click to mutate</wa-button>
      </wa-mutation-observer>

      <br />
      👆 Click the button and watch the console

      <script>
        const container = document.querySelector('.mutation-overview');
        const mutationObserver = container.querySelector('wa-mutation-observer');
        const button = container.querySelector('wa-button');
        const variants = ['brand', 'success', 'neutral', 'warning', 'danger'];
        let clicks = 0;

        // Change the button's variant attribute
        button.addEventListener('click', () => {
          clicks++;
          button.setAttribute('variant', variants[clicks % variants.length]);
        });

        // Log mutations
        mutationObserver.addEventListener('wa-mutation', event => {
          console.log(event.detail);
        });
      </script>

      <style>
        .mutation-overview wa-button {
          margin-bottom: 1rem;
        }
      </style>
    </div>
  `,
};
