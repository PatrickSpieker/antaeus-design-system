# Typography

[Index](../index.md) · [Tokens](../tokens.json)

## Font names

| Role | Family | Usage |
|---|---|---|
| Headings and display | IBM Plex Sans | Interface headings, heroes, empty states, milestones |
| UI/body | Inter | Controls and body copy |
| Eyebrows | IBM Plex Sans | Small uppercase labels |
| Data | IBM Plex Mono | Metrics and numeric data |

Only font names are supplied. Each consuming product sources, licenses as necessary, bundles or loads, and registers its fonts. Generated CSS does not download fonts or import Google Fonts. Platform fallback choices belong to the consuming product; unlicensed aspirational substitutes are not part of this system.

## Roles and scale

Use `text-display-s` through `text-display-xl` for display moments, `text-h1` through `text-h4` for interface headings, and `text-body-s` through `text-body-l` for body copy. Caption and eyebrow labels use `text-caption` and `text-micro` respectively. These are baselines, not limits on accessible text scaling.

Display uses `font-heading`, `weight-display`, and `tracking-display`. Welcome/display-m uses `leading-display` (1.08); compact display-s uses `leading-display-s` (1.25). Larger display roles use `leading-display`. No serif family or italic treatment is used by default. Headings and eyebrows use `font-heading`; body and controls use `font-body`. `font-sans` aliases the body role.

Interface headings use `weight-heading`, `leading-heading`, and `tracking-heading`. Body uses `weight-body` and `leading-body`, with `text-body` as its default size. Captions and metadata use regular weight and tight leading. Eyebrows use heading weight, uppercase, `tracking-caps`, and `fg-eyebrow`.

## Shared role recipes

These are global component defaults taken from the [Figma reference](tokens.md#visual-source-and-normalization); the welcome/form roles describe where display sizes belong.

| Role | Size | Weight | Leading | Tracking | Foreground |
|---|---|---|---|---|---|
| Welcome display | `text-display-m` (38) | `weight-display` (500) | `leading-display` (1.08; 41.04) | `tracking-display` (-0.02em) | `fg-1` |
| Form display | `text-display-s` (29) | `weight-display` (500) | `leading-display-s` (1.25; 36.25) | `tracking-display` | `fg-1` |
| Eyebrow | `text-micro` (11) | `weight-heading` (600) | `leading-tight` (1.35) | `tracking-caps` (0.08em) | `fg-eyebrow` |
| Body/helper | `text-body` (15) | `weight-body` (400) | `leading-body` (1.55) | `tracking-body` (0) | `fg-1` / `fg-2` |
| Button | `text-body` (15) | `weight-button` (600) | `leading-tight` | `tracking-heading` (-0.005em) | `fg-inverse` / `fg-brand` |
| Tertiary link | `text-body` (15) | `weight-button` (600) | `leading-tight` | `tracking-body` | `fg-brand` |
| Input value/placeholder | `text-body-l` (17) | `weight-body` (400) | `leading-tight` | `tracking-body` | `fg-1` / `fg-3` |
| Inline field label | `text-body-l` (17) | `weight-medium` (500) | `leading-tight` | `tracking-body` | `fg-1` |
| Identity name | `text-body-l` (17) | `weight-heading` (600) | `leading-tight` | `tracking-body` | `fg-1` |
| Selection label | `text-body` (15) | `weight-heading` (600) | `leading-tight` | `tracking-body` | `fg-1` |
| List/progress label | `text-body` (15) | `weight-medium` (500) | `leading-tight` | `tracking-body` | `fg-1` |
| Metadata (dates, locations, status) | `text-metadata` (13) | `weight-metadata` (400) | `leading-tight` (17.55) | `tracking-body` | `fg-3` |
| Identity confirmation | `text-metadata` (13) | `weight-medium` (500) | `leading-tight` | `tracking-body` | `fg-2` |
| Recipient caption | `text-caption` (12) | `weight-caption` (400) | `leading-tight` (16.2) | `tracking-body` | `fg-3` |
| Camera instruction | `text-camera` (14) | `weight-body` (400) | `leading-tight` (18.9) | `tracking-body` | `fg-camera` |

Message previews use `text-body-l`, regular weight, and `leading-body` (26.35). Legal prose uses `text-body-s` with `leading-body`; underline its brand-colored links. Muted helper copy and pending progress labels may use `fg-3`; disabled button labels also use `fg-3`. Use explicit leading for placeholders and camera instructions instead of the Figma AUTO setting; this is a deliberate normalization, not a measured AUTO line height.

All numeric data uses IBM Plex Mono and tabular numerals; do not use monospace for ordinary body copy. Proportional prose containing incidental numbers need not become monospace. Identity phone numbers use the body face, formatted with spaces.

## Default hierarchy

For ordinary product screens, start with `text-h1` for the page title, `text-h2` for section headings, `text-body` for content, and `text-metadata` for brief metadata. Use `text-h3` and `text-h4` only when the content needs deeper sections. Keep equivalent roles consistent across a screen.

Reserve display sizes for intentional focal points and the specified onboarding headings. Eyebrows should add context rather than repeat the heading. Establish priority through size, weight, and spacing; do not fade supporting text below its required contrast or shrink essential instructions into captions. Use semantic heading structure on web and native accessibility headings on iOS.

## Platform adaptation

Web converts logical dimensions to CSS pixels as the starting scale and must allow text resizing. iOS uses point baselines mapped to appropriate text styles and Dynamic Type; never disable scaling to preserve a token's exact size. Relative tracking scales with font size, and line-height tokens are multipliers, not fixed point values. See [token units](tokens.md).
