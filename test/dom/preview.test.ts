import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// The player and the diagnostics register elements on import and need a
// browser under them; the preview needs neither to be tested, only that
// the tags upgrade to something.
vi.mock('@mattebox/player', () => {
  customElements.define('mattebox-player', class extends HTMLElement {});
  return {};
});
vi.mock('@mattebox/player-diagnostics', () => ({}));

const { MbePreview } = await import('../../src/elements/preview.js');
MbePreview.define();

let preview: InstanceType<typeof MbePreview>;

beforeEach(() => {
  preview = document.createElement('mbe-preview') as InstanceType<typeof MbePreview>;
  document.body.append(preview);
});

afterEach(() => {
  preview.remove();
  document.head.querySelector('style[data-mattebox-cue]')?.remove();
});

describe('<mbe-preview>', () => {
  it('puts the stylesheet in its own tree, beside the markup', () => {
    preview.css = 'mattebox-player { --mbx-accent: red; }';
    preview.html = '<mattebox-player src="x"></mattebox-player>';
    const root = preview.shadowRoot as ShadowRoot;
    expect(root.querySelector('style[data-theme]')?.textContent).toContain('--mbx-accent: red');
    expect(preview.css).toContain('--mbx-accent: red');
    expect(preview.player?.getAttribute('src')).toBe('x');
    expect(document.querySelector('mattebox-player')).toBeNull();
  });

  it('leaves the player alone when the stylesheet changes, and rebuilds it when the markup does', () => {
    preview.html = '<mattebox-player></mattebox-player>';
    const first = preview.player;
    preview.css = 'a { }';
    preview.css = 'b { }';
    expect(preview.player).toBe(first);
    preview.html = '<mattebox-player muted></mattebox-player>';
    expect(preview.player).not.toBe(first);
    expect(preview.player?.hasAttribute('muted')).toBe(true);
  });

  it('holds the player to a shape as a custom property, and drops it for fill', () => {
    preview.ratio = '9:16';
    expect(preview.getAttribute('ratio')).toBe('9:16');
    expect(preview.style.getPropertyValue('--mbe-ratio')).toBe('9 / 16');
    preview.ratio = 'fill';
    expect(preview.hasAttribute('ratio')).toBe(false);
    expect(preview.style.getPropertyValue('--mbe-ratio')).toBe('');
    preview.setAttribute('ratio', 'oval');
    expect(preview.ratio).toBe('fill');
  });

  it('says how big the player is when the markup changes', () => {
    const sizes: Array<{ width: number; height: number }> = [];
    preview.addEventListener('player-size', (event) => {
      sizes.push((event as CustomEvent<{ width: number; height: number }>).detail);
    });
    preview.html = '<mattebox-player></mattebox-player>';
    preview.html = '<p>no player</p>';
    // jsdom lays nothing out, so a player measures zero; the point is that each markup reports.
    expect(sizes).toEqual([
      { width: 0, height: 0 },
      { width: 0, height: 0 },
    ]);
  });

  it('drops what could run from the markup', () => {
    preview.html =
      '<mattebox-player onclick="alert(1)"><script>alert(2)</script><a href="javascript:alert(3)">x</a></mattebox-player>';
    const root = preview.shadowRoot as ShadowRoot;
    expect(root.querySelector('script')).toBeNull();
    expect(preview.player?.hasAttribute('onclick')).toBe(false);
    expect(root.querySelector('a')?.hasAttribute('href')).toBe(false);
  });

  it('copies the cue sheet the bar puts in the document head, once it is there', async () => {
    const sheet = document.createElement('style');
    sheet.setAttribute('data-mattebox-cue', '');
    sheet.textContent = 'mattebox-player > video::cue { font-size: 75%; }';
    document.head.append(sheet);
    await new Promise((resolve) => setTimeout(resolve, 0));
    const copy = preview.shadowRoot?.querySelector('style[data-mattebox-cue]');
    expect(copy?.textContent).toBe(sheet.textContent);
    // A second appearance is not copied twice.
    document.head.append(sheet.cloneNode(true));
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(preview.shadowRoot?.querySelectorAll('style[data-mattebox-cue]')).toHaveLength(1);
  });

  it('finds a cue sheet that was there before it', () => {
    const sheet = document.createElement('style');
    sheet.setAttribute('data-mattebox-cue', '');
    document.head.append(sheet);
    const late = document.createElement('mbe-preview');
    document.body.append(late);
    expect(late.shadowRoot?.querySelector('style[data-mattebox-cue]')).not.toBeNull();
    late.remove();
  });
});
