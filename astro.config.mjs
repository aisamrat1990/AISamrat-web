// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aisamrat.com',
  // Astro 7 defaults to JSX whitespace rules, which drop spaces between inline
  // elements. Keep HTML semantics so copy like `text <a>link</a>` renders as written.
  compressHTML: true,
  integrations: [sitemap()],
  // Keep links to the old Wix pages working.
  redirects: {
    '/about-us': '/about/',
    '/our-services': '/services/',
    '/contact-us': '/contact/',
  },
});
