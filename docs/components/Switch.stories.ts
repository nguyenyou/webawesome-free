import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import { getManifest, getOptions } from '../../.storybook/manifest.js';

const switchManifest = getManifest("Switch");


const meta: Meta = {
  component: 'wa-switch',
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
