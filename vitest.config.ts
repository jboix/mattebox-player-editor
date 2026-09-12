import { defineConfig } from 'vitest/config';

/** The presets import their stylesheets as text; Vitest hands back an empty module for CSS unless told to process it. */
const css = true;

// Two tiers. `node` runs the modules that touch no DOM; `dom` runs the
// elements under jsdom with Monaco and the player mocked, since neither
// runs there and neither is what the tests check.
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: ['src/main.ts', 'src/monaco.ts'],
      reporter: ['text', 'json-summary', 'json'],
    },
    projects: [
      {
        test: {
          name: 'node',
          environment: 'node',
          css,
          include: ['test/node/**/*.test.ts'],
        },
      },
      {
        test: {
          name: 'dom',
          environment: 'jsdom',
          css,
          include: ['test/dom/**/*.test.ts'],
        },
      },
    ],
  },
});
