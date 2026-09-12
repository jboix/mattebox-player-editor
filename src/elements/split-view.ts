/**
 * `<mbe-split-view>`: two panes and a bar between them. The `dock`
 * attribute says which edge the secondary pane sits on and `split` how much
 * of the box it takes in percent. Both panes and the bar are always shown.
 * The DOM order never changes: the dock is a flex direction, so the page keeps
 * one markup for the four positions.
 */
import { clampSplit, DEFAULT_UI_STATE, type Dock, isDock } from '../ui-state.js';

const STYLE = `
:host {
  display: flex;
  flex-direction: row;
  min-width: 0;
  min-height: 0;
  --mbe-split: 50%;
  --mbe-bar: 10px;
}
:host([dock="left"]) { flex-direction: row-reverse; }
:host([dock="bottom"]) { flex-direction: column; }
:host([dock="top"]) { flex-direction: column-reverse; }
::slotted([slot="primary"]) { flex: 1 1 0; min-width: 0; min-height: 0; }
::slotted([slot="secondary"]) { flex: 0 0 var(--mbe-split); min-width: 0; min-height: 0; }
/* The bar is a visible strip with a grip in the middle, so it reads as a
   handle and not a border. The hit area is wider than the strip. */
[part~="bar"] {
  flex: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mbe-bar-track, rgba(128, 128, 128, 0.18));
  border-radius: 3px;
  cursor: col-resize;
  touch-action: none;
  outline: none;
  transition: background 0.15s;
}
[part~="bar"]::before { content: ""; position: absolute; inset: 0 -4px; }
[part~="grip"] {
  width: 3px;
  height: 36px;
  border-radius: 2px;
  background: var(--mbe-bar-color, currentColor);
  opacity: 0.45;
  pointer-events: none;
  transition: opacity 0.15s;
}
[part~="bar"]:hover, [part~="bar"]:focus-visible, :host([dragging]) [part~="bar"] {
  background: var(--mbe-bar-hover, rgba(128, 128, 128, 0.35));
}
[part~="bar"]:hover [part~="grip"], [part~="bar"]:focus-visible [part~="grip"], :host([dragging]) [part~="grip"] {
  opacity: 1;
}
:host(:not([dock="bottom"]):not([dock="top"])) [part~="bar"] { width: var(--mbe-bar); }
:host([dock="bottom"]) [part~="bar"], :host([dock="top"]) [part~="bar"] {
  height: var(--mbe-bar);
  cursor: row-resize;
}
:host([dock="bottom"]) [part~="bar"]::before, :host([dock="top"]) [part~="bar"]::before { inset: -4px 0; }
:host([dock="bottom"]) [part~="grip"], :host([dock="top"]) [part~="grip"] { width: 36px; height: 3px; }
:host([dragging]) { user-select: none; }
`;

/** Arrow keys move the bar by this many percent. */
const KEY_STEP = 5;

export class MbeSplitView extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['dock', 'split'];
  }

  static define(): void {
    if (customElements.get('mbe-split-view') === undefined) {
      customElements.define('mbe-split-view', MbeSplitView);
    }
  }

  private readonly bar: HTMLDivElement;

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = STYLE;
    const primary = document.createElement('slot');
    primary.name = 'primary';
    const secondary = document.createElement('slot');
    secondary.name = 'secondary';
    this.bar = document.createElement('div');
    this.bar.setAttribute('part', 'bar');
    this.bar.setAttribute('role', 'separator');
    this.bar.setAttribute('aria-label', 'Resize the preview');
    this.bar.title = 'Drag to resize the preview. Double-click for half and half.';
    this.bar.tabIndex = 0;
    const grip = document.createElement('div');
    grip.setAttribute('part', 'grip');
    this.bar.append(grip);
    root.append(style, primary, this.bar, secondary);
    this.bar.addEventListener('pointerdown', this.onPointerDown);
    this.bar.addEventListener('keydown', this.onKeyDown);
    this.bar.addEventListener('dblclick', () => this.moveTo(DEFAULT_UI_STATE.split));
  }

  connectedCallback(): void {
    if (!this.hasAttribute('dock')) this.setAttribute('dock', 'right');
    this.paint();
  }

  attributeChangedCallback(): void {
    this.paint();
  }

  get dock(): Dock {
    const value = this.getAttribute('dock');
    return isDock(value) ? value : 'right';
  }

  set dock(value: Dock) {
    this.setAttribute('dock', value);
  }

  /** The secondary pane's share of the box, in percent, clamped. */
  get split(): number {
    const raw = this.getAttribute('split');
    return raw === null ? DEFAULT_UI_STATE.split : clampSplit(Number(raw));
  }

  set split(value: number) {
    this.setAttribute('split', String(clampSplit(value)));
  }

  private get vertical(): boolean {
    const dock = this.dock;
    return dock === 'bottom' || dock === 'top';
  }

  /** The secondary pane starts at the box's origin when the dock is reversed. */
  private get reversed(): boolean {
    const dock = this.dock;
    return dock === 'left' || dock === 'top';
  }

  private paint(): void {
    this.style.setProperty('--mbe-split', `${this.split}%`);
    this.bar.setAttribute('aria-orientation', this.vertical ? 'horizontal' : 'vertical');
    this.bar.setAttribute('aria-valuenow', String(this.split));
  }

  /** The share the pointer at (x, y) asks for. */
  private splitAt(x: number, y: number): number {
    const rect = this.getBoundingClientRect();
    const fraction = this.vertical
      ? (y - rect.top) / Math.max(rect.height, 1)
      : (x - rect.left) / Math.max(rect.width, 1);
    return (this.reversed ? fraction : 1 - fraction) * 100;
  }

  private moveTo(split: number): void {
    const next = clampSplit(split);
    if (next === this.split) return;
    this.split = next;
    this.dispatchEvent(new CustomEvent('split-change', { detail: { split: next } }));
  }

  private readonly onPointerDown = (event: PointerEvent): void => {
    if (event.button !== 0) return;
    event.preventDefault();
    this.bar.setPointerCapture(event.pointerId);
    this.toggleAttribute('dragging', true);
    const move = (moving: PointerEvent): void => {
      this.moveTo(this.splitAt(moving.clientX, moving.clientY));
    };
    const stop = (): void => {
      this.bar.removeEventListener('pointermove', move);
      this.bar.removeEventListener('pointerup', stop);
      this.bar.removeEventListener('pointercancel', stop);
      this.removeAttribute('dragging');
    };
    this.bar.addEventListener('pointermove', move);
    this.bar.addEventListener('pointerup', stop);
    this.bar.addEventListener('pointercancel', stop);
  };

  private readonly onKeyDown = (event: KeyboardEvent): void => {
    const grow = this.vertical ? 'ArrowUp' : 'ArrowLeft';
    const shrink = this.vertical ? 'ArrowDown' : 'ArrowRight';
    const direction = this.reversed ? -1 : 1;
    if (event.key === grow) this.moveTo(this.split + KEY_STEP * direction);
    else if (event.key === shrink) this.moveTo(this.split - KEY_STEP * direction);
    else return;
    event.preventDefault();
  };
}
