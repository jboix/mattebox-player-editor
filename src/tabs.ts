/**
 * A tab list over the documents: the buttons in the page carry `role="tab"`
 * and a `data-tab`, this keeps `aria-selected` and the focus order right and
 * reports the choice. Arrow keys move between tabs, as a tab list does.
 */

export interface Tabs {
  /** Selects a tab, quietly: the page asked for it, so it is not reported back. */
  select(id: string): void;
  readonly active: string;
}

export function tabs(list: HTMLElement, onSelect: (id: string) => void): Tabs {
  const buttons = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"][data-tab]')];
  if (buttons.length === 0) throw new Error('the tab list has no tabs');
  const idOf = (button: HTMLButtonElement): string => button.dataset.tab ?? '';
  let active = idOf(buttons[0] as HTMLButtonElement);
  const paint = (): void => {
    for (const button of buttons) {
      const selected = idOf(button) === active;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    }
  };
  const choose = (id: string, report: boolean): void => {
    if (!buttons.some((button) => idOf(button) === id)) throw new Error(`${id} is not a tab`);
    const changed = id !== active;
    active = id;
    paint();
    if (changed && report) onSelect(id);
  };
  for (const [index, button] of buttons.entries()) {
    button.addEventListener('click', () => choose(idOf(button), true));
    button.addEventListener('keydown', (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      if (step === 0) return;
      event.preventDefault();
      const next = buttons[(index + step + buttons.length) % buttons.length] as HTMLButtonElement;
      choose(idOf(next), true);
      next.focus();
    });
  }
  paint();
  return {
    select: (id) => choose(id, false),
    get active() {
      return active;
    },
  };
}
