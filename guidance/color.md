# Color and surfaces

[Index](../index.md) · [Tokens](../tokens.json)

## Palette

- Plum is the brand accent: primary buttons, active states, and occasional emphasis.
- Bone is the default canvas and surface color.
- Ink provides warm charcoal text; avoid pure black.
- Sage signals success or healthy states, amber attention, clay alerts, and sky information. Keep semantic colors muted.

Use semantic tokens such as `bg-page`, `bg-surface`, `fg-1`, and `fg-brand` when the role is known. Palette tokens supply the underlying values; see the [token contract](tokens.md) for aliases.

## Color and meaning

Establish hierarchy in grayscale, then add color for emphasis. Color may reinforce a distinction but must not be its only cue: pair status colors with explicit text, such as “Above range,” and show selection with a checkmark, outline, or other visible marker as well as its accessible state.

Place chart labels beside the data where practical. When a legend is needed, distinguish series with labels, line styles, or marker shapes as well as color. Members should not need to memorize a color code to understand a measurement.

## Surfaces and cards

Pages use `bg-page` (bone-200, `#EAE4DA`); cards use `bg-surface` (bone-50, `#FBF9F6`). Cards use a one-unit `border-card` (opaque ink-600), `shadow-sm`, `radius-lg`, and `space-6` padding. The outline must remain visible without a shadow. No opaque pure-white backgrounds. Use `bg-surface-2` and `bg-sunken` for secondary and recessed surfaces.

Cards have no gradients, colored borders, or colored accent strips. Plum should not form large flat fills on ordinary product screens. A restrained dark plum hero is an explicit exception for onboarding and marketing; use inverse foreground colors there.

## Glass

Glass is allowed for floating controls over content and at most one restrained hero panel per screen. Light glass uses translucent bone (`glass-bone`), never translucent white; dark surfaces may use `glass-plum`. Use `glass-blur` and keep opacity within the intended 72–82% range.

A light hero may use a subtle bone-to-bone-100-to-plum-50 background wash. Glass elsewhere must serve the floating-control purpose rather than decorate the screen. On a dark plum hero, a bone-to-transparent protection gradient may support the call to action.

## Shadows

All shadows use warm ink (`#1A1814`), never pure black. `shadow-xs` through `shadow-md` are soft, close UI shadows; `shadow-lg` and `shadow-xl` elevate floating panels and modals. Avoid hard drop shadows.

Inner shadows are allowed persistently for sunken inputs and temporarily for card presses. [Motion guidance](motion.md) defines interaction timing.

## Menu and sheet overlays

Use `scrim`, warm ink at 24% opacity, behind menus and sheets. It keeps the underlying screen recognizable. Do not use the opaque-looking bone glass surface as an overlay scrim. Surface and glass rules above still apply to the panel itself.

## Readable card content

Use `fg-1` for titles and `fg-2`/`fg-3` for supporting text. Metadata is essential content: `fg-3` now uses ink-700, with at least 7:1 contrast on supported opaque surfaces. Establish hierarchy through size, weight and spacing rather than faded text or added opacity.

Use `border-card` for both static cards and interactive category/summary cards. It must reach at least 3:1 against the page and card surfaces. Hairlines remain appropriate only for decorative interior separators; they are not card boundaries. Shadows supplement the outline and never replace it. Native system-owned controls retain their platform rendering.
