# Architecture

The editor is one page over two documents. This document names the modules,
the flow between them, and the boundaries `dependency-cruiser` checks.

## The documents

The workspace is three strings: `css`, the stylesheet a page carries for the
player; `html`, the `<mattebox-player>` with the controls the page composes
inside it; and `preset`, the id of the preset they started from. Everything
else derives from it.

| Goes            | Through            | Where                                             |
| --------------- | ------------------ | ------------------------------------------------- |
| To the panes    | `MbeCodeEditor`    | One Monaco model per document                     |
| To the preview  | `MbePreview`       | A `<style>` and the markup, in its shadow tree    |
| To storage      | `workspace.ts`     | `localStorage`, key `mattebox.editor.workspace`   |
| Into a link     | `share.ts`         | JSON, deflated, base64url, after `#share=`        |
| From a preset   | `presets/index.ts` | Both documents replaced                           |
| From a stream   | `markup.ts`        | The `src` attributes rewritten on the opening tag |
| Out of the page | `main.ts`          | Copy, or two files downloaded                     |

On arrival a share hash wins over what was saved, which wins over the
default preset.

The UI state is separate and smaller: the dock, the preview's share of the
workbench, the shape the player is held to, and the document that is up. It lives in
`ui-state.ts`, key `mattebox.editor.ui`. The room (light or dark) is a third
key, `mattebox.editor.theme`, read by an inline script before the first
paint.

## The modules

| Module                    | Is                                                                        |
| ------------------------- | ------------------------------------------------------------------------- |
| `main.ts`                 | The entry. Reads the page by id and wires everything. Nothing imports it. |
| `monaco.ts`               | Monaco's api, the css and html languages, the features the panes use      |
| `elements/code-editor.ts` | `<mbe-code-editor>`: one editor, N models, view state kept per document   |
| `elements/preview.ts`     | `<mbe-preview>`: the theme and the markup in a shadow tree                |
| `elements/split-view.ts`  | `<mbe-split-view>`: two slots and a bar between them; `dock`, `split`     |
| `tabs.ts`                 | The tab list over the documents                                           |
| `workspace.ts`            | The workspace type, its defaults, storage                                 |
| `ui-state.ts`             | The layout type, its defaults, storage                                    |
| `markup.ts`               | Parsing the markup for the preview; reading and writing its source        |
| `share.ts`                | The hash                                                                  |
| `streams.ts`              | The streams the toolbar offers                                            |
| `presets/`                | The presets and their registry                                            |

Every module but `main.ts` takes what it needs as arguments (a `Storage`, a
string, an element) and is tested without the page.

## The preview

The preview is a shadow tree with the theme in a `<style>` and the player
beside it. That is the shape of a page: the theme reaches the player by tag,
by `::part()`, and by the inherited `--mbx-*` tokens, and nothing of it
reaches the editor around the preview. The preview's own rules sit in a
cascade layer, so any rule of the theme beats them.

A stylesheet edit updates the `<style>` and nothing else, so playback runs
on. A markup edit replaces the player, so playback starts over; the page
waits for a short pause in the typing before it does.

The markup is parsed with what could run dropped: scripts, event handler
attributes, `javascript:` URLs. A share link carries markup someone else
wrote, and the preview lives in the page.

One workaround of the player, called out in `elements/preview.ts`: the
subtitles menu's sizes are a sheet the bar puts in `document.head`, which a
shadow tree does not see, so the preview copies it in.

## The boundaries

`.dependency-cruiser.cjs` enforces:

- Runtime dependencies are `@mattebox/player`, `@mattebox/player-diagnostics`,
  `mattebox` and `monaco-editor`. Nothing else under `src/`.
- The player is reached through its package entries, never a path under
  its `dist/`.
- Nothing imports `main.ts`.
- No cycles.

`knip` reports dead files and exports; `tsc` runs strict with
`exactOptionalPropertyTypes` and `noUncheckedIndexedAccess`.
