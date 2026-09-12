import { beforeEach, describe, expect, it } from 'vitest';
import { DEFAULT_PRESET } from '../../src/presets/index.js';
import {
  asWorkspace,
  clearWorkspace,
  defaultWorkspace,
  isPristine,
  loadWorkspace,
  saveWorkspace,
  WORKSPACE_KEY,
} from '../../src/workspace.js';
import { MemoryStorage } from './memory-storage.js';

let storage: Storage;

beforeEach(() => {
  storage = new MemoryStorage();
});

describe('the workspace', () => {
  it('starts as the default preset, and is pristine until edited', () => {
    const workspace = defaultWorkspace();
    expect(workspace.preset).toBe(DEFAULT_PRESET.id);
    expect(workspace.css).toBe(DEFAULT_PRESET.css);
    expect(isPristine(workspace)).toBe(true);
    expect(isPristine({ ...workspace, css: `${workspace.css}\n/* mine */` })).toBe(false);
    expect(isPristine({ ...workspace, preset: 'gone' })).toBe(false);
  });

  it('takes three strings and nothing else', () => {
    expect(asWorkspace({ css: 'a', html: 'b', preset: 'c' })).toEqual({
      css: 'a',
      html: 'b',
      preset: 'c',
    });
    expect(asWorkspace({ css: 'a', html: 'b', preset: 'c', extra: 1 })).toEqual({
      css: 'a',
      html: 'b',
      preset: 'c',
    });
    expect(asWorkspace({ css: 'a', html: 'b' })).toBeNull();
    expect(asWorkspace({ css: 'a', html: 2, preset: 'c' })).toBeNull();
    expect(asWorkspace('a')).toBeNull();
    expect(asWorkspace(null)).toBeNull();
  });

  it('saves, loads and clears through storage', () => {
    expect(loadWorkspace(storage)).toBeNull();
    const workspace = { css: 'a', html: 'b', preset: 'c' };
    saveWorkspace(storage, workspace);
    expect(loadWorkspace(storage)).toEqual(workspace);
    clearWorkspace(storage);
    expect(loadWorkspace(storage)).toBeNull();
  });

  it('ignores anything malformed in storage', () => {
    storage.setItem(WORKSPACE_KEY, '{not json');
    expect(loadWorkspace(storage)).toBeNull();
    storage.setItem(WORKSPACE_KEY, JSON.stringify({ css: 1 }));
    expect(loadWorkspace(storage)).toBeNull();
  });

  it('survives a storage that throws', () => {
    const broken = {
      getItem: () => {
        throw new Error('no');
      },
      setItem: () => {
        throw new Error('no');
      },
      removeItem: () => {
        throw new Error('no');
      },
    } as unknown as Storage;
    expect(loadWorkspace(broken)).toBeNull();
    expect(() => saveWorkspace(broken, defaultWorkspace())).not.toThrow();
    expect(() => clearWorkspace(broken)).not.toThrow();
  });
});
