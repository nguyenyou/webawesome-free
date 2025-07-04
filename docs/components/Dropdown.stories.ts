import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Dropdowns expose additional content that "drops down" in a panel.
 */
const meta: Meta = {
  component: 'wa-dropdown',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-dropdown>
      <wa-button slot="trigger" with-caret>Dropdown</wa-button>
      <wa-dropdown-item>
        <wa-icon slot="icon" name="scissors"></wa-icon>
        Cut
      </wa-dropdown-item>
      <wa-dropdown-item>
        <wa-icon slot="icon" name="copy"></wa-icon>
        Copy
      </wa-dropdown-item>
      <wa-dropdown-item>
        <wa-icon slot="icon" name="paste"></wa-icon>
        Paste
      </wa-dropdown-item>
      <wa-divider></wa-divider>
      <wa-dropdown-item type="checkbox" checked>Emoji Shortcuts</wa-dropdown-item>
      <wa-dropdown-item type="checkbox" checked>Word Wrap</wa-dropdown-item>
      <wa-divider></wa-divider>
      <wa-dropdown-item variant="danger">
        <wa-icon slot="icon" name="trash"></wa-icon>
        Delete
      </wa-dropdown-item>
    </wa-dropdown>
  `,
};
