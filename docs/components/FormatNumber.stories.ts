import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Dropdowns expose additional content that "drops down" in a panel.
 */
const meta: Meta = {
  component: 'wa-format-number',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="format-number-overview">
      <wa-format-number value="1000"></wa-format-number>
      <br /><br />
      <wa-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></wa-input>
    </div>

    <script>
      const container = document.querySelector('.format-number-overview');
      const formatter = container.querySelector('wa-format-number');
      const input = container.querySelector('wa-input');

      input.addEventListener('input', () => (formatter.value = input.value || 0));
    </script>
  `,
};
