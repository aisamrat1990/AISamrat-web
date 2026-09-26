// Internal links must include Astro's `base`: "/AISamrat-web" on the GitHub Pages test build,
// nothing in production. Always build hrefs to our own pages and public files through this.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string): string => (path.startsWith('/') ? `${BASE}${path}` : path);

/** True for test deployments that must stay out of search engines (set PUBLIC_NOINDEX=true). */
export const noindexSite = import.meta.env.PUBLIC_NOINDEX === 'true';
