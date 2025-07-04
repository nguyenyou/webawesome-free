import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * 'Dialogs, sometimes called "modals", appear above the page and require the user''s immediate attention.'
 */
const meta: Meta = {
  component: 'wa-dialog',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-dialog label="Dialog" id="dialog-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <wa-button slot="footer" variant="brand" data-dialog="close">Close</wa-button>
    </wa-dialog>

    <wa-button>Open Dialog</wa-button>

    <script>
      const dialog = document.querySelector('#dialog-overview');
      const openButton = dialog.nextElementSibling;

      openButton.addEventListener('click', () => (dialog.open = true));
    </script>
  `,
};
