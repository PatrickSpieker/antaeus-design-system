# Antaeus design system

Shared guidance, design tokens, font names, and logos for agents building Antaeus web and iOS products.

Start at [index.md](index.md). Published entry point: [design system index](https://antaeus-design-system.patrick-64c.workers.dev/index.md).

## Using the system

Agents start with [SKILL.md](SKILL.md) and fetch the focused guidance needed for their task. [tokens.json](tokens.json) is authoritative; the [token contract](guidance/tokens.md) defines types, aliases, and platform adaptation.

- **Web:** use the generated `/tokens.css` custom properties or consume JSON directly. CSS supplies values only; components and application styles live in the consuming project.
- **iOS:** use JSON dimensions as point baselines, adapted for native controls, Dynamic Type, and device safe areas.
- **Fonts and logos:** source fonts in the consuming project and use the approved [brand assets](guidance/assets.md). The SVG wordmark uses live text and depends on font availability.

## Current design direction

- [Typography](guidance/typography.md): IBM Plex Sans headings, Inter body and controls, IBM Plex Mono metrics. `font-serif` is removed; `font-sans` aliases `font-body`.
- [Color](guidance/color.md): bone pages and cards, plum primary actions, warm-ink shadows, and a 24% warm-ink scrim for menus and sheets.
- [Layout](guidance/layout.md): one primary action per screen, shared onboarding spacing, 48-unit control baselines, and 44-unit minimum hit areas. Tab controls add the device's actual safe area.
- [Accessibility](guidance/layout.md#accessibility-baseline): readable text, stronger input borders, solid focus rings, exposed selection state, and accessible sizing.
- [Motion](guidance/motion.md): 140ms hover and 80ms press feedback, with reduced-motion adaptation and no zooming entrances or exits.

## Authoring

- Edit [tokens.json](tokens.json) for design values; CSS is generated, never maintained separately.
- Edit focused documents in [guidance](guidance/brand.md) for design intent and platform adaptation.
- Keep the [index](index.md) short and published links relative.
- Add new published files to the allowlist in [scripts/build.mjs](scripts/build.mjs).
- Keep only approved logos in `assets/`. No font binaries, examples, components, previews, or app prototypes.
- [CONTEXT.md](CONTEXT.md) records scope and agreed decisions; it is not published.

## Build and verify

Install dependencies, run tests, and build:

```bash
npm ci
npm test
npm run build
```

Use `npm run dev` to build and serve locally with Wrangler.

The build validates tokens and local publication links before replacing `dist/`, copies an explicit publication allowlist, and generates `dist/tokens.css`. Node's built-in tests cover invalid tokens, aliases, CSS generation, publication boundaries, repeatable builds, and agreed design and contrast rules.

## Cloudflare

Keep the build command `bash build-static.sh` and deploy command `npx wrangler deploy`. The wrapper delegates to the same Node build used locally. Pull-request builds use `npx wrangler preview`, enabled by the `previews` block in `wrangler.jsonc`. Pushes to the connected production branch publish the latest files; request-time application code is unnecessary.

Published routes: `/index.md`, `/SKILL.md`, `/tokens.json`, `/tokens.css`, `/guidance/*.md`, and the logos linked from the assets guide. `/` redirects to `/index.md`. All assets have public CORS and a five-minute browser cache. Unknown files return 404.

Only the latest definitions are published; historical definitions remain in Git. The former component examples, previews, app prototypes, `/latest/` routes, and manifest have been removed. There are no release archives or compatibility routes.
