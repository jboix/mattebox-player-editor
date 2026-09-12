import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { tabs } from '../../src/tabs.js';

let list: HTMLElement;

beforeEach(() => {
  list = document.createElement('div');
  list.innerHTML = `
    <button type="button" role="tab" data-tab="css">theme.css</button>
    <button type="button" role="tab" data-tab="html">player.html</button>
  `;
  document.body.append(list);
});

afterEach(() => {
  list.remove();
});

function tab(id: string): HTMLButtonElement {
  return list.querySelector(`[data-tab="${id}"]`) as HTMLButtonElement;
}

describe('tabs', () => {
  it('selects the first tab, and reports a click on another', () => {
    const onSelect = vi.fn();
    const controller = tabs(list, onSelect);
    expect(controller.active).toBe('css');
    expect(tab('css').getAttribute('aria-selected')).toBe('true');
    expect(tab('html').tabIndex).toBe(-1);
    tab('html').click();
    expect(onSelect).toHaveBeenCalledWith('html');
    expect(controller.active).toBe('html');
    expect(tab('html').tabIndex).toBe(0);
    tab('html').click();
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('selects quietly when the page asks', () => {
    const onSelect = vi.fn();
    const controller = tabs(list, onSelect);
    controller.select('html');
    expect(controller.active).toBe('html');
    expect(onSelect).not.toHaveBeenCalled();
    expect(() => controller.select('json')).toThrow('json is not a tab');
  });

  it('moves with the arrow keys, around the ends', () => {
    const onSelect = vi.fn();
    tabs(list, onSelect);
    tab('css').dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    expect(onSelect).toHaveBeenLastCalledWith('html');
    tab('html').dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(onSelect).toHaveBeenLastCalledWith('css');
  });

  it('needs at least one tab', () => {
    expect(() => tabs(document.createElement('div'), () => {})).toThrow('no tabs');
  });
});
