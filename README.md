# Antaeus design system

Shared guidance, design tokens, font names, and logos for agents building Antaeus web and iOS products.

Start at [index.md](index.md). Published entry point: [design system index](https://antaeus-design-system.patrick-64c.workers.dev/index.md).

## Authoring

- Edit [tokens.json](tokens.json) for design values; CSS is generated, never maintained separately.
- Edit focused documents in [guidance](guidance/brand.md) for design intent and platform adaptation.
- Keep the [index](index.md) short and published links relative.
- Keep only approved logos in `assets/`. No font binaries, examples, components, previews, or app prototypes.
- [CONTEXT.md](CONTEXT.md) records scope and agreed decisions; it is not published.

## Build and verify

Install dependencies with `npm ci`, then run:

```bash
npm test
```

```bash
npm run build
```

```bash
npm run dev
```

The build validates tokens and local Markdown links, clears `dist/`, copies an explicit publication allowlist, and generates `dist/tokens.css`. Tests cover invalid tokens, aliases, publication boundaries, and agreed design rules.

## Cloudflare

Keep the build command `bash build-static.sh` and deploy command `npx wrangler deploy`. The wrapper delegates to the same Node build used locally. Pull-request builds use `npx wrangler preview`, enabled by the `previews` block in `wrangler.jsonc`. Pushes to the connected production branch publish the latest files; request-time application code is unnecessary.

Published routes: `/index.md`, `/SKILL.md`, `/tokens.json`, `/tokens.css`, `/guidance/*.md`, and the logos linked from the assets guide. `/` redirects to `/index.md`. All assets have public CORS and a five-minute browser cache. Unknown files return 404.

There are no release archives or compatibility aliases. Old `/latest/` URLs and the old manifest were intentionally removed. Historical definitions remain in Git. New routes become live after this change is merged and deployed.
