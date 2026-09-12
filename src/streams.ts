/**
 * The streams the toolbar offers, one per kind the controls take a shape
 * for: what the picture is, whether there is one, whether the stream is
 * live, and whether it can be seeked back. The format is not the point.
 * The chosen one is written into the markup, so the pane shows what plays.
 *
 * The posters are the Shaka demo's icons, and the chapters are the
 * player demo's tracks, hosted with it: a track from another origin needs
 * `crossorigin` on the player.
 */
import type { Source } from './markup.js';

const ICONS = 'https://storage.googleapis.com/shaka-asset-icons';
const CHAPTERS = 'https://jboix.github.io/mattebox-player/chapters';

export interface Stream extends Source {
  readonly label: string;
}

export const STREAMS: readonly Stream[] = [
  {
    label: 'Video, with chapters',
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    poster: `${ICONS}/tears_of_steel.png`,
    chapters: `${CHAPTERS}/tears-of-steel.vtt`,
    crossorigin: 'anonymous',
  },
  {
    label: 'Video with DRM',
    url: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
    licenseUrl: 'https://cwip-shaka-proxy.appspot.com/no_auth',
    poster: `${ICONS}/angel_one.png`,
  },
  {
    label: 'Audio only',
    url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/gear0/prog_index.m3u8',
    poster: `${ICONS}/audio_only.png`,
  },
  {
    label: 'Live',
    url: 'https://livesim2.dashif.org/livesim2/testpic_2s/Manifest.mpd',
  },
  {
    label: 'Live with DVR',
    url: 'https://rtsinfo-d.akamaized.net/out/v1/lsvs/rts-info/cmaf/hls-master.m3u8?dw=7201',
  },
];

/** The stream whose URL the markup names, or undefined for one of the page's own. */
export function streamByUrl(url: string): Stream | undefined {
  return STREAMS.find((stream) => stream.url === url);
}
