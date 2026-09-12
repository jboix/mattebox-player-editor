/**
 * `<mbe-preview>`: the player as the page would have it, in a shadow root
 * of its own. The stylesheet document goes in a `<style>` there and the
 * markup document beside it, so the theme reaches the player the way page
 * CSS does (tags, `::part()`, the inherited tokens) and nothing of it
 * reaches the editor around it.
 */
import '@mattebox/player';
import '@mattebox/player-diagnostics';
import { parseMarkup } from '../markup.js';
import { isRatio, type Ratio } from '../ui-state.js';

export interface PlayerSizeDetail {
  readonly width: number;
  readonly height: number;
}

/* The preview's own rules sit in a layer, so any rule of the theme beats
   them whatever its specificity: a layered declaration loses to an
   unlayered one. */
const STYLE = `
@layer preview {
  :host { display: flex; overflow: auto; }
  [part~="stage"] {
    flex: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    container-type: size;
  }
  /* The player fills the pane, and the picture is centred and letterboxed
     in it by the player (its guide, chapter 03): what a page gets when it
     gives the element a height. Container units measure the stage. */
  mattebox-player { display: block; width: 100%; height: 100%; }
  /* A fixed ratio: the box takes it, as large as the pane allows, and the
     player letterboxes or pillarboxes the picture inside it the same way. */
  :host([ratio]) mattebox-player {
    height: auto;
    aspect-ratio: var(--mbe-ratio);
    width: min(100%, calc(100cqh * var(--mbe-ratio)));
  }
}
`;

export class MbePreview extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['ratio'];
  }

  static define(): void {
    if (customElements.get('mbe-preview') === undefined) {
      customElements.define('mbe-preview', MbePreview);
    }
  }

  private readonly theme: HTMLStyleElement;
  private readonly stage: HTMLDivElement;
  private cues: MutationObserver | null = null;
  /** Watches the player's box, so the page can say how big it is. */
  private readonly size: ResizeObserver | null =
    typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(() => this.measure());

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    const own = document.createElement('style');
    own.textContent = STYLE;
    this.theme = document.createElement('style');
    this.theme.setAttribute('data-theme', '');
    this.stage = document.createElement('div');
    this.stage.setAttribute('part', 'stage');
    root.append(own, this.theme, this.stage);
  }

  connectedCallback(): void {
    this.watchCues();
  }

  disconnectedCallback(): void {
    this.cues?.disconnect();
    this.cues = null;
  }

  attributeChangedCallback(): void {
    const ratio = this.ratio;
    if (ratio === 'fill') this.style.removeProperty('--mbe-ratio');
    else this.style.setProperty('--mbe-ratio', ratio.replace(':', ' / '));
  }

  /** The shape the player is held to: `fill` for the whole pane, else a fixed ratio. */
  get ratio(): Ratio {
    const value = this.getAttribute('ratio');
    return isRatio(value) ? value : 'fill';
  }

  set ratio(value: Ratio) {
    if (value === 'fill') this.removeAttribute('ratio');
    else this.setAttribute('ratio', value);
  }

  /** The player the markup made, or null while the markup has none. */
  get player(): HTMLElement | null {
    return this.stage.querySelector('mattebox-player');
  }

  /** The theme's text, applied as it is. The player is left alone: a style change never restarts playback. */
  set css(text: string) {
    if (this.theme.textContent !== text) this.theme.textContent = text;
  }

  get css(): string {
    return this.theme.textContent ?? '';
  }

  /** The markup as the stage's children. The old player goes with the old markup, so playback starts over. */
  set html(text: string) {
    this.stage.replaceChildren(parseMarkup(text));
    this.size?.disconnect();
    const player = this.player;
    if (player !== null) this.size?.observe(player);
    this.measure();
  }

  /** Says how big the player's box is, as a `player-size` event; zero by zero when there is none. */
  private measure(): void {
    const player = this.player;
    const detail: PlayerSizeDetail =
      player === null
        ? { width: 0, height: 0 }
        : { width: Math.round(player.offsetWidth), height: Math.round(player.offsetHeight) };
    this.dispatchEvent(new CustomEvent<PlayerSizeDetail>('player-size', { detail }));
  }

  /**
   * The subtitles menu's sizes and backgrounds are one sheet the bar puts in
   * `document.head`, because `::cue` can only be styled from the tree that
   * holds the video. The preview's video is in a shadow tree, which that
   * sheet does not reach, so a copy goes in here once the bar has written
   * it. What was wanted: a cue sheet the player scopes to its own tree.
   * What the player offers: a document-level sheet, and a page that wants
   * more writes its own `mattebox-player > video::cue` rule.
   */
  private watchCues(): void {
    const copy = (): boolean => {
      const sheet = document.head.querySelector('style[data-mattebox-cue]');
      if (sheet === null) return false;
      if (this.shadowRoot?.querySelector('style[data-mattebox-cue]') === null) {
        this.shadowRoot.insertBefore(sheet.cloneNode(true), this.theme);
      }
      return true;
    };
    if (copy()) return;
    this.cues = new MutationObserver(() => {
      if (copy()) this.disconnectedCallback();
    });
    this.cues.observe(document.head, { childList: true });
  }
}
