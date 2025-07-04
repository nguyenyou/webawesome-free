import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Generates a QR code and renders it using the Canvas API.
 */
const meta: Meta = {
  component: 'wa-qr-code',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="qr-overview">
      <wa-qr-code value="https://shoelace.style/" label="Scan this code to visit Web Awesome on the web!"></wa-qr-code>
      <br />

      <wa-input maxlength="255" with-clear label="Value">
        <wa-icon slot="start" name="link"></wa-icon>
      </wa-input>
    </div>

    <script>
      const container = document.querySelector('.qr-overview');
      const qrCode = container.querySelector('wa-qr-code');
      const input = container.querySelector('wa-input');

      customElements.whenDefined('wa-qr-code').then(() => {
        input.value = qrCode.value;
        input.addEventListener('input', () => (qrCode.value = input.value));
      });
    </script>

    <style>
      .qr-overview {
        max-width: 256px;
      }

      .qr-overview wa-input {
        margin-top: 1rem;
      }
    </style>
  `,
};
