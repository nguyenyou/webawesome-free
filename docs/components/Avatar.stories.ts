import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { badgeManifest, getOptions } from '../../.storybook/manifest.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

type AvatarProps = {
  
};

const meta: Meta<AvatarProps> = {
  component: 'wa-avatar',
  title: 'Components/Avatar',
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<AvatarProps>;

export default meta;

type Story = StoryObj<AvatarProps>;

/**
 * The Button component shows a button
 */
export const Default = {};
