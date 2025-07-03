import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { buttonManifest, getOptions } from '../../.storybook/manifest.js';
import '../../packages/webawesome/src/components/button/button.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  component: 'wa-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: getOptions('variant', buttonManifest),
    },
    appearance: {
      control: 'radio',
      options: getOptions('appearance', buttonManifest),
    },
    size: {
      control: 'radio',
      options: getOptions('size', buttonManifest),
    },
    pill: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: getOptions('target', buttonManifest),
    },
    download: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  render: ({ variant, appearance, size, pill, href, target, download, children = 'Button' }) => html`
    <wa-button
      variant="${ifDefined(variant)}"
      appearance="${ifDefined(appearance)}"
      size="${ifDefined(size)}"
      ?pill="${pill}"
      href="${ifDefined(href)}"
      target="${ifDefined(target)}"
      download="${ifDefined(download)}"
      >${children}</wa-button
    >
  `,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};

/**
 * Use the `variant` attribute to set the button's semantic variant.
 */
export const Variants: Story = {
  render: () => html`
    <wa-button variant="brand">Brand</wa-button>
    <wa-button variant="neutral">Neutral</wa-button>
    <wa-button variant="success">Success</wa-button>
    <wa-button variant="warning">Warning</wa-button>
    <wa-button variant="danger">Danger</wa-button>
  `,
};

/**
 * Use the `appearance` attribute to change the button's visual appearance.
 */
export const Appearance: Story = {
  render: () => html`
    <div class="wa-stack">
      <div class="wa-gap-2xs">
        <wa-button appearance="accent" variant="neutral">Accent</wa-button>
        <wa-button appearance="filled outlined" variant="neutral">Filled + Outlined</wa-button>
        <wa-button appearance="filled" variant="neutral">Filled</wa-button>
        <wa-button appearance="outlined" variant="neutral">Outlined</wa-button>
        <wa-button appearance="plain" variant="neutral">Plain</wa-button>
      </div>
      <div class="wa-gap-2xs">
        <wa-button appearance="accent" variant="brand">Accent</wa-button>
        <wa-button appearance="filled outlined" variant="brand">Filled + Outlined</wa-button>
        <wa-button appearance="filled" variant="brand">Filled</wa-button>
        <wa-button appearance="outlined" variant="brand">Outlined</wa-button>
        <wa-button appearance="plain" variant="brand">Plain</wa-button>
      </div>
      <div class="wa-gap-2xs">
        <wa-button appearance="accent" variant="success">Accent</wa-button>
        <wa-button appearance="filled outlined" variant="success">Filled + Outlined</wa-button>
        <wa-button appearance="filled" variant="success">Filled</wa-button>
        <wa-button appearance="outlined" variant="success">Outlined</wa-button>
        <wa-button appearance="plain" variant="success">Plain</wa-button>
      </div>
      <div class="wa-gap-2xs">
        <wa-button appearance="accent" variant="warning">Accent</wa-button>
        <wa-button appearance="filled outlined" variant="warning">Filled + Outlined</wa-button>
        <wa-button appearance="filled" variant="warning">Filled</wa-button>
        <wa-button appearance="outlined" variant="warning">Outlined</wa-button>
        <wa-button appearance="plain" variant="warning">Plain</wa-button>
      </div>
      <div class="wa-gap-2xs">
        <wa-button appearance="accent" variant="danger">Accent</wa-button>
        <wa-button appearance="filled outlined" variant="danger">Filled + Outlined</wa-button>
        <wa-button appearance="filled" variant="danger">Filled</wa-button>
        <wa-button appearance="outlined" variant="danger">Outlined</wa-button>
        <wa-button appearance="plain" variant="danger">Plain</wa-button>
      </div>
    </div>
  `,
};

/**
 * Use the `size` attribute to change a button's size.
 */
export const Sizes: Story = {
  render: () => html`
    <wa-button size="small">Small</wa-button>
    <wa-button size="medium">Medium</wa-button>
    <wa-button size="large">Large</wa-button>
  `,
};

/**
 * Use the `pill` attribute to give buttons rounded edges.
 */
export const PillButtons: Story = {
  render: () => html`
    <wa-button size="small" pill>Small</wa-button>
    <wa-button size="medium" pill>Medium</wa-button>
    <wa-button size="large" pill>Large</wa-button>
  `,
};

/**
 * It's often helpful to have a button that works like a link.
 * This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood.
 * This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `rel`, `target`, and `download` attributes.
 */
export const LinkButtons: Story = {
  render: () => html`
    <wa-button href="https://example.com/">Link</wa-button>
    <wa-button href="https://example.com/" target="_blank">New Window</wa-button>
    <wa-button href="/assets/images/logo.svg" download="shoelace.svg">Download</wa-button>
  `,
};

/**
 * When only an [icon](/docs/components/icon) is slotted into the `label` slot, the button becomes an icon button. In this case, it's important to give the icon a label for users with assistive devices. Icon buttons can use any appearance or variant.
 */
export const IconButtons: Story = {
  render: () => html`
    <div class="wa-cluster">
      <wa-button variant="neutral" appearance="accent"><wa-icon name="house" label="Home"></wa-icon></wa-button>
      <wa-button variant="neutral" appearance="outlined"><wa-icon name="house" label="Home"></wa-icon></wa-button>
      <wa-button variant="neutral" appearance="filled"><wa-icon name="house" label="Home"></wa-icon></wa-button>
      <wa-button variant="neutral" appearance="plain"><wa-icon name="house" label="Home"></wa-icon></wa-button>
    </div>
  `,
};

/**
 * As expected, buttons can be given a custom width by setting the `width` CSS property.
 * This is useful for making buttons span the full width of their container on smaller screens.
 */
export const SettingACustomWidth: Story = {
  render: () => html`
    <wa-button size="small" style="width: 100%; margin-bottom: 1rem;">Small</wa-button>
    <wa-button size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</wa-button>
    <wa-button size="large" style="width: 100%;">Large</wa-button>
  `,
};

/**
 * Use the `start` and `end` slots to add presentational elements like `<wa-icon>` next to the button label.
 */
export const StartEndDecorations: Story = {
  render: () => html`
    <wa-button size="small">
      <wa-icon slot="start" name="gear"></wa-icon>
      Settings
    </wa-button>

    <wa-button size="small">
      <wa-icon slot="end" name="undo"></wa-icon>
      Refresh
    </wa-button>

    <wa-button size="small">
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      Open
    </wa-button>

    <br /><br />

    <wa-button>
      <wa-icon slot="start" name="gear"></wa-icon>
      Settings
    </wa-button>

    <wa-button>
      <wa-icon slot="end" name="undo"></wa-icon>
      Refresh
    </wa-button>

    <wa-button>
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      Open
    </wa-button>

    <br /><br />

    <wa-button size="large">
      <wa-icon slot="start" name="gear"></wa-icon>
      Settings
    </wa-button>

    <wa-button size="large">
      <wa-icon slot="end" name="undo"></wa-icon>
      Refresh
    </wa-button>

    <wa-button size="large">
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      Open
    </wa-button>
  `,
};

/**
 * Use the `with-caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.
 */
export const Caret: Story = {
  render: () => html`
    <wa-button size="small" with-caret>Small</wa-button>
    <wa-button size="medium" with-caret>Medium</wa-button>
    <wa-button size="large" with-caret>Large</wa-button>
  `,
};

/**
 * Use the `loading` attribute to make a button busy.
 * The width will remain the same as before, preventing adjacent elements from moving around.
 */
export const Loading: Story = {
  render: () => html`
    <wa-button variant="brand" loading>Brand</wa-button>
    <wa-button variant="success" loading>Success</wa-button>
    <wa-button variant="neutral" loading>Neutral</wa-button>
    <wa-button variant="warning" loading>Warning</wa-button>
    <wa-button variant="danger" loading>Danger</wa-button>
  `,
};

/**
 * Use the `disabled` attribute to disable a button.
 */
export const Disabled: Story = {
  render: () => html`
    <wa-button variant="brand" disabled>Brand</wa-button>
    <wa-button variant="success" disabled>Success</wa-button>
    <wa-button variant="neutral" disabled>Neutral</wa-button>
    <wa-button variant="warning" disabled>Warning</wa-button>
    <wa-button variant="danger" disabled>Danger</wa-button>
  `,
};

/**
 * This example demonstrates how to style buttons using a custom class.
 * This is the recommended approach if you need to add additional variations.
 * To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `wa-button[variant="brand"]`).
 */
export const StylingButtons: Story = {
  render: () => html`
    <wa-button class="pink">Pink Button</wa-button>

    <style>
      wa-button.pink::part(base) {
        border-radius: 6px;
        border: solid 2px;
        background: #ff1493;
        border-top-color: #ff7ac1;
        border-left-color: #ff7ac1;
        border-bottom-color: #ad005c;
        border-right-color: #ad005c;
        color: white;
        font-size: 1.125rem;
        box-shadow: 0 2px 10px #0002;
        transition: all var(--wa-transition-slow) var(--wa-transition-easing);
      }

      wa-button.pink::part(base):hover {
        transform: scale(1.05);
      }

      wa-button.pink::part(base):active {
        border-top-color: #ad005c;
        border-right-color: #ff7ac1;
        border-bottom-color: #ff7ac1;
        border-left-color: #ad005c;
        transform: translateY(1px);
      }

      wa-button.pink::part(base):focus-visible {
        outline: dashed 2px deeppink;
        outline-offset: 4px;
      }
    </style>
  `,
};
