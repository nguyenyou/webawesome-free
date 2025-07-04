import { createComponent } from '@lit/react';
import * as React from 'react';
import Component from '../../components/card/card.js';

const tagName = 'wa-card';

/**
 * @summary Cards can be used to group related subjects in a container.
 * @documentation https://backers.webawesome.com/docs/components/card
 * @status stable
 * @since 2.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot media - An optional media section to render at the start of the card.
 *
 * @csspart media - The container that wraps the card's media.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty [--spacing=var(--wa-space-l)] - The amount of space around and between sections of the card. Expects a single value.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'WaCard',
});

export default reactWrapper;
