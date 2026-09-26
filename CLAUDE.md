# AI Samrat website

Astro 7 static site replacing the Wix site at aisamrat.com. Start with `README.md` for context and open items.

## Rules
- **Design system:** `design-system/ai-samrat/MASTER.md` (local only, git-ignored; ask for it if it's missing) is the source of truth for colour, type, spacing, motion and components. Tokens live in `src/styles/global.css`. Don't add colours or fonts outside it.
- **Content:** all copy and company facts live in `src/data/site.ts`. Company facts are verified in `assets/company_profile.md`. Never invent clients, stats, testimonials or logos (MASTER.md §1, §7).
- **Company name:** it's **AI Samrat**, never "IT Samrat".
- **Astro 7:** `compressHTML: true` is set deliberately (JSX whitespace mode drops spaces between inline elements). Close every HTML tag, because the Rust compiler errors on unclosed tags.
- **Two-tone headings:** keep the `{' '}` between the main text and the `.tone-2` span so the accessible text doesn't run together.
- **Hero vortex** (`src/components/HeroVortex.astro`): WebGL 1. Vertex and fragment shaders use different float precision, so never share a uniform name between them (it fails to link). If the hero copy changes, re-check its contrast over the strands (scrim and halo are in `src/pages/index.astro`).
- **Dev server on Windows:** it can serve stale CSS after files are rewritten outside the editor. Restart it if styles don't update.

## Commands
- `npm run dev`: dev server on http://localhost:4321 (also `site` in `.claude/launch.json`)
- `npx astro check`: type-check (should report 0 errors)
- `npm run build`: static output in `dist/`
- Design scan: `impeccable detect <file>`. Two advisories are known and accepted: the hatched band stripes and "em-dashes" on the design preview.
