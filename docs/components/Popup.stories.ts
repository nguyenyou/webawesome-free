import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import { getManifest, getOptions } from '../../.storybook/manifest.js';

const popupManifest = getManifest('Popup');

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * Checkboxes allow the user to toggle an option on or off.
 *
 * This component works with standard `<form>` elements. Please refer to the section on [form controls](/docs/form-controls) to learn more about form submission and client-side validation.
 */
const meta: Meta = {
  component: 'wa-popup',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="popup-overview">
      <wa-popup placement="top" active>
        <span slot="anchor"></span>
        <div class="box"></div>
      </wa-popup>

      <div class="popup-overview-options">
        <wa-select label="Placement" name="placement" value="top" class="popup-overview-select">
          <wa-option value="top">top</wa-option>
          <wa-option value="top-start">top-start</wa-option>
          <wa-option value="top-end">top-end</wa-option>
          <wa-option value="bottom">bottom</wa-option>
          <wa-option value="bottom-start">bottom-start</wa-option>
          <wa-option value="bottom-end">bottom-end</wa-option>
          <wa-option value="right">right</wa-option>
          <wa-option value="right-start">right-start</wa-option>
          <wa-option value="right-end">right-end</wa-option>
          <wa-option value="left">left</wa-option>
          <wa-option value="left-start">left-start</wa-option>
          <wa-option value="left-end">left-end</wa-option>
        </wa-select>
        <wa-input type="number" name="distance" label="distance" value="0"></wa-input>
        <wa-input type="number" name="skidding" label="Skidding" value="0"></wa-input>
      </div>

      <div class="popup-overview-options">
        <wa-switch name="active" checked>Active</wa-switch>
        <wa-switch name="arrow">Arrow</wa-switch>
      </div>
    </div>

    <script>
      const container = document.querySelector('.popup-overview');
      const popup = container.querySelector('wa-popup');
      const select = container.querySelector('wa-select[name="placement"]');
      const distance = container.querySelector('wa-input[name="distance"]');
      const skidding = container.querySelector('wa-input[name="skidding"]');
      const active = container.querySelector('wa-switch[name="active"]');
      const arrow = container.querySelector('wa-switch[name="arrow"]');

      select.addEventListener('change', () => (popup.placement = select.value));
      distance.addEventListener('input', () => (popup.distance = distance.value));
      skidding.addEventListener('input', () => (popup.skidding = skidding.value));
      active.addEventListener('change', () => (popup.active = active.checked));
      arrow.addEventListener('change', () => (popup.arrow = arrow.checked));
    </script>

    <style>
      .popup-overview wa-popup {
        --arrow-color: var(--wa-color-brand-fill-loud);
      }

      .popup-overview span[slot='anchor'] {
        display: inline-block;
        width: 150px;
        height: 150px;
        border: dashed 2px var(--wa-color-neutral-fill-loud);
        margin: 50px;
      }

      .popup-overview .box {
        width: 100px;
        height: 50px;
        background: var(--wa-color-brand-fill-loud);
        border-radius: var(--wa-border-radius-m);
      }

      .popup-overview-options {
        display: flex;
        flex-wrap: wrap;
        align-items: end;
        gap: 1rem;
      }

      .popup-overview-options wa-select {
        width: 160px;
      }

      .popup-overview-options wa-input {
        width: 100px;
      }

      .popup-overview-options + .popup-overview-options {
        margin-top: 1rem;
      }
    </style>
  `,
};
