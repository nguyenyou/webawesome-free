import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import { getManifest, getOptions } from '../../.storybook/manifest.js';

const checkboxManifest = getManifest("Checkbox");

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * Checkboxes allow the user to toggle an option on or off.
 * 
 * This component works with standard `<form>` elements. Please refer to the section on [form controls](/docs/form-controls) to learn more about form submission and client-side validation.
 */
const meta: Meta = {
  component: 'wa-checkbox',
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

/**
 * Use the `checked` attribute to activate the checkbox.
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * Use the `indeterminate` attribute to make the checkbox indeterminate.
 */
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

/**
 * Use the `disabled` attribute to disable the checkbox.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};