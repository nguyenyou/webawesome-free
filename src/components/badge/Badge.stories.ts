import "./badge.js";
import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { ifDefined } from "lit/directives/if-defined.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

type BadgeProps = {
  variant: "brand" | "neutral" | "success" | "warning" | "danger";
  appearance: "accent" | "filled" | "outlined";
  attention: "pulse" | "bounce" | "none";
  pill: boolean;
};

const meta: Meta<BadgeProps> = {
  component: "wa-badge",
  title: "Example/Badge",
  argTypes: {
    variant: {
      control: "radio",
      options: ["brand", "neutral", "success", "warning", "danger"],
      defaultValue: "brand",
    },
    appearance: {
      control: "radio",
      options: ["accent", "filled", "outlined"],
      defaultValue: "accent",
    },
    attention: {
      control: "radio",
      options: ["pulse", "bounce", "none"],
      defaultValue: "none",
    },
    pill: { control: "boolean", defaultValue: false },
  },
  render: (args) => {
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
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<BadgeProps>;

export const Primary: Story = {
  args: {
    variant: "brand",
    appearance: "accent",
    attention: "none",
    pill: false,
  },
};

export const Default = {};

export const Variants = () => {
  return html`
    <wa-badge variant="brand" appearance="accent" attention="none"
      >Badge</wa-badge
    >
    <wa-badge variant="neutral" appearance="accent" attention="none"
      >Badge</wa-badge
    >
    <wa-badge variant="success" appearance="accent" attention="none"
      >Badge</wa-badge
    >
    <wa-badge variant="warning" appearance="accent" attention="none"
      >Badge</wa-badge
    >
    <wa-badge variant="danger" appearance="accent" attention="none"
      >Badge</wa-badge
    >
  `;
};

export const Appearances = () => {
  return html`
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="neutral">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="neutral"
        >Filled + Outlined</wa-badge
      >
      <wa-badge appearance="filled" variant="neutral">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="neutral">Outlined</wa-badge>
    </div>
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="brand">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="brand"
        >Filled + Outlined</wa-badge
      >
      <wa-badge appearance="filled" variant="brand">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="brand">Outlined</wa-badge>
    </div>
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="success">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="success"
        >Filled + Outlined</wa-badge
      >
      <wa-badge appearance="filled" variant="success">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="success">Outlined</wa-badge>
    </div>
    <div style="margin-block-end: 1rem;">
      <wa-badge appearance="accent" variant="warning">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="warning"
        >Filled + Outlined</wa-badge
      >
      <wa-badge appearance="filled" variant="warning">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="warning">Outlined</wa-badge>
    </div>
    <div>
      <wa-badge appearance="accent" variant="danger">Accent</wa-badge>
      <wa-badge appearance="filled outlined" variant="danger"
        >Filled + Outlined</wa-badge
      >
      <wa-badge appearance="filled" variant="danger">Filled</wa-badge>
      <wa-badge appearance="outlined" variant="danger">Outlined</wa-badge>
    </div>
  `;
};

export const Sizes = () => {
  return html`
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-xs);"
      >Brand</wa-badge
    >
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-s);"
      >Brand</wa-badge
    >
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-m);"
      >Brand</wa-badge
    >
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-l);"
      >Brand</wa-badge
    >
    <wa-badge variant="brand" style="font-size: var(--wa-font-size-xl);"
      >Brand</wa-badge
    >
  `;
};

export const Pill = () => {
  return html`
    <wa-badge variant="brand" pill>Brand</wa-badge>
    <wa-badge variant="success" pill>Success</wa-badge>
    <wa-badge variant="neutral" pill>Neutral</wa-badge>
    <wa-badge variant="warning" pill>Warning</wa-badge>
    <wa-badge variant="danger" pill>Danger</wa-badge>
  `;
};

export const DrawingAttention = () => {
  return html`
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
  `;
};
