---
name: antaeus-design
description: Use this skill to generate well-branded interfaces and assets for Antaeus Health, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

Antaeus Health is a **consumer-facing health platform** — serious, restrained, editorial. The brand voice speaks **to members in second person**, translates clinical jargon, and never uses emoji in product chrome.

**Visual DNA:**
- Warm bone canvas (`#FBF9F6`), never pure white
- Deep plum primary (`#5A3F7A`) — used sparingly, earned
- Muted semantic accents: sage (ok), amber (attention), clay (alert), sky (info)
- Type: IBM Plex Sans (headings and eyebrows), Inter (body and UI), IBM Plex Mono (metrics)
- Hairline borders, soft warm-tinted shadows, generous whitespace
- Lucide icons at 1.5px stroke

## Files to explore

- `colors_and_type.css` — all tokens (color, type, spacing, shadow, radii, motion)
- `README.md` — full content + visual foundations, iconography, tone
- `preview/*.html` — at-a-glance specimens for every token group
- `ui_kits/consumer_app/` — iOS consumer app, React-based interactive prototype
- `assets/` — logo mark, wordmark, inverse mark

## Rules (non-negotiable)
1. Never use emoji in product chrome
2. Never use colored left-border accents on cards
3. Page backgrounds are bone; cards and fields may use white surfaces
4. Never use bluish-purple gradients or "AI slop" motifs
5. Always tabular-nums for data, mono font for metrics
6. Sentence case on all headings and buttons

7. Use role tokens: `--font-heading`, `--font-body`, `--font-mono`. No serif fonts.
8. One flat plum primary action per screen; outlined secondary; text tertiary. Default controls are 48px, compact tap targets at least 44px in both dimensions.
9. Text hierarchy is `--fg-1`, `--fg-2`, `--fg-3`; inputs use `--border-input`. Verify contrast, keyboard focus, and reduced motion.
10. Follow the onboarding rhythm table in README.md. Keep the control row present so headings align between steps.
11. Tab controls are 48px plus device safe area. Menus and sheets use `--scrim`.

Use `styles.css` for shared controls and tokens. Use `addon.css` for onboarding layouts and `ui_kits/onboarding/` for reference screens. These screens are static mocks, not production interaction implementations.
