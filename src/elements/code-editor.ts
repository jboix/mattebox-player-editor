/**
 * `<mbe-code-editor>`: one Monaco editor over the documents the page opens,
 * one model each, switched by id with its view state kept. It renders in
 * light DOM on purpose: Monaco's colour picker, which a stylesheet pane
 * wants, does not work inside a shadow root
 * (microsoft/monaco-editor#3845).
 */
import { monaco } from '../monaco.js';

export interface DocumentChangeDetail {
  readonly id: string;
  readonly value: string;
}

interface Opened {
  readonly model: monaco.editor.ITextModel;
  viewState: monaco.editor.ICodeEditorViewState | null;
}

export class MbeCodeEditor extends HTMLElement {
  static define(): void {
    if (customElements.get('mbe-code-editor') === undefined) {
      customElements.define('mbe-code-editor', MbeCodeEditor);
    }
  }

  private editor: monaco.editor.IStandaloneCodeEditor | null = null;
  private readonly opened = new Map<string, Opened>();
  private shown: string | null = null;
  private dark = false;
  /** True while the page writes a document, so the write is not reported back as an edit. */
  private writing = false;

  connectedCallback(): void {
    if (this.editor !== null) return;
    this.editor = monaco.editor.create(this, {
      automaticLayout: true,
      minimap: { enabled: false },
      fixedOverflowWidgets: true,
      scrollBeyondLastLine: false,
      tabSize: 2,
      fontSize: 13,
      theme: this.dark ? 'vs-dark' : 'vs',
      model: null,
    });
    this.editor.onDidChangeModelContent(() => {
      if (this.writing || this.shown === null) return;
      const detail: DocumentChangeDetail = { id: this.shown, value: this.value(this.shown) };
      this.dispatchEvent(new CustomEvent<DocumentChangeDetail>('document-change', { detail }));
    });
    if (this.shown !== null) this.show(this.shown);
  }

  disconnectedCallback(): void {
    this.editor?.dispose();
    this.editor = null;
  }

  /** Opens a document, or rewrites it when it is open. The pane shows the first one opened until told otherwise. */
  open(id: string, language: string, value: string): void {
    const existing = this.opened.get(id);
    if (existing !== undefined) {
      this.write(existing.model, value);
      return;
    }
    const model = monaco.editor.createModel(
      value,
      language,
      monaco.Uri.parse(`inmemory://mbe/${id}`),
    );
    this.opened.set(id, { model, viewState: null });
    if (this.shown === null) this.show(id);
  }

  /** Puts a document up, keeping where the last one was scrolled and what it selected. */
  show(id: string): void {
    const next = this.opened.get(id);
    if (next === undefined) throw new Error(`${id} is not open`);
    const editor = this.editor;
    if (editor !== null && editor.getModel() === next.model) return;
    if (editor !== null) {
      const current = this.shown === null ? undefined : this.opened.get(this.shown);
      if (current !== undefined && current !== next) current.viewState = editor.saveViewState();
      editor.setModel(next.model);
      if (next.viewState !== null) editor.restoreViewState(next.viewState);
    }
    this.shown = id;
  }

  /** The document that is up, or null before any is. */
  get active(): string | null {
    return this.shown;
  }

  value(id: string): string {
    const opened = this.opened.get(id);
    if (opened === undefined) throw new Error(`${id} is not open`);
    return opened.model.getValue();
  }

  /** Light or dark, to follow the page. */
  set theme(dark: boolean) {
    this.dark = dark;
    this.editor?.updateOptions({ theme: dark ? 'vs-dark' : 'vs' });
  }

  override focus(): void {
    this.editor?.focus();
  }

  private write(model: monaco.editor.ITextModel, value: string): void {
    if (model.getValue() === value) return;
    this.writing = true;
    try {
      model.setValue(value);
    } finally {
      this.writing = false;
    }
  }
}
