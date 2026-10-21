/**
 * Monaco, trimmed to what the editor uses. The package's main entry
 * registers every language it knows and every editor feature; this entry
 * takes the api, the two languages (their syntax and their language
 * services) and the features a stylesheet and a markup pane need. The list
 * is the editor's feature set: to add a feature, add its line.
 *
 * The workers are Vite workers, one per language service and the editor
 * worker for the rest, so the page never fetches Monaco's own loader.
 */
import * as monaco from 'monaco-editor/editor/editor.api.js';
import 'monaco-editor/languages/definitions/css/register.js';
import 'monaco-editor/languages/definitions/html/register.js';
import 'monaco-editor/languages/features/css/register.js';
import 'monaco-editor/languages/features/html/register.js';
import 'monaco-editor/editor/browser/coreCommands.js';
import 'monaco-editor/editor/browser/widget/codeEditor/codeEditorWidget.js';
import 'monaco-editor/editor/contrib/bracketMatching/browser/bracketMatching.js';
import 'monaco-editor/editor/contrib/caretOperations/browser/caretOperations.js';
import 'monaco-editor/editor/contrib/clipboard/browser/clipboard.js';
import 'monaco-editor/editor/contrib/colorPicker/browser/colorPickerContribution.js';
import 'monaco-editor/editor/contrib/comment/browser/comment.js';
import 'monaco-editor/editor/contrib/contextmenu/browser/contextmenu.js';
import 'monaco-editor/editor/contrib/cursorUndo/browser/cursorUndo.js';
import 'monaco-editor/editor/contrib/dnd/browser/dnd.js';
import 'monaco-editor/editor/contrib/find/browser/findController.js';
import 'monaco-editor/editor/contrib/folding/browser/folding.js';
import 'monaco-editor/editor/contrib/format/browser/formatActions.js';
import 'monaco-editor/editor/contrib/hover/browser/hoverContribution.js';
import 'monaco-editor/editor/contrib/indentation/browser/indentation.js';
import 'monaco-editor/editor/contrib/linesOperations/browser/linesOperations.js';
import 'monaco-editor/editor/contrib/links/browser/links.js';
import 'monaco-editor/editor/contrib/multicursor/browser/multicursor.js';
import 'monaco-editor/editor/contrib/smartSelect/browser/smartSelect.js';
import 'monaco-editor/editor/contrib/snippet/browser/snippetController2.js';
import 'monaco-editor/editor/contrib/suggest/browser/suggestController.js';
import 'monaco-editor/editor/contrib/tokenization/browser/tokenization.js';
import 'monaco-editor/editor/contrib/wordHighlighter/browser/wordHighlighter.js';
import 'monaco-editor/editor/contrib/wordOperations/browser/wordOperations.js';
import 'monaco-editor/editor/common/standaloneStrings.js';
import 'monaco-editor/features/find/register.js';
// The icon font, by path: the package's exports map appends `.js` to every
// subpath, so a stylesheet cannot be named through it.
import '../node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.css';
import '../node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon-modifiers.css';
import EditorWorker from 'monaco-editor/editor/editor.worker.js?worker';
import CssWorker from 'monaco-editor/language/css/css.worker.js?worker';
import HtmlWorker from 'monaco-editor/language/html/html.worker.js?worker';

const WORKERS: Readonly<Record<string, new () => Worker>> = { css: CssWorker, html: HtmlWorker };

self.MonacoEnvironment = {
  getWorker: (_id: string, label: string) => new (WORKERS[label] ?? EditorWorker)(),
};

// The page's two rooms, as editor themes: Monaco's own syntax colours over
// the page's panel, so the code pane is the same surface as the pane around it.
// Monaco's colours sit on white and black. On the panel some fall under the
// 4.5:1 of WCAG AA, so each of those is the nearest shade of its hue that
// reaches 4.6:1 on the panel and on the highlighted line. The last line
// number is not dimmed, for the same reason.
monaco.editor.defineTheme('mattebox-light', {
  base: 'vs',
  inherit: true,
  rules: [
    { token: 'attribute.name', foreground: 'd70000' },
    { token: 'metatag.content.html', foreground: 'd70000' },
    { token: 'number', foreground: '087a50' },
    { token: 'attribute.value.number', foreground: '087a50' },
    { token: 'attribute.value.unit', foreground: '087a50' },
    { token: 'comment', foreground: '007c00' },
  ],
  colors: {
    'editor.background': '#fbf8f3',
    'editor.lineHighlightBackground': '#f3ede4',
    'editorLineNumber.foreground': '#6e6a64',
    'editorLineNumber.dimmedForeground': '#6e6a64',
    'editorLineNumber.activeForeground': '#2b2b30',
  },
});
monaco.editor.defineTheme('mattebox-dark', {
  base: 'vs-dark',
  inherit: true,
  rules: [{ token: 'comment', foreground: '799e6a' }],
  colors: {
    'editor.background': '#24242a',
    'editor.lineHighlightBackground': '#2b2b30',
    'editorLineNumber.foreground': '#97938c',
    'editorLineNumber.dimmedForeground': '#97938c',
    'editorLineNumber.activeForeground': '#f3ede4',
  },
});

export { monaco };
