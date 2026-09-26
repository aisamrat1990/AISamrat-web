# AI Samrat: Website Redesign

Replacing the Wix site at https://www.aisamrat.com with a custom black-theme site, built with **Astro 7** as static HTML.

## Run it

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. `npm run build` writes the static site to `dist/`, ready for any static host (Vercel, Cloudflare Pages, Netlify).

## Site

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Services index and 5 service pages | `src/pages/services/index.astro`, `src/pages/services/[slug].astro` |
| About · Careers · Contact · 404 | `src/pages/*.astro` |
| All copy and company facts | **`src/data/site.ts`** (edit here, not in pages) |
| Tokens and shared styles | `src/styles/global.css` |
| Components | `src/components/` (Nav, Footer, HeroVortex, ServiceCard, Approach, Leader, CtaBand, ContactForm…) |

Built in: sitemap (`/sitemap-index.xml`), `robots.txt`, Organization structured data, Open Graph image (`public/og.png`), favicons, and redirects from the old Wix URLs (`/about-us`, `/our-services`, `/contact-us`).

## Files

| File | What's in it |
|---|---|
| [`assets/company_profile.md`](assets/company_profile.md) | Legal info, address, services, mission, values, logo colours and open questions |

### Local only (git-ignored `references/` and `design-system/`)

Reference material and the design rulebook stay on this machine and are not committed.

| File | What's in it |
|---|---|
| `design-system/ai-samrat/MASTER.md` | **Design system, the main reference.** Colours (contrast-checked), type, spacing, motion, components, imagery rules, page structure, pre-delivery checklist |
| `design-system/ai-samrat/preview.html` | The original static mockup from before the build (serve it with the `static` config in `.claude/launch.json`) |
| `references/ai_samrat_old_site.md` | Old Wix site: sitemap, content, what was wrong |
| `references/sample_1_qronos.md` | Black-theme reference (paid 21st.dev template) |
| `references/sample_2_baygrape.md` | IT-services reference (real company site) |
| `references/frames/` | Key screenshots pulled from each recording |
| `references/*.mp4` | The three screen recordings |
| `references/source-assets/` | Signboard PDF, company infographic, original director photo, logo working files (`brand/`) |

## Design direction (approved 2026-09-26)

- **From Qronos (sample 1):** the look. Black, monochrome, two-tone headlines, hairline grid, hatched separators, mono labels, and an animated strand-vortex hero drawn with WebGL (`src/components/HeroVortex.astro`, no video file).
- **From BayGrape (sample 2):** the structure. Services, a proper contact page, careers.
- **From the logo:** the one accent colour, cyan `#3BC0EF`.
- **Type:** Anek Latin (Ek Type, Indian foundry) with JetBrains Mono for labels, self-hosted via Fontsource.

## Before launch

- [x] Name confirmed: **AI Samrat** (not IT Samrat)
- [x] Tech stack: Astro
- [ ] **Review the drafted service page copy** in `src/data/site.ts` (`includes` lists and intros are written from the old site and infographic wording)
- [ ] **Contact form endpoint:** set `PUBLIC_FORM_ENDPOINT` (e.g. Formspree, Web3Forms, or a serverless function). Until then, submitting opens the visitor's email app with the message pre-filled
- [ ] Logo as **SVG** from the designer. The current PNGs are stand-ins built from the signboard raster
- [x] MD headshot (`src/assets/people/dvs-prathap-babu.avif`, shown in black and white per the design system)
- [ ] Phone number and social profile URLs (add to `company` in `src/data/site.ts`; social links appear in the footer automatically)
- [ ] Real clients, industries or numbers, for an Industries/Proof section (hidden until these exist)
- [ ] Open roles, if any (`openRoles` in `src/data/site.ts`)
- [ ] Whether to add an "AI & Automation" service
- [ ] A privacy policy page, if the form will store data with a third-party service
- [ ] Hosting and DNS switch from Wix
