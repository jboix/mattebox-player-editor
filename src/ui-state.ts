/**
 * How the page is laid out: where the preview docks, how much of the
 * workbench it takes, the shape it holds the player to, and which document
 * is up. Saved per
 * browser, like the workspace, so the page opens the way it was left.
 */
import type { DocumentId } from './workspace.js';

export const DOCKS = ['right', 'left', 'bottom', 'top'] as const;

/** Which edge of the workbench the preview sits on. */
export type Dock = (typeof DOCKS)[number];

/** The shapes the preview offers the player: the whole pane, or a fixed ratio. */
export const RATIOS = ['fill', '16:9', '4:3', '1:1', '9:16', '21:9'] as const;

export type Ratio = (typeof RATIOS)[number];

export interface UiState {
  readonly dock: Dock;
  /** The preview's share of the workbench, in percent. */
  readonly split: number;
  readonly ratio: Ratio;
  readonly tab: DocumentId;
}

export const UI_STATE_KEY = 'mattebox.editor.ui';

export const DEFAULT_UI_STATE: UiState = {
  dock: 'right',
  split: 50,
  ratio: 'fill',
  tab: 'css',
};

/** The smallest and largest share either pane can be dragged to. */
export const SPLIT_MIN = 15;
export const SPLIT_MAX = 85;

export function clampSplit(value: number): number {
  if (!Number.isFinite(value)) return DEFAULT_UI_STATE.split;
  return Math.min(SPLIT_MAX, Math.max(SPLIT_MIN, Math.round(value)));
}

export function isDock(value: unknown): value is Dock {
  return (DOCKS as readonly unknown[]).includes(value);
}

export function isRatio(value: unknown): value is Ratio {
  return (RATIOS as readonly unknown[]).includes(value);
}

/** What the page saved over the defaults. Each field is checked on its own, so one bad field costs one field. */
export function loadUiState(storage: Storage): UiState {
  let saved: Record<string, unknown> = {};
  try {
    const raw = storage.getItem(UI_STATE_KEY);
    const parsed: unknown = raw === null ? null : JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null) saved = parsed as Record<string, unknown>;
  } catch {
    // Malformed storage reads as nothing saved.
  }
  return {
    dock: isDock(saved.dock) ? saved.dock : DEFAULT_UI_STATE.dock,
    split: typeof saved.split === 'number' ? clampSplit(saved.split) : DEFAULT_UI_STATE.split,
    ratio: isRatio(saved.ratio) ? saved.ratio : DEFAULT_UI_STATE.ratio,
    tab: saved.tab === 'css' || saved.tab === 'html' ? saved.tab : DEFAULT_UI_STATE.tab,
  };
}

export function saveUiState(storage: Storage, state: UiState): void {
  try {
    storage.setItem(UI_STATE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable; the layout still changes.
  }
}
