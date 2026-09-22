/**
 * The presets: a stylesheet and a markup each, a starting point the toolbar
 * writes into the workspace. Adding one is two files and an entry here;
 * the preset test checks every part and slot name they use is one the
 * player has.
 */
import defaultCss from './default.css?raw';
import defaultHtml from './default.html?raw';
import outlineCss from './outline.css?raw';
import outlineHtml from './outline.html?raw';
import phoneCss from './phone.css?raw';
import phoneHtml from './phone.html?raw';
import reelCss from './reel.css?raw';
import reelHtml from './reel.html?raw';
import roundCss from './round.css?raw';
import roundHtml from './round.html?raw';

export interface Preset {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly css: string;
  readonly html: string;
}

export const PRESETS: readonly Preset[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'The stock bar and every token at its default, as a starting point.',
    css: defaultCss,
    html: defaultHtml,
  },
  {
    id: 'round',
    name: 'Round',
    description:
      'A floating pill bar, circular buttons, the play button drawn with the page’s own glyphs.',
    css: roundCss,
    html: roundHtml,
  },
  {
    id: 'phone',
    name: 'Phone',
    description:
      'Play and the skips in the middle of the picture, a thin bar with the seek bar over the time left, PiP and fullscreen. Try the 9:16 shape.',
    css: phoneCss,
    html: phoneHtml,
  },
  {
    id: 'outline',
    name: 'Outline',
    description:
      'Every glyph replaced by the page’s own, drawn in strokes: an SVG in the slot each control offers per state.',
    css: outlineCss,
    html: outlineHtml,
  },
  {
    id: 'reel',
    name: 'Reel',
    description:
      'The seek bar on the floor of the box, always shown, the buttons and the time left above it, fewer of them as the box narrows.',
    css: reelCss,
    html: reelHtml,
  },
];

export const DEFAULT_PRESET = PRESETS[0] as Preset;

export function presetById(id: string): Preset | undefined {
  return PRESETS.find((preset) => preset.id === id);
}
