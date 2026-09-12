import { describe, expect, it } from 'vitest';
import { decodeShare, encodeShare, SHARE_PREFIX } from '../../src/share.js';

const workspace = {
  css: 'mattebox-player { --mbx-accent: #e0543c; }\n',
  html: '<mattebox-player src="https://example.com/a.m3u8" controls="custom"></mattebox-player>\n',
  preset: 'round',
};

describe('share', () => {
  it('carries a workspace through a hash and back', async () => {
    const hash = await encodeShare(workspace);
    expect(hash.startsWith(SHARE_PREFIX)).toBe(true);
    // base64url: no padding, no characters a URL would encode.
    expect(hash.slice(SHARE_PREFIX.length)).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(await decodeShare(hash)).toEqual(workspace);
  });

  it('is shorter than the JSON it carries', async () => {
    const long = { ...workspace, css: workspace.css.repeat(40) };
    const hash = await encodeShare(long);
    expect(hash.length).toBeLessThan(JSON.stringify(long).length);
  });

  it('reads anything that is not a share hash as nothing', async () => {
    expect(await decodeShare('')).toBeNull();
    expect(await decodeShare('#row=2')).toBeNull();
    expect(await decodeShare(`${SHARE_PREFIX}not-deflate-at-all`)).toBeNull();
  });

  it('reads a hash that carries something other than a workspace as nothing', async () => {
    const hash = await encodeShare({ css: 'x', html: 'y', preset: 'z' });
    // Same encoding, different shape: a number where a string goes.
    const forged = (await encodeShare({ ...workspace, css: 1 as unknown as string })) ?? hash;
    expect(await decodeShare(forged)).toBeNull();
  });
});
