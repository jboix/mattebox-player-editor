import { describe, expect, it } from 'vitest';
import { readSource, withSource } from '../../src/markup.js';

const markup = `<!-- a comment -->
<mattebox-player src="https://a.example/x.m3u8" controls="custom" muted>
  <mbx-control-bar></mbx-control-bar>
</mattebox-player>
`;

describe('readSource', () => {
  it('reads the source attributes off the opening tag', () => {
    expect(readSource(markup)).toEqual({ url: 'https://a.example/x.m3u8' });
    const drm = withSource(markup, {
      url: 'https://b.example/y.mpd',
      type: 'application/dash+xml',
      licenseUrl: 'https://license.example/',
    });
    expect(readSource(drm)).toEqual({
      url: 'https://b.example/y.mpd',
      type: 'application/dash+xml',
      licenseUrl: 'https://license.example/',
    });
  });

  it('round-trips a poster, a chapters track and crossorigin', () => {
    const full = withSource(markup, {
      url: 'https://b.example/y.m3u8',
      poster: 'https://b.example/poster.png',
      chapters: 'https://c.example/chapters.vtt',
      crossorigin: 'anonymous',
    });
    expect(full).toContain('poster="https://b.example/poster.png"');
    expect(full).toContain('chapters="https://c.example/chapters.vtt"');
    expect(full).toContain('crossorigin="anonymous"');
    expect(readSource(full)).toEqual({
      url: 'https://b.example/y.m3u8',
      poster: 'https://b.example/poster.png',
      chapters: 'https://c.example/chapters.vtt',
      crossorigin: 'anonymous',
    });
    const plain = withSource(full, { url: 'https://d.example/z.m3u8' });
    expect(plain).not.toContain('poster=');
    expect(plain).not.toContain('chapters=');
    expect(plain).not.toContain('crossorigin=');
  });

  it('accepts single quotes and no quotes, and unescapes what withSource escaped', () => {
    expect(readSource("<mattebox-player src='https://a.example/?a=1&b=2'>")).toEqual({
      url: 'https://a.example/?a=1&b=2',
    });
    expect(readSource('<mattebox-player src=https://a.example/x>')?.url).toBe(
      'https://a.example/x',
    );
    const written = withSource('<mattebox-player></mattebox-player>', {
      url: 'https://a.example/?q="x"&y',
    });
    expect(readSource(written)?.url).toBe('https://a.example/?q="x"&y');
  });

  it('is null without a player or without a src', () => {
    expect(readSource('<video></video>')).toBeNull();
    expect(readSource('<mattebox-player controls="custom"></mattebox-player>')).toBeNull();
  });
});

describe('withSource', () => {
  it('replaces the source attributes and keeps every other one, in place', () => {
    const next = withSource(markup, { url: 'https://b.example/y.mpd' });
    expect(next).toBe(`<!-- a comment -->
<mattebox-player src="https://b.example/y.mpd" controls="custom" muted>
  <mbx-control-bar></mbx-control-bar>
</mattebox-player>
`);
  });

  it('drops a type and a license the new source does not have', () => {
    const drm = withSource(markup, {
      url: 'https://b.example/y.mpd',
      licenseUrl: 'https://l.example/',
    });
    expect(drm).toContain('license-url="https://l.example/"');
    const plain = withSource(drm, { url: 'https://c.example/z.m3u8' });
    expect(plain).not.toContain('license-url');
    expect(plain).toContain(
      '<mattebox-player src="https://c.example/z.m3u8" controls="custom" muted>',
    );
  });

  it('touches only the first player', () => {
    const two = `${markup}<mattebox-player src="https://second.example/"></mattebox-player>`;
    const next = withSource(two, { url: 'https://b.example/' });
    expect(next).toContain('src="https://second.example/"');
    expect(next.indexOf('https://b.example/')).toBeLessThan(
      next.indexOf('https://second.example/'),
    );
  });

  it('puts a player in front of markup that has none', () => {
    expect(withSource('<p>nothing</p>', { url: 'https://a.example/' })).toBe(
      '<mattebox-player src="https://a.example/"></mattebox-player>\n<p>nothing</p>',
    );
  });
});
