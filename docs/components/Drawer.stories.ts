import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Drawers slide in from a container to expose additional options and information.
 */
const meta: Meta = {
  component: 'wa-drawer',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-drawer label="Drawer" id="drawer-overview">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
    </wa-drawer>

    <wa-button>Open Drawer</wa-button>

    <script>
      const drawer = document.querySelector('#drawer-overview');
      const openButton = drawer.nextElementSibling;

      openButton.addEventListener('click', () => (drawer.open = true));
    </script>
  `,
};
