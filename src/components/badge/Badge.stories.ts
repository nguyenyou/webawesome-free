import "./badge.js";
import { html } from "lit";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Example/Badge",
};

export default meta;

export const Default = () => {
  return html`
    <wa-badge variant="brand" appearance="accent" attention="none"
      >Badge</wa-badge
    >
  `;
};

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
