/**
 * The markup document: the `<mattebox-player>` and the controls the page
 * places inside it. The preview parses it; the toolbar rewrites the source
 * attributes on it. The text stays the one truth, so what the pane shows is
 * what the preview plays.
 */

/** A source for the player, as the attributes the element takes. */
export interface Source {
  readonly url: string;
  /** Only where the extension does not say it. */
  readonly type?: string;
  /** The license server for encrypted streams. */
  readonly licenseUrl?: string;
  /** The picture before playback, forwarded onto the video. */
  readonly poster?: string;
  /** A WebVTT chapters track, for the seek bar and the chapters menu. */
  readonly chapters?: string;
  /** `anonymous` when the chapters track is on another origin, which is the only way a track loads from one. */
  readonly crossorigin?: 'anonymous';
}

const OPENING_TAG = /<mattebox-player(\s[^>]*)?>/i;
const SOURCE_ATTRIBUTES = [
  'src',
  'type',
  'license-url',
  'poster',
  'chapters',
  'crossorigin',
] as const;

function attributePattern(name: string): RegExp {
  return new RegExp(`\\s+${name}\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>]+)`, 'gi');
}

function quote(value: string): string {
  return `"${value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"`;
}

function unquote(value: string): string {
  const inner =
    (value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))
      ? value.slice(1, -1)
      : value;
  return inner.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}

/** The source the markup names, or null when it has no player or no `src`. */
export function readSource(html: string): Source | null {
  const tag = OPENING_TAG.exec(html);
  if (tag === null) return null;
  const attributes = tag[1] ?? '';
  const read = (name: string): string | undefined => {
    const match = attributePattern(name).exec(attributes);
    return match === undefined || match === null
      ? undefined
      : unquote(match[0].replace(/^\s+[\w-]+\s*=\s*/, ''));
  };
  const url = read('src');
  if (url === undefined) return null;
  const type = read('type');
  const licenseUrl = read('license-url');
  const poster = read('poster');
  const chapters = read('chapters');
  const crossorigin = read('crossorigin');
  return {
    url,
    ...(type === undefined ? {} : { type }),
    ...(licenseUrl === undefined ? {} : { licenseUrl }),
    ...(poster === undefined ? {} : { poster }),
    ...(chapters === undefined ? {} : { chapters }),
    ...(crossorigin === 'anonymous' ? { crossorigin } : {}),
  };
}

/**
 * The markup with the source attributes replaced on the player's opening
 * tag: `src`, and `type`, `license-url`, `poster`, `chapters` and
 * `crossorigin` when the source has them, the old ones gone either way.
 * Everything else in the text is untouched. A markup with no player gets
 * one, in front.
 */
export function withSource(html: string, source: Source): string {
  const tag = OPENING_TAG.exec(html);
  const written = [` src=${quote(source.url)}`];
  if (source.type !== undefined) written.push(` type=${quote(source.type)}`);
  if (source.licenseUrl !== undefined) written.push(` license-url=${quote(source.licenseUrl)}`);
  if (source.poster !== undefined) written.push(` poster=${quote(source.poster)}`);
  if (source.chapters !== undefined) written.push(` chapters=${quote(source.chapters)}`);
  if (source.crossorigin !== undefined) written.push(` crossorigin=${quote(source.crossorigin)}`);
  if (tag === null) return `<mattebox-player${written.join('')}></mattebox-player>\n${html}`;
  let attributes = tag[1] ?? '';
  for (const name of SOURCE_ATTRIBUTES) attributes = attributes.replace(attributePattern(name), '');
  const rest = attributes.trimEnd();
  const opening = `<mattebox-player${written.join('')}${rest === '' ? '' : ` ${rest.trimStart()}`}>`;
  return html.slice(0, tag.index) + opening + html.slice(tag.index + tag[0].length);
}

/**
 * The markup as nodes for the preview. A share link carries markup someone
 * else wrote and the preview lives in the page, so what could run is
 * dropped: scripts, event handler attributes, and `javascript:` URLs. The
 * player and its controls take none of those.
 */
export function parseMarkup(html: string): DocumentFragment {
  const template = document.createElement('template');
  template.innerHTML = html;
  const fragment = template.content;
  for (const script of fragment.querySelectorAll('script')) script.remove();
  for (const element of fragment.querySelectorAll('*')) {
    for (const attribute of [...element.attributes]) {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();
      if (name.startsWith('on') || name === 'srcdoc' || value.startsWith('javascript:')) {
        element.removeAttribute(attribute.name);
      }
    }
  }
  return fragment;
}
