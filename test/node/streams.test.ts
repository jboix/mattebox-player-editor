import { describe, expect, it } from 'vitest';
import { STREAMS, streamByUrl } from '../../src/streams.js';

describe('the streams', () => {
  it('each have a label and an https URL, and no two share a URL', () => {
    for (const stream of STREAMS) {
      expect(stream.label).not.toBe('');
      expect(stream.url).toMatch(/^https:\/\//);
    }
    expect(new Set(STREAMS.map((stream) => stream.url)).size).toBe(STREAMS.length);
  });

  it('are found by URL', () => {
    const first = STREAMS[0];
    expect(first).toBeDefined();
    expect(streamByUrl(first?.url ?? '')).toBe(first);
    expect(streamByUrl('https://nowhere.example/')).toBeUndefined();
  });
});
