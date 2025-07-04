import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-animation',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="animation-overview">
      <wa-animation name="bounce" duration="2000" play><div class="box"></div></wa-animation>
      <wa-animation name="jello" duration="2000" play><div class="box"></div></wa-animation>
      <wa-animation name="heartBeat" duration="2000" play><div class="box"></div></wa-animation>
      <wa-animation name="flip" duration="2000" play><div class="box"></div></wa-animation>
    </div>

    <style>
      .animation-overview .box {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: var(--wa-color-brand-fill-loud);
        margin: 1.5rem;
      }
    </style>
  `,
};
