import { createComponent } from '@lit/react';
import * as React from 'react';
import Component from '../../components/radio/radio.js';

const tagName = 'wa-radio';

/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://backers.webawesome.com/docs/components/radio
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon
 *
 * @slot - The radio's label.
 *
 * @event blur - Emitted when the control loses focus.
 * @event focus - Emitted when the control gains focus.
 *
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart checked-icon - The checked icon.
 * @csspart label - The container that wraps the radio's label.
 *
 * @cssproperty --checked-icon-color - The color of the checked icon.
 * @cssproperty --checked-icon-scale - The size of the checked icon relative to the radio.
 *
 * @cssstate checked - Applied when the control is checked.
 * @cssstate disabled - Applied when the control is disabled.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'WaRadio',
});

export default reactWrapper;
