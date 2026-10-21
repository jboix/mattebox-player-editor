// `npm run check:a11y`: runs axe-core over the built page, for the WCAG 2.0,
// 2.1 and 2.2 rules at levels A and AA, in the light and the dark scheme and
// in each state a user opens: the page as it loads, the second tab, the
// Theme and View menus, and the confirm dialog. axe-core reaches into the
// preview player's shadow roots. Run after the build; it exits with an error
// when the page breaks a rule. Chromium runs it.
import axe from 'axe-core';
import { chromium } from 'playwright';
import { preview } from 'vite';

/** Every WCAG A and AA rule up to WCAG 2.2. */
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

/** How long Monaco and the preview take to draw, in milliseconds. */
const SETTLE_MS = 1500;

/** The states to check, each a step from the page as it loads. */
const STATES = [
  ['as it loads', async () => {}],
  ['player.html tab', (page) => page.click('[role="tab"][data-tab="html"]')],
  ['Theme menu', (page) => page.click('#theme-menu-button')],
  ['View menu', (page) => page.click('#view-menu-button')],
  [
    'confirm dialog',
    async (page) => {
      await page.click('#theme-menu-button');
      await page.click('#reset');
    },
  ],
];

/** The broken rules of the page now, one line per element. */
async function problemsOf(page) {
  await page.addScriptTag({ content: axe.source });
  const result = await page.evaluate(
    (tags) => window.axe.run(document, { runOnly: { type: 'tag', values: tags } }),
    TAGS,
  );
  return result.violations.flatMap((violation) =>
    violation.nodes.map((node) => {
      const summary = node.failureSummary?.split('\n').slice(1).join(' ').trim() ?? '';
      return `${violation.id} (${violation.impact}) ${node.target.join(' ')}: ${summary}`;
    }),
  );
}

const server = await preview({ preview: { port: 0, open: false }, logLevel: 'silent' });
const url = server.resolvedUrls?.local[0];
const browser = await chromium.launch();
const failures = [];
try {
  for (const scheme of ['light', 'dark']) {
    for (const [name, open] of STATES) {
      const context = await browser.newContext({
        colorScheme: scheme,
        viewport: { width: 1280, height: 800 },
      });
      const page = await context.newPage();
      await page.goto(url, { waitUntil: 'load' });
      await page.waitForTimeout(SETTLE_MS);
      await open(page);
      await page.waitForTimeout(300);
      for (const problem of await problemsOf(page))
        failures.push(`[${scheme}] ${name}: ${problem}`);
      await context.close();
    }
  }
} finally {
  await browser.close();
  await server.close();
}

if (failures.length > 0) {
  process.stderr.write(`${failures.join('\n')}\n${failures.length} accessibility problems.\n`);
  process.exit(1);
}
process.stdout.write('The page passes axe-core in every state and both schemes.\n');
