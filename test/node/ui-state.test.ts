import { describe, expect, it } from 'vitest';
import {
  clampSplit,
  DEFAULT_UI_STATE,
  isDock,
  isRatio,
  loadUiState,
  SPLIT_MAX,
  SPLIT_MIN,
  saveUiState,
  UI_STATE_KEY,
} from '../../src/ui-state.js';
import { MemoryStorage } from './memory-storage.js';

describe('the ui state', () => {
  it('clamps the split to the range either pane can take', () => {
    expect(clampSplit(50)).toBe(50);
    expect(clampSplit(0)).toBe(SPLIT_MIN);
    expect(clampSplit(100)).toBe(SPLIT_MAX);
    expect(clampSplit(33.6)).toBe(34);
    expect(clampSplit(Number.NaN)).toBe(DEFAULT_UI_STATE.split);
  });

  it('knows the four docks', () => {
    for (const dock of ['right', 'left', 'bottom', 'top']) expect(isDock(dock)).toBe(true);
    expect(isDock('center')).toBe(false);
    expect(isDock(1)).toBe(false);
  });

  it('knows the shapes', () => {
    expect(isRatio('fill')).toBe(true);
    expect(isRatio('9:16')).toBe(true);
    expect(isRatio('3:2')).toBe(false);
  });

  it('loads the defaults from an empty storage, and what was saved from a full one', () => {
    const storage = new MemoryStorage();
    expect(loadUiState(storage)).toEqual(DEFAULT_UI_STATE);
    const state = { dock: 'bottom', split: 30, ratio: '4:3', tab: 'html' } as const;
    saveUiState(storage, state);
    expect(loadUiState(storage)).toEqual(state);
  });

  it('takes each field on its own, so one bad field costs one field', () => {
    const storage = new MemoryStorage();
    storage.setItem(UI_STATE_KEY, JSON.stringify({ dock: 'middle', split: 999, tab: 'html' }));
    expect(loadUiState(storage)).toEqual({ ...DEFAULT_UI_STATE, split: SPLIT_MAX, tab: 'html' });
    storage.setItem(UI_STATE_KEY, 'nope');
    expect(loadUiState(storage)).toEqual(DEFAULT_UI_STATE);
  });
});
