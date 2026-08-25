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
- Type: Faustina (display), IBM Plex Sans (UI), JetBrains Mono (metrics)
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
3. Never use pure white backgrounds — always bone
4. Never use bluish-purple gradients or "AI slop" motifs
5. Always tabular-nums for data, mono font for metrics
6. Sentence case on all headings and buttons
