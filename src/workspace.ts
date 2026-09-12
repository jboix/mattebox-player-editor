/**
 * The workspace: the two documents and the preset they started from. It is
 * what the page saves, what a share link carries, and what a preset writes.
 */
import { DEFAULT_PRESET, presetById } from './presets/index.js';

export const DOCUMENTS = ['css', 'html'] as const;

/** The two documents, by the language of each. */
export type DocumentId = (typeof DOCUMENTS)[number];

/** What the pane is called, and what the download is named. */
export const FILE_NAMES: Readonly<Record<DocumentId, string>> = {
  css: 'theme.css',
  html: 'player.html',
};

export interface Workspace {
  readonly css: string;
  readonly html: string;
  /** The preset the documents started from. Unknown ids are kept, not resolved. */
  readonly preset: string;
}

export const WORKSPACE_KEY = 'mattebox.editor.workspace';

/** The default preset's documents: what a first visit gets. */
export function defaultWorkspace(): Workspace {
  return { css: DEFAULT_PRESET.css, html: DEFAULT_PRESET.html, preset: DEFAULT_PRESET.id };
}

/** Whether the documents still read as the preset they came from. */
export function isPristine(workspace: Workspace): boolean {
  const preset = presetById(workspace.preset);
  return preset !== undefined && preset.css === workspace.css && preset.html === workspace.html;
}

/** A workspace from anything, or null: three strings, or it is not one. */
export function asWorkspace(value: unknown): Workspace | null {
  if (typeof value !== 'object' || value === null) return null;
  const { css, html, preset } = value as Record<string, unknown>;
  if (typeof css !== 'string' || typeof html !== 'string' || typeof preset !== 'string')
    return null;
  return { css, html, preset };
}

/** What the page saved, or null. Anything malformed is ignored. */
export function loadWorkspace(storage: Storage): Workspace | null {
  try {
    const raw = storage.getItem(WORKSPACE_KEY);
    return raw === null ? null : asWorkspace(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveWorkspace(storage: Storage, workspace: Workspace): void {
  try {
    storage.setItem(WORKSPACE_KEY, JSON.stringify(workspace));
  } catch {
    // Storage may be full or unavailable; the page still works, it just forgets.
  }
}

export function clearWorkspace(storage: Storage): void {
  try {
    storage.removeItem(WORKSPACE_KEY);
  } catch {
    // Nothing to clear where nothing could be saved.
  }
}
