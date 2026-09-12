import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { menu } from '../../src/menu.js';

let button: HTMLButtonElement;
let popover: HTMLElement;

beforeEach(() => {
  document.body.innerHTML = `
    <button type="button" id="open">Menu</button>
    <div id="pop" popover role="menu">
      <button type="button" role="menuitem" id="a">A</button>
      <button type="button" role="menuitem" id="b">B</button>
      <button type="button" role="menuitemcheckbox" id="c">C</button>
    </div>
  `;
  button = document.getElementById('open') as HTMLButtonElement;
  popover = document.getElementById('pop') as HTMLElement;
  menu(button, popover);
});

afterEach(() => {
  document.body.replaceChildren();
});

/** What the popover API dispatches: a toggle with the new state. */
function toggle(newState: 'open' | 'closed'): void {
  const event = new Event('toggle');
  Object.defineProperty(event, 'newState', { value: newState });
  popover.dispatchEvent(event);
}

describe('menu', () => {
  it('names the button a menu button, and follows the popover open and closed', () => {
    expect(button.getAttribute('aria-haspopup')).toBe('menu');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    toggle('open');
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(document.activeElement?.id).toBe('a');
    toggle('closed');
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('moves between the items with the arrow keys, around the ends', () => {
    toggle('open');
    const press = (key: string) =>
      document.activeElement?.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    press('ArrowDown');
    expect(document.activeElement?.id).toBe('b');
    press('ArrowDown');
    press('ArrowDown');
    expect(document.activeElement?.id).toBe('a');
    press('ArrowUp');
    expect(document.activeElement?.id).toBe('c');
    press('Home');
    expect(document.activeElement?.id).toBe('a');
    press('End');
    expect(document.activeElement?.id).toBe('c');
  });

  it('closes on an item chosen, and gives focus back to the button', () => {
    const hide = vi.fn();
    (popover as HTMLElement & { hidePopover: () => void }).hidePopover = hide;
    toggle('open');
    document.getElementById('b')?.click();
    expect(hide).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(button);
  });
});
