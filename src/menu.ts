/**
 * A menu: a button and a popover of items. The `popover` attribute does
 * the opening, the closing on Escape and on a click outside, and the top
 * layer; this adds what a menu needs on top: the popover placed under its
 * button, focus on the first item when it opens, the arrow keys between
 * items, `aria-expanded` on the button, and a close on any item chosen.
 */

const ITEMS = '[role^="menuitem"]:not([disabled])';

export function menu(button: HTMLButtonElement, popover: HTMLElement): void {
  const items = (): HTMLElement[] => [...popover.querySelectorAll<HTMLElement>(ITEMS)];
  const open = (): boolean => popover.matches(':popover-open');

  const place = (): void => {
    const rect = button.getBoundingClientRect();
    popover.style.top = `${rect.bottom + 4}px`;
    // Right-aligned under its button when that keeps it on the page.
    const width = popover.offsetWidth;
    const left = rect.right - width;
    popover.style.left = `${Math.max(8, left < 8 ? rect.left : left)}px`;
  };

  popover.addEventListener('toggle', (event) => {
    const state = (event as Event & { newState?: string }).newState;
    const shown = state === undefined ? open() : state === 'open';
    button.setAttribute('aria-expanded', String(shown));
    if (!shown) return;
    place();
    items()[0]?.focus();
  });

  popover.addEventListener('keydown', (event) => {
    const list = items();
    const index = list.indexOf(document.activeElement as HTMLElement);
    let next: number | undefined;
    if (event.key === 'ArrowDown') next = (index + 1) % list.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + list.length) % list.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = list.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    list[next]?.focus();
  });

  popover.addEventListener('click', (event) => {
    const item = (event.target as HTMLElement).closest<HTMLElement>(ITEMS);
    if (item === null || !popover.contains(item)) return;
    if (typeof popover.hidePopover === 'function') popover.hidePopover();
    button.focus();
  });

  button.setAttribute('aria-haspopup', 'menu');
  button.setAttribute('aria-expanded', 'false');
}
