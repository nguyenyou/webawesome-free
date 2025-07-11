import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { isTemplateResult } from 'lit/directive-helpers.js';
import { WaErrorEvent } from '../../events/error.js';
import { WaLoadEvent } from '../../events/load.js';
import { watch } from '../../internal/watch.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import styles from './icon.css?inline';
import { getDefaultIconFamily, getIconLibrary, unwatchIcon, watchIcon, type IconLibrary } from './library.js';

import type { HTMLTemplateResult, PropertyValues } from 'lit';

const CACHEABLE_ERROR = Symbol();
const RETRYABLE_ERROR = Symbol();
type SVGResult = HTMLTemplateResult | SVGSVGElement | typeof RETRYABLE_ERROR | typeof CACHEABLE_ERROR;

let parser: DOMParser;
const iconCache = new Map<string, Promise<SVGResult>>();

interface IconSource {
  url?: string;
  fromLibrary: boolean;
}

/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://backers.webawesome.com/docs/components/icon
 * @status stable
 * @since 2.0
 *
 * @event wa-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
 * @event wa-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
 *
 * @csspart svg - The internal SVG element.
 * @csspart use - The `<use>` element generated when using `spriteSheet: true`
 *
 * @cssproperty [--primary-color=currentColor] - Sets a duotone icon's primary color.
 * @cssproperty [--primary-opacity=1] - Sets a duotone icon's primary opacity.
 * @cssproperty [--secondary-color=currentColor] - Sets a duotone icon's secondary color.
 * @cssproperty [--secondary-opacity=0.4] - Sets a duotone icon's secondary opacity.
 */
@customElement('wa-icon')
export default class WaIcon extends WebAwesomeElement {
  static css = styles;

  @state() private svg: SVGElement | HTMLTemplateResult | null = null;

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  @property() name?: string;

  /**
   * The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
   * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
   * A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
   * one.
   */
  @property() family: string;

  /**
   * The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
   * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
   * may or may not use this property.
   */
  @property() variant: string;

  /** Draws the icon in a fixed-width both. */
  @property({ attribute: 'fixed-width', type: Boolean, reflect: true }) fixedWidth: false;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   */
  @property() src?: string;

  /**
   * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
   * ignored by assistive devices.
   */
  @property() label = '';

  /** The name of a registered custom icon library. */
  @property() library = 'default';

  connectedCallback() {
    super.connectedCallback();

    watchIcon(this);
  }

  firstUpdated(changedProperties: PropertyValues<this>) {
    super.firstUpdated(changedProperties);
    this.setIcon();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }

  private getIconSource(): IconSource {
    const library = getIconLibrary(this.library);
    const family = this.family || getDefaultIconFamily();

    if (this.name && library) {
      return {
        url: library.resolver(this.name, family, this.variant),
        fromLibrary: true,
      };
    }

    return {
      url: this.src,
      fromLibrary: false,
    };
  }

  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  private async resolveIcon(url: string, library?: IconLibrary): Promise<SVGResult> {
    let fileData: Response;

    if (library?.spriteSheet) {
      // So this looks weird, but because of how SSR works, we need to first wait for the first update to complete.
      // After the first update, *then* we can set `this.svg` so we can then query + mutate the element.
      if (!this.hasUpdated) {
        await this.updateComplete;
      }

      this.svg = html`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;

      // Using a templateResult requires the SVG to be written to the DOM first before we can grab the SVGElement
      // to be passed to the library's mutator function.
      await this.updateComplete;

      const svg = this.shadowRoot!.querySelector("[part='svg']")!;

      if (typeof library.mutator === 'function') {
        library.mutator(svg as SVGElement);
      }

      return this.svg;
    }

    try {
      fileData = await fetch(url, { mode: 'cors' });
      if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch {
      return RETRYABLE_ERROR;
    }

    try {
      const div = document.createElement('div');
      div.innerHTML = await fileData.text();

      const svg = div.firstElementChild;
      if (svg?.tagName?.toLowerCase() !== 'svg') return CACHEABLE_ERROR;

      if (!parser) parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, 'text/html');

      const svgEl = doc.body.querySelector('svg');
      if (!svgEl) return CACHEABLE_ERROR;

      svgEl.part.add('svg');
      return document.adoptNode(svgEl);
    } catch {
      return CACHEABLE_ERROR;
    }
  }

  @watch('label')
  handleLabelChange() {
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;

    if (hasLabel) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
      this.removeAttribute('aria-hidden');
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
      this.setAttribute('aria-hidden', 'true');
    }
  }

  @watch(['family', 'name', 'library', 'variant', 'src'])
  async setIcon() {
    const { url, fromLibrary } = this.getIconSource();
    const library = fromLibrary ? getIconLibrary(this.library) : undefined;

    if (!url) {
      this.svg = null;
      return;
    }

    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library);
      iconCache.set(url, iconResolver);
    }

    const svg = await iconResolver;

    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }

    if (url !== this.getIconSource().url) {
      // If the url has changed while fetching the icon, ignore this request
      return;
    }

    if (isTemplateResult(svg)) {
      this.svg = svg;
      return;
    }

    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.dispatchEvent(new WaErrorEvent());
        break;
      default:
        this.svg = svg.cloneNode(true) as SVGElement;
        library?.mutator?.(this.svg);
        this.dispatchEvent(new WaLoadEvent());
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    // Sometimes (like with SSR -> hydration) mutators don't get applied due to race conditions. This ensures mutators get re-applied.
    const library = getIconLibrary(this.library);

    const svg = this.shadowRoot?.querySelector('svg');
    if (svg) {
      library?.mutator?.(svg);
    }
  }

  render() {
    if (this.hasUpdated) {
      return this.svg;
    }

    return html`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-icon': WaIcon;
  }
}
