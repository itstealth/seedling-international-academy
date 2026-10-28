const BASE_URL = 'https://cambridge.seedlingschools.com/cms/wp-json/wp/v2';

export interface WPPost {
  id: number;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export async function getPosts(perPage = 20): Promise<WPPost[]> {
  const res = await fetch(`${BASE_URL}/posts?per_page=${perPage}&_embed`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}&_embed`);
  const posts: WPPost[] = await res.json();
  return posts[0] ?? null;
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${BASE_URL}/categories?per_page=50`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function getPostsByCategory(categoryId: number, perPage = 20): Promise<WPPost[]> {
  const res = await fetch(`${BASE_URL}/posts?categories=${categoryId}&per_page=${perPage}&_embed`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export function getMediaUrl(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? '/placeholder.jpg';
}

export function getPostCategories(post: WPPost): string[] {
  return post._embedded?.['wp:term']?.[0]?.map(t => decodeEntities(t.name)) ?? [];
}

/**
 * WordPress returns `title.rendered`, `excerpt.rendered` and term names as HTML,
 * so they carry entities: every excerpt ends in `&hellip;` and titles use `&#8211;`
 * for en dashes. Rendering those as a React text child escapes the ampersand, so
 * the visitor literally reads "&#8211;". Decode before displaying.
 *
 * Deliberately a single pass: `&amp;#8211;` decodes to the text `&#8211;`, which is
 * what the author actually wrote, rather than being decoded twice into a dash.
 */
const NAMED_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'",
  nbsp: '\u00A0', shy: '\u00AD',
  ndash: '\u2013', mdash: '\u2014', hellip: '\u2026',
  lsquo: '\u2018', rsquo: '\u2019', sbquo: '\u201A',
  ldquo: '\u201C', rdquo: '\u201D', bdquo: '\u201E',
  laquo: '\u00AB', raquo: '\u00BB', bull: '\u2022', middot: '\u00B7',
  times: '\u00D7', minus: '\u2212', deg: '\u00B0', prime: '\u2032', Prime: '\u2033',
  copy: '\u00A9', reg: '\u00AE', trade: '\u2122',
  frac12: '\u00BD', frac14: '\u00BC', frac34: '\u00BE',
  eacute: '\u00E9', egrave: '\u00E8', agrave: '\u00E0', ccedil: '\u00E7',
  auml: '\u00E4', ouml: '\u00F6', uuml: '\u00FC', szlig: '\u00DF',
  euro: '\u20AC', pound: '\u00A3', rupee: '\u20B9',
};

export function decodeEntities(input: string): string {
  if (!input) return '';
  return input.replace(
    /&(#[0-9]+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g,
    (match, body: string) => {
      if (body.charCodeAt(0) === 35 /* # */) {
        const hex = body[1] === 'x' || body[1] === 'X';
        const code = parseInt(hex ? body.slice(2) : body.slice(1), hex ? 16 : 10);
        if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return match;
        // lone surrogates would throw
        if (code >= 0xd800 && code <= 0xdfff) return match;
        try {
          return String.fromCodePoint(code);
        } catch {
          return match;
        }
      }
      return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, body)
        ? NAMED_ENTITIES[body]
        : match;
    }
  );
}

/** Strip tags, then decode entities, so the result is plain display text. */
export function stripHtml(html: string): string {
  if (!html) return '';
  return decodeEntities(html.replace(/<[^>]*>/g, '')).trim();
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}