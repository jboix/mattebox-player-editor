import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/** Monaco, as far as the element uses it: models with a value, an editor with one model and a view state. */
function fakeMonaco() {
  const listeners: Array<() => void> = [];
  const editor = {
    model: null as unknown,
    options: {} as Record<string, unknown>,
    viewStates: 0,
    setModel(model: unknown) {
      this.model = model;
    },
    getModel() {
      return this.model;
    },
    saveViewState() {
      this.viewStates += 1;
      return { state: this.viewStates };
    },
    restoreViewState: vi.fn(),
    updateOptions(options: Record<string, unknown>) {
      Object.assign(this.options, options);
    },
    onDidChangeModelContent(listener: () => void) {
      listeners.push(listener);
    },
    focus: vi.fn(),
    dispose: vi.fn(),
  };
  return {
    editor,
    /** What a keystroke does: the model changes, the editor tells. */
    type(model: { value: string }, text: string) {
      model.value += text;
      for (const listener of listeners) listener();
    },
    monaco: {
      Uri: { parse: (uri: string) => uri },
      editor: {
        create: vi.fn((_container: HTMLElement, options: Record<string, unknown>) => {
          Object.assign(editor.options, options);
          return editor;
        }),
        createModel: vi.fn((value: string, language: string, uri: string) => {
          const model = {
            value,
            language,
            uri,
            getValue() {
              return this.value;
            },
            setValue(next: string) {
              this.value = next;
              for (const listener of listeners) listener();
            },
          };
          return model;
        }),
      },
    },
  };
}

const fake = fakeMonaco();
vi.mock('../../src/monaco.js', () => ({ monaco: fake.monaco }));

const { MbeCodeEditor } = await import('../../src/elements/code-editor.js');
MbeCodeEditor.define();

let element: InstanceType<typeof MbeCodeEditor>;

beforeEach(() => {
  element = document.createElement('mbe-code-editor') as InstanceType<typeof MbeCodeEditor>;
  document.body.append(element);
});

afterEach(() => {
  element.remove();
});

describe('<mbe-code-editor>', () => {
  it('creates one editor in light DOM, with no minimap', () => {
    expect(element.shadowRoot).toBeNull();
    expect(fake.monaco.editor.create).toHaveBeenCalledWith(
      element,
      expect.objectContaining({ minimap: { enabled: false } }),
    );
  });

  it('opens documents as models, and shows the first', () => {
    element.open('css', 'css', 'a { }');
    element.open('html', 'html', '<p>');
    expect(element.active).toBe('css');
    expect(fake.editor.getModel()).toMatchObject({ language: 'css', uri: 'inmemory://mbe/css' });
    expect(element.value('html')).toBe('<p>');
    expect(() => element.value('json')).toThrow('json is not open');
  });

  it('switches documents and brings a view state back', () => {
    element.open('css', 'css', 'a { }');
    element.open('html', 'html', '<p>');
    element.show('html');
    expect(element.active).toBe('html');
    expect(fake.editor.getModel()).toMatchObject({ language: 'html' });
    // The first switch saved the stylesheet's state; coming back restores it.
    element.show('css');
    expect(fake.editor.restoreViewState).toHaveBeenLastCalledWith({ state: 1 });
    element.show('html');
    expect(fake.editor.restoreViewState).toHaveBeenLastCalledWith({ state: 2 });
    // Showing what is up already saves nothing and restores nothing.
    element.show('html');
    expect(fake.editor.restoreViewState).toHaveBeenCalledTimes(2);
    expect(() => element.show('json')).toThrow('json is not open');
  });

  it('reports a keystroke as a change of the document that is up, and a rewrite by the page as nothing', () => {
    const changes: Array<{ id: string; value: string }> = [];
    element.addEventListener('document-change', (event) => {
      changes.push((event as CustomEvent<{ id: string; value: string }>).detail);
    });
    element.open('css', 'css', 'a { }');
    fake.type(fake.editor.getModel() as { value: string }, ' b { }');
    expect(changes).toEqual([{ id: 'css', value: 'a { } b { }' }]);
    element.open('css', 'css', 'c { }');
    expect(changes).toHaveLength(1);
    expect(element.value('css')).toBe('c { }');
  });

  it('follows the room', () => {
    element.theme = true;
    expect(fake.editor.options.theme).toBe('vs-dark');
    element.theme = false;
    expect(fake.editor.options.theme).toBe('vs');
  });

  it('disposes the editor when it leaves the page', () => {
    element.remove();
    expect(fake.editor.dispose).toHaveBeenCalled();
  });
});
