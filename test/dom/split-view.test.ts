import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MbeSplitView } from '../../src/elements/split-view.js';

MbeSplitView.define();

let view: MbeSplitView;
let bar: HTMLElement;

/** The box the view measures itself by: 800 by 400, at the origin. */
function box(): void {
  view.getBoundingClientRect = () =>
    ({ left: 0, top: 0, width: 800, height: 400, right: 800, bottom: 400, x: 0, y: 0 }) as DOMRect;
}

/** A drag, as the pointer events the bar sees. */
function drag(x: number, y: number): void {
  bar.dispatchEvent(new PointerEvent('pointerdown', { button: 0, pointerId: 1, bubbles: true }));
  bar.dispatchEvent(
    new PointerEvent('pointermove', { clientX: x, clientY: y, pointerId: 1, bubbles: true }),
  );
  bar.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1, bubbles: true }));
}

beforeEach(() => {
  // jsdom has no pointer capture.
  Element.prototype.setPointerCapture ??= () => {};
  Element.prototype.releasePointerCapture ??= () => {};
  view = document.createElement('mbe-split-view') as MbeSplitView;
  view.innerHTML = '<div slot="primary"></div><div slot="secondary"></div>';
  document.body.append(view);
  bar = view.shadowRoot?.querySelector('[part~="bar"]') as HTMLElement;
  box();
});

afterEach(() => {
  view.remove();
});

describe('<mbe-split-view>', () => {
  it('docks right by default, at half, with the bar a vertical separator', () => {
    expect(view.dock).toBe('right');
    expect(view.split).toBe(50);
    expect(view.style.getPropertyValue('--mbe-split')).toBe('50%');
    expect(bar.getAttribute('role')).toBe('separator');
    expect(bar.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('turns with the dock, and says so to the bar', () => {
    view.dock = 'bottom';
    expect(view.getAttribute('dock')).toBe('bottom');
    expect(bar.getAttribute('aria-orientation')).toBe('horizontal');
    view.setAttribute('dock', 'left');
    expect(view.dock).toBe('left');
    expect(bar.getAttribute('aria-orientation')).toBe('vertical');
    view.setAttribute('dock', 'sideways');
    expect(view.dock).toBe('right');
  });

  it('sizes the secondary pane from where the pointer goes, on each dock', () => {
    const listener = vi.fn();
    view.addEventListener('split-change', listener);
    // Docked right: the secondary pane is what is right of the pointer.
    drag(600, 0);
    expect(view.split).toBe(25);
    expect(view.style.getPropertyValue('--mbe-split')).toBe('25%');
    expect(listener).toHaveBeenLastCalledWith(expect.objectContaining({ detail: { split: 25 } }));
    view.dock = 'left';
    drag(600, 0);
    expect(view.split).toBe(75);
    view.dock = 'bottom';
    drag(0, 100);
    expect(view.split).toBe(75);
    view.dock = 'top';
    drag(0, 100);
    expect(view.split).toBe(25);
  });

  it('clamps the drag so neither pane can vanish', () => {
    drag(799, 0);
    expect(view.split).toBe(15);
    drag(1, 0);
    expect(view.split).toBe(85);
    view.split = 200;
    expect(view.split).toBe(85);
  });

  it('marks itself while dragging, and not after', () => {
    bar.dispatchEvent(new PointerEvent('pointerdown', { button: 0, pointerId: 1, bubbles: true }));
    expect(view.hasAttribute('dragging')).toBe(true);
    bar.dispatchEvent(new PointerEvent('pointercancel', { pointerId: 1, bubbles: true }));
    expect(view.hasAttribute('dragging')).toBe(false);
  });

  it('moves by keyboard on the bar, towards the arrow', () => {
    bar.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    expect(view.split).toBe(55);
    bar.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(view.split).toBe(50);
    view.dock = 'bottom';
    bar.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    expect(view.split).toBe(55);
    bar.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    expect(view.split).toBe(55);
  });

  it('goes back to half on a double-click', () => {
    view.split = 30;
    bar.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
    expect(view.split).toBe(50);
    expect(bar.querySelector('[part~="grip"]')).not.toBeNull();
  });
});
