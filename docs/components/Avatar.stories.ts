import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { badgeManifest, getOptions } from '../../.storybook/manifest.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.
 */
const meta: Meta = {
  component: 'wa-avatar',
  title: 'Components/Avatar',
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

/**
 * Use the `variant` attribute to change the avatar's variant.
 */
export const Variants: Story = {
  render: () => html`
    <wa-avatar variant="brand">Brand</wa-avatar>
  `
};
