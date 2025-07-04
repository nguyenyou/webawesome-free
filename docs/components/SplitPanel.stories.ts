import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-split-panel',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-split-panel>
      <div
        slot="start"
        style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </wa-split-panel>
  `,
};
