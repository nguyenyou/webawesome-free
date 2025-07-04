import { createComponent } from '@lit/react';
import * as React from 'react';
import Component from '../../components/breadcrumb-item/breadcrumb-item.js';

const tagName = 'wa-breadcrumb-item';

/**
 * @summary Breadcrumb Items are used inside breadcrumbs to represent different links.
 * @documentation https://backers.webawesome.com/docs/components/breadcrumb-item
 * @status stable
 * @since 2.0
 *
 * @slot - The breadcrumb item's label.
 * @slot start - An element, such as `<wa-icon>`, placed before the label.
 * @slot end - An element, such as `<wa-icon>`, placed after the label.
 * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If
 * you want to change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.
 *
 * @csspart label - The breadcrumb item's label.
 * @csspart start - The container that wraps the `start` slot.
 * @csspart end - The container that wraps the `end` slot.
 * @csspart separator - The container that wraps the separator.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {},
  displayName: 'WaBreadcrumbItem',
});

export default reactWrapper;
