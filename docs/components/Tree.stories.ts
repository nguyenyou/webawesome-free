import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
 */
const meta: Meta = {
  component: 'wa-tree',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-tree selection="multiple">
      <wa-tree-item>
        Parent Node
        <wa-tree-item selected>Child Node 1</wa-tree-item>
        <wa-tree-item>
          Child Node 2
          <wa-tree-item>Child Node 2 - 1</wa-tree-item>
          <wa-tree-item>Child Node 2 - 2</wa-tree-item>
        </wa-tree-item>
      </wa-tree-item>
    </wa-tree>
  `,
};
