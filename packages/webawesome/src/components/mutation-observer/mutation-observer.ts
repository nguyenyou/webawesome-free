import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { WaMutationEvent } from '../../events/mutation.js';
import { watch } from '../../internal/watch.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import styles from './mutation-observer.css?inline';

/**
 * @summary The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
 * @documentation https://backers.webawesome.com/docs/components/mutation-observer
 * @status stable
 * @since 2.0
 *
 * @event {{ mutationList: MutationRecord[] }} wa-mutation - Emitted when a mutation occurs.
 *
 * @slot - The content to watch for mutations.
 */
@customElement('wa-mutation-observer')
export default class WaMutationObserver extends WebAwesomeElement {
  static css = styles;

  private mutationObserver: MutationObserver;

  /**
   * Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
   * `attr="class id title"`. To watch all attributes, use `*`.
   */
  @property({ reflect: true }) attr: string;

  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  @property({ attribute: 'attr-old-value', type: Boolean, reflect: true }) attrOldValue = false;

  /** Watches for changes to the character data contained within the node. */
  @property({ attribute: 'char-data', type: Boolean, reflect: true }) charData = false;

  /** Indicates whether or not the previous value of the node's text should be recorded. */
  @property({ attribute: 'char-data-old-value', type: Boolean, reflect: true }) charDataOldValue = false;

  /** Watches for the addition or removal of new child nodes. */
  @property({ attribute: 'child-list', type: Boolean, reflect: true }) childList = false;

  /** Disables the observer. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();

    if (typeof MutationObserver !== 'undefined') {
      this.mutationObserver = new MutationObserver(this.handleMutation);

      if (!this.disabled) {
        this.startObserver();
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }

  private handleMutation = (mutationList: MutationRecord[]) => {
    this.dispatchEvent(new WaMutationEvent({ mutationList }));
  };

  private startObserver() {
    const observeAttributes = typeof this.attr === 'string' && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== '*' ? this.attr.split(' ') : undefined;

    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue,
      });
    } catch {
      //
      // A mutation observer was created without one of the required attributes: attr, char-data, or child-list. The
      // browser will normally throw an error, but we'll suppress that so it doesn't appear as attributes are added
      // and removed.
      //
    }
  }

  private stopObserver() {
    this.mutationObserver.disconnect();
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  @watch('attr', { waitUntilFirstUpdate: true })
  @watch('attr-old-value', { waitUntilFirstUpdate: true })
  @watch('char-data', { waitUntilFirstUpdate: true })
  @watch('char-data-old-value', { waitUntilFirstUpdate: true })
  @watch('childList', { waitUntilFirstUpdate: true })
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-mutation-observer': WaMutationObserver;
  }
}
