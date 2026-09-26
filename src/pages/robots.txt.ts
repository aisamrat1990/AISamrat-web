import type { APIRoute } from 'astro';
import { noindexSite } from '../lib/paths';

// Test deployments (PUBLIC_NOINDEX=true) block all crawling; production allows it and lists the sitemap.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site);
  const body = noindexSite
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
