// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The GitHub Pages test build lives in a subfolder: https://aisamrat1990.github.io/AISamrat-web/
// (set DEPLOY_TARGET=github-pages, see .github/workflows/deploy-pages.yml). Everything else is production.
const githubPages = process.env.DEPLOY_TARGET === 'github-pages';
const base = githubPages ? '/AISamrat-web' : '';

// https://astro.build/config
export default defineConfig({
  site: githubPages ? 'https://aisamrat1990.github.io' : 'https://www.aisamrat.com',
  base: base || '/',
  // Astro 7 defaults to JSX whitespace rules, which drop spaces between inline
  // elements. Keep HTML semantics so copy like `text <a>link</a>` renders as written.
  compressHTML: true,
  integrations: [sitemap()],
  // Keep links to the old Wix pages working. Astro doesn't add `base` to redirect targets, so we do.
  redirects: {
    '/about-us': `${base}/about/`,
    '/our-services': `${base}/services/`,
    '/contact-us': `${base}/contact/`,
  },
});
