import { describe, expect, it } from 'vitest';
import { DEFAULT_PRESET, PRESETS, presetById } from '../../src/presets/index.js';

/**
 * The names the player's elements carry, from `docs/guide/03-the-element.md`
 * and the elements' sources. A preset that names a part or a slot outside
 * these styles nothing, so the test holds the presets to the list.
 */
const PARTS = new Set([
  'stage',
  'error',
  'value',
  'button',
  'icon',
  'row',
  'seek-row',
  'buttons-row',
  'slider',
  'rail',
  'track',
  'fill',
  'thumb',
  'buffered',
  'buffered-range',
  'hover',
  'edge',
  'preview',
  'preview-image',
  'preview-tile',
  'preview-time',
  'preview-title',
  'dot',
  'text',
  'popup',
  'section',
  'section-label',
  'item',
  'item-detail',
  'page-item',
  'back-item',
  'checked',
  'box',
  'title',
  'detail',
  'category',
  'separator',
  'code',
  'retry',
  'tooltip',
  'tooltip-title',
  'tooltip-text',
  'panel',
]);

const SLOTS = new Set([
  // The default slot, named to take a seek-row control into the buttons row.
  '',
  'icon',
  'icon-play',
  'icon-pause',
  'icon-replay',
  'icon-mute',
  'icon-low',
  'icon-high',
  'icon-enter',
  'icon-exit',
  'icon-default',
  'icon-off',
  'icon-on',
  'seek',
]);

const TAGS = new Set([
  'mattebox-player',
  'mbx-control-bar',
  'mbx-spacer',
  'mbx-play-button',
  'mbx-mute-button',
  'mbx-volume-slider',
  'mbx-volume',
  'mbx-skip-button',
  'mbx-pip-button',
  'mbx-fullscreen-button',
  'mbx-start-button',
  'mbx-error-screen',
  'mbx-current-time',
  'mbx-duration',
  'mbx-remaining-time',
  'mbx-seek-bar',
  'mbx-live-button',
  'mbx-speed-menu',
  'mbx-chapters-menu',
  'mbx-quality-menu',
  'mbx-audio-menu',
  'mbx-subtitles-menu',
  'mbx-drm-badge',
  'mbx-panels',
  'mbx-diagnostics',
]);

const TOKENS = new Set([
  '--mbx-surface',
  '--mbx-text',
  '--mbx-muted',
  '--mbx-accent',
  '--mbx-error',
  '--mbx-live',
  '--mbx-radius',
  '--mbx-gap',
  '--mbx-pad',
  '--mbx-font',
  '--mbx-preview-width',
  '--mbx-mono',
  '--mbx-chart-1',
  '--mbx-chart-2',
  '--mbx-chart-3',
  '--mbx-chart-4',
  '--mbx-chart-5',
]);

function all(text: string, pattern: RegExp): string[] {
  return [...text.matchAll(pattern)].map((match) => match[1] ?? '');
}

describe('the presets', () => {
  it('have unique ids, a name, a description, and both documents', () => {
    const ids = PRESETS.map((preset) => preset.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const preset of PRESETS) {
      expect(preset.name).not.toBe('');
      expect(preset.description).not.toBe('');
      expect(preset.css.trim()).not.toBe('');
      expect(preset.html.trim()).not.toBe('');
    }
    expect(DEFAULT_PRESET.id).toBe('default');
    expect(presetById('reel')?.name).toBe('Reel');
    expect(presetById('none')).toBeUndefined();
  });

  it.each(PRESETS.map((preset) => [preset.id, preset] as const))(
    '%s names one player with a source, and only elements the player has',
    (_id, preset) => {
      expect(all(preset.html, /<(mattebox-player)\b/g)).toHaveLength(1);
      expect(preset.html).toMatch(/<mattebox-player[^>]*\ssrc="https?:\/\//);
      expect(preset.html).toMatch(/<mattebox-player[^>]*\scontrols="custom"/);
      for (const tag of all(preset.html, /<(m(?:attebox|bx)-[a-z-]+)/g))
        expect(TAGS).toContain(tag);
      for (const slot of all(preset.html, /\sslot="([^"]*)"/g)) expect(SLOTS).toContain(slot);
    },
  );

  it.each(PRESETS.map((preset) => [preset.id, preset] as const))(
    '%s styles only parts, tags and tokens the player has',
    (_id, preset) => {
      for (const part of all(preset.css, /::part\(([^)]+)\)/g)) expect(PARTS).toContain(part);
      for (const tag of all(preset.css, /(?:^|[\s,>+~])(m(?:attebox|bx)-[a-z-]+)/gm)) {
        expect(TAGS).toContain(tag);
      }
      for (const token of all(preset.css, /(--mbx-[a-z0-9-]+)/g)) expect(TOKENS).toContain(token);
      expect(preset.css).not.toContain('!important');
    },
  );
});
