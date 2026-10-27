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

Display uses `font-heading`, `weight-display`, `leading-display` (1.15), and `tracking-display`. No serif family is used. Headings and eyebrows use `font-heading`; body and controls use `font-body`. `font-sans` aliases the body role.

Headings use `weight-heading`, `leading-heading`, and `tracking-heading`. Body uses `weight-body` and `leading-body`, with `text-body` as its default size. Captions use medium weight and tight leading. Eyebrows use heading weight, uppercase, and `tracking-caps`.

All numeric data uses IBM Plex Mono and tabular numerals; do not use monospace for ordinary body copy. Proportional prose containing incidental numbers need not become monospace. Identity phone numbers use the body face, formatted with spaces.

## Default hierarchy

For ordinary product screens, start with `text-h1` for the page title, `text-h2` for section headings, `text-body` for content, and `text-caption` for brief metadata. Use `text-h3` and `text-h4` only when the content needs deeper sections. Keep equivalent roles consistent across a screen.

Reserve display sizes for intentional focal points and the specified onboarding headings. Eyebrows should add context rather than repeat the heading. Establish priority through size, weight, and spacing; do not fade supporting text below its required contrast or shrink essential instructions into captions. Use semantic heading structure on web and native accessibility headings on iOS.

## Platform adaptation

Web converts logical dimensions to CSS pixels as the starting scale and must allow text resizing. iOS uses point baselines mapped to appropriate text styles and Dynamic Type; never disable scaling to preserve a token's exact size. Relative tracking scales with font size, and line-height tokens are multipliers, not fixed point values. See [token units](tokens.md).
