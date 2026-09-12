import { defineConfig } from 'vite';

/** The engine's presets the player loads by name, each a dynamic import of its own. */
const PRESETS = [
  'full',
  'dual',
  'dual-drm',
  'dual-ts',
  'dual-ts-drm',
  'hls',
  'hls-drm',
  'hls-ts',
  'hls-ts-drm',
  'dash',
  'dash-drm',
  'kernel',
].map((name) => `mattebox/presets/${name}`);

// The editor page. Pass `--base` for the subpath the hosted build is served
// from. The player picks its engine preset with a dynamic import; named
// here so Vite bundles them up front rather than finding them on first
// play and reloading the page.
export default defineConfig({
  optimizeDeps: { include: ['mattebox', ...PRESETS, 'mattebox/stages/eme-core'] },
  build: {
    // Monaco needs a modern target; the player and the engine run on less,
    // but the page they run in here is the editor's.
    target: 'es2022',
    // Monaco's editor is one chunk of about 2.7 MB minified, by its nature;
    // the limit is raised so the build does not warn about what it cannot
    // change.
    chunkSizeWarningLimit: 3000,
  },
});
