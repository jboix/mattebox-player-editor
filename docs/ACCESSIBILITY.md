# Accessibility

The player editor aims to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/) at
level AA. Nobody has audited it by hand, so this is a goal, not a claim of
conformance.

The editor checks its own page, not the theme you write. A theme can make
the player's controls hard to see, and the editor does not warn you.

## How it is checked

- axe-core checks the built page for WCAG 2.0, 2.1 and 2.2 A and AA, in the light and the dark scheme, in Chromium: as it loads, on the player.html tab, with the Theme and View menus open and with the confirm dialog open. It checks the preview player too.
- Biome's accessibility lint rules run on the code.

## What the editor does

- The menus, tabs and split view have names and states that a screen reader reads.
- A visible focus ring shows on keyboard focus.
- The code colours and line numbers have a contrast of at least 4.5:1 in both schemes.
- The page follows the system's light or dark setting.
- The code editors are [Monaco](https://microsoft.github.io/monaco-editor/), with its own screen reader support and accessibility help.
- The preview is [`<mattebox-player>`](https://github.com/jboix/mattebox-player), with its keyboard support and named controls.

## Known limitations

- axe-core finds part of the WCAG issues, about 57% by its maker Deque's count. The rest needs a review by hand, which has not been done.
- The editor does not check the contrast of the theme you write.
- In a code editor, Tab inserts a tab instead of moving focus, as Monaco does by default. Monaco's accessibility help shows how to change it.
- VoiceOver, NVDA and JAWS have not been tested by hand.
- The preview has the player's limitations. The player's [accessibility statement](https://github.com/jboix/mattebox-player/blob/main/docs/ACCESSIBILITY.md) lists them.

## Report a barrier

[Open an accessibility issue](https://github.com/jboix/mattebox-player-editor/issues/new?template=03_accessibility.yml)
and say what stopped you, in which part of the editor, with which device,
browser and assistive technology. Every report is read. There is no fixed
timeline for a fix.
