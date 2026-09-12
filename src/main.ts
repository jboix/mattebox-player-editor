/**
 * The editor page: two documents in Monaco, the player in a preview, and a
 * toolbar that writes presets and streams into the documents. The documents
 * are the one truth: the preview shows them, the page saves them, a share
 * link carries them.
 */

// Imported, not referenced from the HTML: only an import gives the file a
// URL the dev server and the build serve.
import logo from '../docs/logo.svg';
import { MbeCodeEditor } from './elements/code-editor.js';
import { MbePreview, type PlayerSizeDetail } from './elements/preview.js';
import { MbeSplitView } from './elements/split-view.js';
import { readSource, withSource } from './markup.js';
import { menu } from './menu.js';
import { PRESETS, presetById } from './presets/index.js';
import { decodeShare, encodeShare } from './share.js';
import { STREAMS, streamByUrl } from './streams.js';
import { tabs } from './tabs.js';
import { DOCKS, isRatio, loadUiState, RATIOS, saveUiState, type UiState } from './ui-state.js';
import {
  clearWorkspace,
  DOCUMENTS,
  type DocumentId,
  defaultWorkspace,
  FILE_NAMES,
  isPristine,
  loadWorkspace,
  saveWorkspace,
  type Workspace,
} from './workspace.js';

MbeSplitView.define();
MbePreview.define();
MbeCodeEditor.define();

function byId<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (element === null) throw new Error(`#${id} is not on the page`);
  return element as T;
}

byId<HTMLImageElement>('logo').src = logo;

const editor = byId<MbeCodeEditor>('editor');
const preview = byId<MbePreview>('preview');
const split = byId<MbeSplitView>('split');
const status = byId<HTMLParagraphElement>('status');

/** One line under the workbench, for what an action did. */
function say(text: string): void {
  status.textContent = text;
}

// ---- a question, asked in a dialog ----------------------------------------

const dialog = byId<HTMLDialogElement>('confirm');
const dialogText = byId<HTMLParagraphElement>('confirm-text');

function ask(question: string): Promise<boolean> {
  dialogText.textContent = question;
  dialog.returnValue = '';
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener('close', () => resolve(dialog.returnValue === 'ok'), { once: true });
  });
}

// ---- the room: one button, naming the room it would switch to -------------

menu(byId('theme-menu-button'), byId('theme-menu'));
menu(byId('view-menu-button'), byId('view-menu'));

const THEME_KEY = 'mattebox.editor.theme';
const themeButton = byId<HTMLButtonElement>('theme-toggle');
const system = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme(): 'light' | 'dark' {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return system.matches ? 'dark' : 'light';
}

function paintTheme(): void {
  const dark = currentTheme() === 'dark';
  themeButton.setAttribute('aria-checked', String(dark));
  editor.theme = dark;
}

themeButton.addEventListener('click', () => {
  document.documentElement.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem(THEME_KEY, currentTheme());
  } catch {
    // Storage may be unavailable; the room still changes.
  }
  paintTheme();
});
// Follows the system until a choice is made.
system.addEventListener('change', paintTheme);

// ---- the workspace: the documents, where they came from, where they go ----

/** A share link wins over what was saved, which wins over the default preset. */
async function arrival(): Promise<Workspace> {
  const shared = await decodeShare(location.hash);
  if (shared !== null) {
    say('Opened a shared theme.');
    return shared;
  }
  return loadWorkspace(localStorage) ?? defaultWorkspace();
}

let workspace = await arrival();

const presetSelect = byId<HTMLSelectElement>('preset');
const streamSelect = byId<HTMLSelectElement>('stream');

for (const preset of PRESETS) {
  const option = new Option(preset.name, preset.id);
  option.title = preset.description;
  presetSelect.append(option);
}
for (const [index, stream] of STREAMS.entries())
  streamSelect.append(new Option(stream.label, String(index)));
const otherStream = new Option('Another URL, in the markup', 'other');
streamSelect.append(otherStream);

/** What the toolbar says about the documents: which preset they started from, and which stream. */
function paintWorkspace(): void {
  const preset = presetById(workspace.preset);
  presetSelect.value = preset === undefined ? '' : preset.id;
  const source = readSource(workspace.html);
  const known = source === null ? undefined : streamByUrl(source.url);
  otherStream.hidden = known !== undefined;
  streamSelect.value = known === undefined ? 'other' : String(STREAMS.indexOf(known));
}

/** Puts the documents on the page: the panes, the preview, the toolbar, and storage. */
function present(): void {
  editor.open('css', 'css', workspace.css);
  editor.open('html', 'html', workspace.html);
  preview.css = workspace.css;
  preview.html = workspace.html;
  saveWorkspace(localStorage, workspace);
  paintWorkspace();
}

/**
 * An edit reaches the preview as it is typed. A stylesheet is cheap to
 * apply, so it follows the keystroke; the markup rebuilds the player, which
 * restarts playback, so it waits for a short pause in the typing.
 */
const DELAY: Readonly<Record<DocumentId, number>> = { css: 50, html: 300 };
const pending = new Map<DocumentId, ReturnType<typeof setTimeout>>();

function apply(id: DocumentId): void {
  if (id === 'css') preview.css = workspace.css;
  else preview.html = workspace.html;
}

editor.addEventListener('document-change', (event) => {
  const { id, value } = (event as CustomEvent<{ id: string; value: string }>).detail;
  if (id !== 'css' && id !== 'html') return;
  workspace = { ...workspace, [id]: value };
  clearTimeout(pending.get(id));
  pending.set(
    id,
    setTimeout(() => {
      pending.delete(id);
      apply(id);
    }, DELAY[id]),
  );
  saveWorkspace(localStorage, workspace);
  paintWorkspace();
});

/** Replaces the documents outright: a preset, a stream, a reset. */
function replace(next: Workspace): void {
  for (const id of DOCUMENTS) clearTimeout(pending.get(id));
  pending.clear();
  workspace = next;
  present();
}

present();

// ---- the layout: the tabs, the dock, the split, the shape ----------------

let ui: UiState = loadUiState(localStorage);

function layout(next: Partial<UiState>): void {
  ui = { ...ui, ...next };
  saveUiState(localStorage, ui);
}

const documentTabs = tabs(byId('tabs'), (id) => {
  editor.show(id);
  editor.focus();
  layout({ tab: id as DocumentId });
});
documentTabs.select(ui.tab);
editor.show(ui.tab);

const dockItems = [...document.querySelectorAll<HTMLButtonElement>('[data-dock]')];
function paintDock(): void {
  for (const item of dockItems)
    item.setAttribute('aria-checked', String(item.dataset.dock === ui.dock));
}
for (const item of dockItems) {
  item.addEventListener('click', () => {
    const dock = DOCKS.find((name) => name === item.dataset.dock) ?? 'right';
    split.dock = dock;
    layout({ dock });
    paintDock();
  });
}
split.dock = ui.dock;
split.split = ui.split;
paintDock();
// The bar is dragged: the share is saved, so the page comes back as it was left.
split.addEventListener('split-change', () => {
  layout({ split: split.split });
});

const ratioSelect = byId<HTMLSelectElement>('ratio');
for (const ratio of RATIOS) {
  ratioSelect.append(new Option(ratio === 'fill' ? 'Fill the pane' : ratio, ratio));
}
ratioSelect.value = ui.ratio;
preview.ratio = ui.ratio;
ratioSelect.addEventListener('change', () => {
  const ratio = isRatio(ratioSelect.value) ? ratioSelect.value : 'fill';
  preview.ratio = ratio;
  layout({ ratio });
});

const playerSize = byId<HTMLSpanElement>('player-size');
preview.addEventListener('player-size', (event) => {
  const { width, height } = (event as CustomEvent<PlayerSizeDetail>).detail;
  playerSize.textContent = width === 0 ? '' : `${width} × ${height}`;
});

paintTheme();

// ---- the toolbar: presets and streams write the documents -----------------

presetSelect.addEventListener('change', async () => {
  const preset = presetById(presetSelect.value);
  if (preset === undefined) return;
  const keep =
    isPristine(workspace) ||
    (await ask(`Replace both documents with the ${preset.name} preset? Your edits will be lost.`));
  if (!keep) {
    paintWorkspace();
    return;
  }
  // The look changes, the stream stays: the source the markup names, with
  // its poster and chapters, goes onto the preset's player.
  const source = readSource(workspace.html);
  const html = source === null ? preset.html : withSource(preset.html, source);
  replace({ css: preset.css, html, preset: preset.id });
  say(`Applied the ${preset.name} preset.`);
});

streamSelect.addEventListener('change', () => {
  const stream = STREAMS[Number(streamSelect.value)];
  if (stream === undefined) {
    paintWorkspace();
    return;
  }
  replace({ ...workspace, html: withSource(workspace.html, stream) });
  say(`The markup now plays ${stream.label}.`);
});

// ---- the actions: copy, download, share, reset ----------------------------

async function copy(text: string, what: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    say(`Copied ${what}.`);
  } catch {
    say(`Could not copy ${what}: the browser refused the clipboard.`);
  }
}

byId('copy-css').addEventListener('click', () => copy(workspace.css, FILE_NAMES.css));
byId('copy-html').addEventListener('click', () => copy(workspace.html, FILE_NAMES.html));

function download(name: string, text: string, type: string): void {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  // The browser has the download by now; the URL can go.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

byId('download').addEventListener('click', () => {
  download(FILE_NAMES.css, workspace.css, 'text/css');
  download(FILE_NAMES.html, workspace.html, 'text/html');
  say(`Downloaded ${FILE_NAMES.css} and ${FILE_NAMES.html}.`);
});

byId('share').addEventListener('click', async () => {
  const hash = await encodeShare(workspace);
  const url = new URL(location.href);
  url.hash = hash;
  history.replaceState(history.state, '', url);
  await copy(url.href, 'a link to this theme');
});

byId('reset').addEventListener('click', async () => {
  if (!(await ask('Forget the documents and start again from the default preset?'))) return;
  clearWorkspace(localStorage);
  const url = new URL(location.href);
  url.hash = '';
  history.replaceState(history.state, '', url);
  replace(defaultWorkspace());
  say('Back to the default preset.');
});
