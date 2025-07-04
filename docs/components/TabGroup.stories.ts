import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Tab groups organize content into a container that shows one section at a time.
 */
const meta: Meta = {
  component: 'wa-tab-group',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-tab-group>
      <wa-tab panel="general">General</wa-tab>
      <wa-tab panel="custom">Custom</wa-tab>
      <wa-tab panel="advanced">Advanced</wa-tab>
      <wa-tab panel="disabled" disabled>Disabled</wa-tab>

      <wa-tab-panel name="general">This is the general tab panel.</wa-tab-panel>
      <wa-tab-panel name="custom">This is the custom tab panel.</wa-tab-panel>
      <wa-tab-panel name="advanced">This is the advanced tab panel.</wa-tab-panel>
      <wa-tab-panel name="disabled">This is a disabled tab panel.</wa-tab-panel>
    </wa-tab-group>
  `,
};
