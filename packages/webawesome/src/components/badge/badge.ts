import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import variantStyles from '../../styles/utilities/variants.css?inline';
import styles from './badge.css?inline';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 * @documentation https://backers.webawesome.com/docs/components/badge
 * @status stable
 * @since 2.0
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's base wrapper.
 *
 */
@customElement('wa-badge')
export default class WaBadge extends WebAwesomeElement {
  static css = [variantStyles, styles];

  /** The badge's theme variant. Defaults to `brand` if not within another element with a variant. */
  @property({ reflect: true }) variant: 'brand' | 'neutral' | 'success' | 'warning' | 'danger' = 'brand';

  /** The badge's visual appearance. */
  @property({ reflect: true }) appearance: 'accent' | 'filled' | 'outlined' = 'accent';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ reflect: true }) attention: 'none' | 'pulse' = 'none';

  render() {
    return html` <slot part="base" role="status"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-badge': WaBadge;
  }
}
