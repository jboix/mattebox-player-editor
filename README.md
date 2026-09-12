<h1>
  <img src="docs/logo.svg" width="44" height="44" align="absmiddle" alt="">
  Mattebox player editor
</h1>

[![Quality](https://github.com/jboix/mattebox-player-editor/actions/workflows/quality.yml/badge.svg)](https://github.com/jboix/mattebox-player-editor/actions/workflows/quality.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

The Mattebox player editor is a page for the look of
[`<mattebox-player>`](https://github.com/jboix/mattebox-player): a
stylesheet and the player's markup side by side in Monaco, and the player
itself in a preview that follows every keystroke. The player has no skin
system on purpose. Its look is page CSS, through `::part()` and a few
inherited tokens, and its controls are elements the page places inside it.
So the editor edits exactly that, and what it exports is what a page pastes.

Open the [hosted editor](https://jboix.github.io/mattebox-player-editor/),
pick a preset, and change something.

## Quick start

Run it from a checkout:

```sh
npm install
npm run dev
```

The page has two documents. `theme.css` is the stylesheet a page would carry
for the player; `player.html` is the element with the controls the page
composes inside it under `controls="custom"`. A preset writes both. The
preview docks on any edge of the page and resizes. Copy, download or share
takes the two documents out: a share link carries them in its hash and
nowhere else.

The editor runs on the published `@mattebox/player`, its diagnostics and the
`mattebox` engine, and on Monaco. Nothing else at runtime.

## Documentation

- [Architecture](docs/architecture.md): the modules, the data flow, and the boundaries.
- [The player's guide](https://github.com/jboix/mattebox-player/blob/main/docs/guide/03-the-element.md): every attribute, part and token the theme can reach.

## Contributing

See the [contributing guide](docs/CONTRIBUTING.md). Participation is governed
by the [Code of Conduct](docs/CODE_OF_CONDUCT.md). Vulnerabilities go through
[SECURITY.md](docs/SECURITY.md).

## License

MIT, see [LICENSE](LICENSE).
