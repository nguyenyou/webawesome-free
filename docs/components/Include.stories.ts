import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Dropdowns expose additional content that "drops down" in a panel.
 */
const meta: Meta = {
  component: 'wa-include',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-include src="https://shoelace.style/assets/examples/include.html"></wa-include>

    <script>
      const include = document.querySelector('wa-include');

      include.addEventListener('wa-load', event => {
        if (event.eventPhase === Event.AT_TARGET) {
          console.log('Success');
        }
      });

      include.addEventListener('wa-error', event => {
        if (event.eventPhase === Event.AT_TARGET) {
          console.log('Error', event.detail.status);
        }
      });
    </script>
  `,
};
