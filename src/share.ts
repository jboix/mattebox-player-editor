/**
 * A workspace in a URL: the documents as JSON, deflated, in base64url, after
 * the hash. The hash never reaches a server, so a link shares a theme and
 * nothing else does. `CompressionStream` is the browser's own deflate, so
 * the page carries no compressor.
 */
import { asWorkspace, type Workspace } from './workspace.js';

export const SHARE_PREFIX = '#share=';

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(text: string): Uint8Array {
  const padded = text
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(Math.ceil(text.length / 4) * 4, '=');
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

async function pipe(bytes: Uint8Array, stream: ReadableWritablePair): Promise<Uint8Array> {
  const source = new ReadableStream({
    start(controller) {
      controller.enqueue(bytes);
      controller.close();
    },
  });
  return new Uint8Array(await new Response(source.pipeThrough(stream)).arrayBuffer());
}

/** The hash for a workspace, prefix included. */
export async function encodeShare(workspace: Workspace): Promise<string> {
  const json = new TextEncoder().encode(JSON.stringify(workspace));
  const deflated = await pipe(json, new CompressionStream('deflate-raw'));
  return SHARE_PREFIX + toBase64Url(deflated);
}

/** The workspace a hash carries, or null: not a share hash, or not a workspace. */
export async function decodeShare(hash: string): Promise<Workspace | null> {
  if (!hash.startsWith(SHARE_PREFIX)) return null;
  try {
    const deflated = fromBase64Url(hash.slice(SHARE_PREFIX.length));
    const json = await pipe(deflated, new DecompressionStream('deflate-raw'));
    return asWorkspace(JSON.parse(new TextDecoder().decode(json)));
  } catch {
    return null;
  }
}
