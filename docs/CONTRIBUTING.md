# Contributing to the Mattebox player editor

Thanks for contributing. Agents working in this repository also follow
[AGENTS.md](../AGENTS.md). Participation is governed by the
[Code of Conduct](./CODE_OF_CONDUCT.md).

## Setup

```sh
npm install
npm run verify    # everything CI checks
npm run dev       # the page, at the URL Vite prints
```

`verify` runs:

| Step                 | Tool               | Checks                                                    |
| -------------------- | ------------------ | --------------------------------------------------------- |
| `npm run lint`       | Biome              | Formatting and lint rules                                 |
| `npm run docs:check` | remark             | Markdown formatting, broken links and anchors             |
| `npm run typecheck`  | tsc                | Type errors, `strict` and `exactOptionalPropertyTypes`    |
| `npm run depcruise`  | dependency-cruiser | The runtime dependency list, the player's entries, cycles |
| `npm run knip`       | knip               | Dead code, unused exports and dependencies                |
| `npm run build`      | Vite               | The page builds                                           |
| `npm run test`       | Vitest             | Node tests, and the elements under jsdom                  |

The player repository has gates this one does not, on purpose: no emit
check, side-effect audit, package validation or size budget, because nothing
is published; and no browser tier or page suite, because the elements are
tested under jsdom with Monaco and the player mocked. What jsdom cannot show
(the player playing, Monaco's colour picker) is checked by opening the page.

Requirements: Node 24 or later (see `.nvmrc`) and npm. `package-lock.json`
is the one lockfile.

To try a change to the player before it is released, point the two
`@mattebox` dependencies in `package.json` at a checkout
(`file:../mattebox-player/packages/player`), build the player there, and
`npm install` here. Put the published ranges back before a push: CI and
the hosted page install from the registry.

## Layout

| Path            | Contents                                                              |
| --------------- | --------------------------------------------------------------------- |
| `src/main.ts`   | The entry: reads the page and wires the modules                       |
| `src/elements`  | The editor's custom elements: the split view, the preview, the editor |
| `src/presets`   | The presets, a stylesheet and a markup each, and their registry       |
| `src/monaco.ts` | Monaco, trimmed to the two languages and the features the panes use   |
| `test/node`     | The modules that touch no DOM                                         |
| `test/dom`      | The elements, under jsdom                                             |

## Rules

Each of these is checked automatically or in review:

1. **The documents are the one truth.** The preview shows them, storage and
   the share hash carry them, the toolbar writes into them.
2. **Runtime dependencies are the player, its diagnostics, the engine and
   Monaco.** Nothing else. Do not add a dependency to work around a problem.
3. **The player is reached through its package entries**, never its `dist/`.
4. **The editor's own UI is framework-free custom elements**, prefixed
   `mbe-`.
5. **The preview is a page.** The theme applies as page CSS; nothing reaches
   into the player's shadow roots.
6. **Every workaround of the player is called out in a comment** where it
   happens: what was wanted, what had to be done instead, and which surface
   of the player would have made it one line.
7. **Banned TypeScript:** non-const `enum`, `namespace`, parameter properties,
   decorators.

## Commits

Conventional Commits, so the history reads as a changelog:

- `fix:` a correction, `feat:` something new, `feat!:` or `BREAKING CHANGE:`
  a change to what a share link or a saved workspace means.
- `docs:`, `chore:`, `test:`, `refactor:` for the rest.

A body is required. Nothing is published, so no commit cuts a release; the
page deploys from `main`.

`npm install` sets up the git hooks through husky. `commit-msg` runs
commitlint, `pre-commit` runs Biome on the staged files and the docs check,
and `pre-push` runs `npm run verify`.

## Style

If `npm run verify` passes, the style is right. If you disagree with a
check, open an issue rather than arguing in the pull request.
