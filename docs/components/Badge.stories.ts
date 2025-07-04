import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { getManifest, getOptions } from '../../.storybook/manifest.js';

const badgeManifest = getManifest("Badge");

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories


const meta: Meta = {
  component: 'wa-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: getOptions('variant', badgeManifest),
    },
    appearance: {
      control: 'radio',
      options: getOptions('appearance', badgeManifest),
    },
    attention: {
      control: 'radio',
      options: getOptions('attention', badgeManifest),
    },
    pill: { control: 'boolean' },
  },
  render: args => {
    return html`
      <wa-badge
        variant="${ifDefined(args.variant)}"
        appearance="${ifDefined(args.appearance)}"
        attention="${ifDefined(args.attention)}"
        ?pill="${args.pill}"
        >Badge</wa-badge
      >
    `;
  },
} satisfies Meta

export default meta;

type Story = StoryObj;

export const Default: Story = {};

/**
 * Set the `variant` attribute to change the badge's variant.
 */
export const Variants: Story = {
  render: () => html`
    <wa-badge variant="brand" appearance="accent" attention="none">Badge</wa-badge>
    <wa-badge variant="neutral" appearance="accent" attention="none">Badge</wa-badge>
    <wa-badge variant="success" appearance="accent" attention="none">Badge</wa-badge>
    <wa-badge variant="warning" appearance="accent" attention="none">Badge</wa-badge>
    <wa-badge variant="danger" appearance="accent" attention="none">Badge</wa-badge>
  `
};

/**
 * Use the `appearance` attribute to change the badge's visual appearance.
 */
export const Appearances: Story = {
  render: () => html`
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="neutral">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="neutral">Filled + Outlined</wa-badge>
      <wa-badge appearance="filled" variant="neutral">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="neutral">Outlined</wa-badge>
    </div>
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="brand">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="brand">Filled + Outlined</wa-badge>
      <wa-badge appearance="filled" variant="brand">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="brand">Outlined</wa-badge>
    </div>
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="success">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="success">Filled + Outlined</wa-badge>
      <wa-badge appearance="filled" variant="success">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="success">Outlined</wa-badge>
    </div>
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="warning">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="warning">Filled + Outlined</wa-badge>
      <wa-badge appearance="filled" variant="warning">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="warning">Outlined</wa-badge>
    </div>
    <div>
      <wa-badge appearance="accent" variant="danger">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="danger">Filled + Outlined</wa-badge>
      <wa-badge appearance="filled" variant="danger">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="danger">Outlined</wa-badge>
    </div>
  `
};

/**
 * Badges are sized relative to the current font size. You can set `font-size` on any badge (or an ancestor element) to change it.
 */
export const Sizes: Story = {
  render: () => html`
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-xs);">Brand</wa-badge>
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-s);">Brand</wa-badge>
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-m);">Brand</wa-badge>
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-l);">Brand</wa-badge>
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-xl);">Brand</wa-badge>
  `
};

/**
 * Use the `pill` attribute to give badges rounded edges.
 */
export const Pill: Story = {
  render: () => html`
    <wa-badge variant="brand" pill>Brand</wa-badge>
    <wa-badge variant="success" pill>Success</wa-badge>
    <wa-badge variant="neutral" pill>Neutral</wa-badge>
    <wa-badge variant="warning" pill>Warning</wa-badge>
    <wa-badge variant="danger" pill>Danger</wa-badge>
  `
};

/**
 * Use the `attention` attribute to draw attention to the badge with a subtle animation. Supported effects are `bounce`, `pulse` and `none`.
 */
export const DrawingAttention: Story = {
  render: () => html`
    <div class="badge-attention">
      <wa-badge variant="brand" attention="pulse" pill>1</wa-badge>
      <wa-badge variant="success" attention="pulse" pill>1</wa-badge>
      <wa-badge variant="neutral" attention="pulse" pill>1</wa-badge>
      <wa-badge variant="warning" attention="pulse" pill>1</wa-badge>
      <wa-badge variant="danger" attention="pulse" pill>1</wa-badge>
    </div>

    <div class="badge-attention">
      <wa-badge variant="brand" attention="bounce" pill>1</wa-badge>
      <wa-badge variant="success" attention="bounce" pill>1</wa-badge>
      <wa-badge variant="neutral" attention="bounce" pill>1</wa-badge>
      <wa-badge variant="warning" attention="bounce" pill>1</wa-badge>
      <wa-badge variant="danger" attention="bounce" pill>1</wa-badge>
    </div>

    <style>
      .badge-attention {
        margin-block-end: var(--wa-space-m);

        wa-badge:not(:last-of-type) {
          margin-right: 1rem;
        }
      }
    </style>
  `
};

/**
 * One of the most common use cases for badges is attaching them to buttons. 
 * To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.
 */
export const WithButtons: Story = {
  render: () => html`
    <wa-button>
      Requests
      <wa-badge pill>30</wa-badge>
    </wa-button>

    <wa-button style="margin-inline-start: 1rem;">
      Warnings
      <wa-badge variant="warning" pill>8</wa-badge>
    </wa-button>

    <wa-button style="margin-inline-start: 1rem;">
      Errors
      <wa-badge variant="danger" pill>6</wa-badge>
    </wa-button>
  `
};
