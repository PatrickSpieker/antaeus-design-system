# Antaeus Health — Design System

> Health tools built for the person whose body is actually in question — not the administrator, not the biller, not the billing administrator. Serious when it needs to be; calm and delightful otherwise.

## The name

In Greek myth, **Antaeus** was a giant who drew strength from contact with the earth. The moment he lost his footing, he lost his power. The name signals what this product stands for: that health starts from something grounded and personal — your own body, your own data, your own decisions — not from a system that speaks over your head.

## What we are

A consumer health platform. Patients (we call them **members**) own their records, track symptoms and measurements, coordinate care across providers, and understand what's happening to them without needing a clinical translator.

## What we are **not**

- Not another MyChart / Epic portal. Those products treat you like a compliance checkbox.
- Not a wellness app. We deal with real clinical data, and we're willing to show a number without a cartoon around it.
- Not a sleek-but-shallow consumer play. We earn trust by being legible, precise, and restrained.

## Design posture

| Axis | We lean |
|------|---------|
| Visual density | Calm → generous whitespace, one thing at a time |
| Color | Deep plum primary, warm bone canvas, muted semantic accents |
| Type | IBM Plex Sans headings; Inter body and UI; IBM Plex Mono metrics |
| Motion | Short springy ease-outs, never bouncy-cartoonish |
| Tone | Direct, plainspoken, second-person, no medical jargon without translation |
| Iconography | Hairline strokes, 1.5px, rounded joins (Lucide) |

## Surfaces (products)

Antaeus is **one product**, with three primary surfaces:

1. **Consumer app** (iOS/Android, React Native) — the daily driver. Timeline, measurements, symptoms, care team.
2. **Member web** (desktop) — deeper review of records, document upload, appointment prep, shared reports.
3. **Marketing site** — no mock in this system yet; flagged for future work.

## Source material

This design system was **built from scratch** at kickoff. There is no pre-existing codebase, Figma, or brand guide — everything here is v0, derived from the founder's direction:

> *"Health tech for consumers. Purple in the palette. Serious, but glassy and responsive with delightful touches. Not Instagram-silly, not Epic-ugly. Restrained."*

All subsequent iteration should treat this README + `colors_and_type.css` as the source of truth, and overwrite freely as the brand matures.

---

## CONTENT FUNDAMENTALS

### Voice
**Direct, warm, literate.** We sound like a well-read clinician friend who respects your time and your intelligence. We explain, but we never over-explain. We use plain words when plain words exist, and precise words when precision matters.

### Person
**Second person (you / your).** Never "patients" in product copy — say "you". Internally and in marketing we say **members**, never *users* or *patients*.

### Tense & mood
**Present, active.** Describe what is happening now, what you can do next. Avoid passive voice ("was uploaded by" → "uploaded").

### Casing
- Headlines & section labels: **Sentence case**. Not Title Case, not ALL CAPS (except eyebrows).
- Eyebrow labels (above a heading): **ALL CAPS**, tracked +8%, small.
- Buttons: **Sentence case verbs** — "Add measurement", not "Add Measurement" or "ADD MEASUREMENT".
- Proper nouns & product names: Title cased normally — "Care Timeline", "Shared Report".

### Numbers & units
- Always **monospace with tabular numerals** in any data/metric context.
- Units come after a thin space: `128 mg/dL`, `72 bpm`, `6h 42m`.
- Ranges use en-dash, not hyphen: `80–120 mg/dL`.
- Dates: spelled month for human contexts (`April 17, 2026`), ISO in dense tables (`2026-04-17`).

### Emoji
**No emoji in product chrome.** We may use a single, intentional editorial glyph in an empty-state or celebration moment (e.g. a ✿ to mark a recovery milestone), but never a row of emoji. Emoji read as unserious, and this product cannot afford that.

### Jargon
**Translate on first use.** If we say "A1c", we say "(three-month blood sugar average)" the first time it appears on a screen. After that, A1c alone is fine. Never strip the clinical term — members deserve to know the real names.

### Examples

| Good | Bad |
|---|---|
| Your cholesterol panel is ready. | 🎉 Your results are in! |
| Add measurement | ADD NEW ENTRY |
| We couldn't reach your provider. Try again in a minute. | Oops! Something went wrong 😬 |
| 128 mg/dL · within your range | Blood sugar: Good! |
| Reviewed by Dr. Patel, Apr 17 | Dr. Patel has reviewed this entry on Apr 17, 2026 |
| Three readings above your target this week. | Warning: 3 high readings detected!! |

### One-liner taglines (for hero / social / about)
- *Health, finally aimed at you.*
- *Your body, your record, your decisions.*
- *The ground beneath your health.*
- *Care that answers to you.*

---

## VISUAL FOUNDATIONS

### Color
- **Primary**: deep plum (`--plum-500 #5A3F7A`) — used for brand moments, primary buttons, active states, accent typography. Never used as a large flat fill; always earned.
- **Canvas**: warm bone (`--bone-50 #FBF9F6`) — the default page background. Never pure white. This is a load-bearing decision: pure white reads as clinical/corporate; bone reads as calm and considered.
- **Ink**: warm charcoals (`--ink-900` → `--ink-400`) for text, slightly warm to harmonize with bone. Never pure black.
- **Semantic**: sage (ok), amber (attention), clay (alert), sky (info) — all muted, never saturated. We want to signal state without screaming.
- **Glass**: translucent bone/white panels with 20px backdrop blur over warm gradient backgrounds. Used sparingly — the hero of at most one surface per screen.

### Type
- Headings and display: **IBM Plex Sans**, weight 500 for display, 600 for UI headings. Display leading 1.15; heading leading 1.25.
- UI/body: **Inter**, 400/500/600/700. Default body 15px / 1.55.
- Eyebrows: **IBM Plex Sans**, 11px, uppercase, tracked +8%.
- Metrics: **IBM Plex Mono**, tabular numerals. Phone numbers used as identity stay in the body face.
- Use `--font-heading`, `--font-body`, and `--font-mono` by role. No serif face is used.

### Spacing
4px baseline grid. The system leans toward generous spacing — an 80px section gap feels right, a 24px card gap feels right. Density is earned, not default.

### Backgrounds
- **Default**: bone (#FBF9F6) flat.
- **Hero / brand moment**: a very subtle warm gradient (bone → bone-100 → soft plum-50 wash) with a single glass panel floating on it.
- **No** full-bleed photography in product chrome. Marketing surfaces may use documentary black-and-white photography (warm-toned, never cool).
- **No** patterns, textures, hand-drawn illustrations, or "noise" overlays. The surface is quiet.

### Animation
- **Ease**: `ease-out` for 90% of transitions. `ease-spring` (slight overshoot, `cubic-bezier(0.34, 1.56, 0.64, 1)`) only for **arrivals** — a card appearing, a number incrementing, a modal opening. Never on exits, never on hover.
- **Duration**: 140ms for hover/press, 220ms for state changes, 360ms for layout changes, 520ms for page transitions.
- **Motion**: elements slide in from 8–12px away, never more. We fade + translate, never zoom.
- **Numbers count up** on first appearance (520ms, ease-out). Never count up on subsequent updates — just update.

### Hover states
- Buttons: background darkens by ~8% (primary) or background appears (ghost). No lift, no scale.
- Cards: shadow increases from `--shadow-sm` to `--shadow-md`, translate Y -1px. Never more.
- Links: underline appears (not thickens) or color shifts from `--fg-brand` to `--fg-brand-strong`.

### Press states
- Buttons scale to 0.98 for 80ms, then release. No color change.
- Cards get a momentary inner shadow.

### Borders
- Default: `1px solid rgba(26, 24, 20, 0.08)` — a hairline, almost invisible. Does the work of separation without adding weight.
- Inputs: `1px solid var(--border-input)` at rest; brand plum border and 3px plum ring on focus.
- **Never** a colored left-border accent on cards. That pattern is banned.

### Shadows
Two systems:
- **UI shadows** (`--shadow-xs` → `--shadow-md`): soft, close, warm-tinted (black at 4–8% alpha + warm ink undertone). For cards, menus, popovers.
- **Elevation shadows** (`--shadow-lg`, `--shadow-xl`): for floating glass panels and modals. Larger Y offset, more blur.
- Inner shadow exists only for sunken inputs (search fields) — very subtle.

### Protection gradients vs capsules
- We prefer **capsules** (solid glass panels with blur) over dark protection gradients, because we work over light warm canvases where dark gradients would feel heavy.
- Exception: on the rare dark plum hero (onboarding, marketing hero), a bone-to-transparent gradient at the bottom protects CTA legibility.

### Layout rules
- **Fixed elements**: top nav bar (64px desktop, 56px mobile), bottom tab bar on mobile (48px controls plus the device’s bottom safe area). No fixed side panels in consumer app; side nav is a 260px flex column on web.
- **Content max-width**: 720px for reading, 1200px for dashboards.
- **Vertical rhythm**: major sections separated by `--space-20` (80px) on web, `--space-12` (48px) on mobile.

### Transparency & blur
Used for **one** purpose: floating controls over content (e.g. an iOS-style tab bar, a modal scrim, a command palette). 20px backdrop blur + 72–82% alpha surface. Never for decorative purposes, never as "a gradient but cooler".

### Corner radii
- Inputs, tiny buttons, rows: `6px`
- Buttons, tags, small cards: `10px`
- Cards, panels: `16px`
- Modals, hero glass: `24px`
- **Never** fully rounded except for pills/avatars — fully rounded reads as Instagram-y.

### Cards
A card is: **white surface**, `--shadow-sm`, `--radius-lg` (16px), **hairline border** (`rgba(26,24,20,0.08)`), `24px` internal padding by default. No gradients, no colored borders, no accent strips. A card can contain a monospace metric, a Plex Sans heading, sans-serif body, and nothing else chrome-wise.

### Imagery color
Warm, desaturated, documentary. Light grain is fine. No teal-orange blockbuster grading. No clinical stock photos.

---

## ICONOGRAPHY

We use **[Lucide](https://lucide.dev)** — the MIT-licensed fork of Feather. Loaded via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

- **Stroke**: 1.5px, rounded caps, rounded joins. Never filled.
- **Size**: 16px in dense UI, 20px default, 24px for tap targets, 32–40px for feature/illustrative use.
- **Color**: inherits `currentColor`. Never colored for decoration; color signals state.
- **Never**: emoji as icons, unicode glyphs as icons (✓ → use `<Check/>`), multicolor icons, decorative icons next to every label.

### Substitution flag
🚩 If you later license a custom health icon set (e.g. from the **Streamline Health** pack), swap at the `<Icon>` component level. Lucide is the current stand-in; it's clean, open, and matches our stroke aesthetic.

### Key glyphs we rely on
`Activity`, `Heart`, `Pill`, `ClipboardList`, `CalendarDays`, `Stethoscope`, `FileText`, `Users`, `MessageSquare`, `Bell`, `Settings`, `ChevronRight`, `Plus`, `Search`, `Check`, `AlertCircle`, `TrendingUp`, `TrendingDown`, `Minus`.

---

## INDEX — files in this system

```
/
├── README.md                   ← this file
├── SKILL.md                    ← Agent Skill manifest (Claude Code compatible)
├── colors_and_type.css         ← all design tokens
├── controls.css                ← shared buttons, inputs, focus, reduced motion
├── addon.css                   ← onboarding reference layouts
├── scripts/                    ← preview build and publication checks
├── assets/
│   ├── logo-mark.png / .svg          ← arch mark (plum on bone)
│   ├── logo-mark-inverse.png / .svg  ← bone on plum, for dark surfaces
│   └── logo-wordmark.svg             ← mark + "Antaeus Health"
├── fonts/README.md             ← font roles
├── preview/                    ← Design System tab cards
│   └── [17 specimen cards]
└── ui_kits/
    ├── onboarding/             ← eight static reference screens
    └── consumer_app/           ← iOS consumer app (React, interactive)
        ├── README.md
        ├── index.html          ← tabbed prototype
        ├── Shared.jsx          ← Icon, Chip, Card, TabBar, ScreenHeader
        ├── TodayScreen.jsx
        ├── RecordScreen.jsx    ← + AddMeasurementSheet
        └── CareScreen.jsx      ← + YouScreen
```

## Caveats & next steps

**Type stack:** IBM Plex Sans, Inter, and IBM Plex Mono are freely available through Google Fonts. See `fonts/README.md`.

**🚩 Logo is a user-supplied mark.** The open arch PNG/SVG pair came from the founder; the SVGs were redrawn to match the raster.

**🚩 No marketing site or desktop/web UI kit yet.** Only the iOS consumer app exists. Member-web dashboard is a next step.

**🚩 No photography direction executed.** The guide specifies warm documentary b&w, but no reference imagery is in `assets/`.

**🚩 Icons are hand-rolled SVG matching Lucide.** In production, pull from the Lucide CDN directly.

## Controls, onboarding, and accessibility

Adopted from [Devin’s design addon](https://github.com/devin-griser/antaeus-design-addon/tree/eed0918), with typography and control decisions resolved on September 24, 2026.

- One primary action per screen: flat plum-500, bone label; hover plum-600. Secondary is outlined with brand text; tertiary is a text action. Disabled controls use sunken bone and `--fg-3`. `ghost` remains an alias for outlined secondary.
- Default buttons, fields, and back controls are 48px high. Compact controls retain at least 44px by 44px hit areas. Back controls are rounded squares.
- Heading `--fg-1`, helper `--fg-2`, metadata and placeholders `--fg-3`. Running text must reach 4.5:1 contrast; input boundaries reach 3:1. Hairline borders remain for cards.
- Every control has visible keyboard focus. Respect reduced motion, underline links within running text, and expose selected states programmatically. ARIA roles alone do not supply keyboard interaction.
- Menus and sheets use `--scrim`, warm ink at 24% opacity. The tab bar uses glass bone, with 48px controls plus the actual safe area.

Onboarding rhythm:

| From → to | Gap |
|---|---|
| Page edge → content | 24px |
| Control row → eyebrow | 32px |
| Eyebrow → heading | 12px |
| Heading → helper | 16px |
| Helper → first field | 32px |
| Field → field or button | 16px |
| Button → tertiary links | 24px |

Reserve the 48px control row plus 8px top padding even when no back button appears. Form headings use 29px; welcome headings use 38px.

### Using the files

Load `styles.css` for tokens and shared controls. Load `addon.css` after it only for onboarding reference layouts. `ui_kits/onboarding/` contains eight static reference screens; `ui_kits/consumer_app/` is the interactive measurement prototype. Run `npm run build` to regenerate bundles and the publication directory.

The onboarding references demonstrate design, not a working signup flow. Invite-code placement, welcome copy, and empty-timeline guidance remain product questions. Error, loading, and keyboard-up states require product implementation and review.

### Migration

Replace `--font-serif` with `--font-heading`, `.serif-italic` with `.heading-emphasis`, and `.serif-moment` with `.heading-moment`. The removed serif family has no compatibility token. `--font-sans` remains an alias for the new body face; `--fg-4` aliases readable `--fg-3`. React `Button` consumers must load `styles.css`; its existing props remain supported, with an added `tertiary` variant.
