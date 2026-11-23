# Color and surfaces

[Index](../index.md) · [Tokens](../tokens.json)

## Palette

- Plum is the brand accent: primary buttons, active states, and occasional emphasis.
- Bone is the default canvas; white is the default card and input surface.
- Ink provides warm charcoal text; avoid pure black.
- Sage signals success or healthy states, amber attention, clay alerts, and sky information. Keep semantic colors muted.

Use semantic tokens such as `bg-page`, `bg-surface`, `fg-1`, and `fg-brand` when the role is known. Palette tokens supply the underlying values; see the [token contract](tokens.md) for aliases.

## Color and meaning

Establish hierarchy in grayscale, then add color for emphasis. Color may reinforce a distinction but must not be its only cue: pair status colors with explicit text, such as “Above range,” and show selection with a checkmark, outline, or other visible marker as well as its accessible state.

Place chart labels beside the data where practical. When a legend is needed, distinguish series with labels, line styles, or marker shapes as well as color. Members should not need to memorize a color code to understand a measurement.

## Surfaces and cards

Pages use `bg-page` (bone-50, `#FBF9F6`); cards and inputs use `bg-surface` (white, `#FFFFFF`). Cards use a one-unit `border-card` (warm ink at 8%), `shadow-sm`, `radius-lg`, and `space-4` padding. White surfaces are intentional global defaults. Use `bg-surface-2` (bone-100) for message previews and secondary surfaces, and `bg-sunken` (bone-200) for disabled controls. See the component recipes in [layout](layout.md).

Cards have no gradients or colored accent strips. Selected category cards replace `border-card` with `border-brand` and show a checkmark; the plum outline communicates selection. Plum should not form large flat fills on ordinary product screens. A restrained dark plum hero is an explicit exception for onboarding and marketing; use inverse foreground colors there.

## Glass

Glass is allowed for floating controls over content and at most one restrained hero panel per screen. Light glass uses translucent bone (`glass-bone`), never translucent white; dark surfaces may use `glass-plum`. Use `glass-blur` and keep opacity within the intended 72–82% range.

A light hero may use a subtle bone-to-bone-100-to-plum-50 background wash. Glass elsewhere must serve the floating-control purpose rather than decorate the screen. On a dark plum hero, a bone-to-transparent protection gradient may support the call to action.

## Shadows

All shadows use warm ink (`#1A1814`), never pure black. `shadow-xs` through `shadow-md` are soft, close UI shadows; `shadow-lg` and `shadow-xl` elevate floating panels and modals. Avoid hard drop shadows.

Inputs use `shadow-inset` persistently; card presses may use it temporarily. Back controls and unselected relationship pills use `shadow-xs`; primary buttons remain flat. Preserve the Figma layer order encoded in `shadow-xs` and `shadow-sm` (the tighter layer first). [Motion guidance](motion.md) defines interaction timing.

## Menu and sheet overlays

Use `scrim`, warm ink at 24% opacity, behind menus and sheets. It keeps the underlying screen recognizable. Do not use the opaque-looking bone glass surface as an overlay scrim. Surface and glass rules above still apply to the panel itself.

## Readable card content

Use `fg-1` for titles, `fg-2` for ordinary helpers, and `fg-3` (ink-600, `#6B6558`) for metadata, placeholders, muted helpers, and disabled labels. `fg-4` aliases `fg-3`; `fg-eyebrow` also uses ink-600. Do not add opacity to these foregrounds.

The Figma defaults intentionally replace the former 7:1 metadata and 3:1 boundary requirements. This is a visual choice, not a claim of WCAG non-text contrast compliance. Running text still requires at least 4.5:1. On supported opaque surfaces, ink-600 measures:

| Surface | Contrast |
|---|---|
| White (`bg-surface`) | 5.79:1 |
| Bone-50 (`bg-page`) | 5.51:1 |
| Bone-100 (`bg-surface-2`) | 5.15:1 |
| Bone-200 (`bg-sunken`) | 4.58:1 |

Card outlines use ink-900 at 8% alpha; input outlines use ink-900 at 12% alpha. Composite the border onto its surface before measuring: on white, the card outline is about 1.18:1 and the input outline about 1.28:1. Neither reaches 3:1. Focus still uses the solid plum ring. Native system-owned controls retain their platform rendering; product accessibility review must account for the low-contrast resting boundaries.

## Camera treatment

Camera placeholders use `bg-camera` (`#26212B`), `radius-lg`, and no card shadow. Instructions and the face-guide outline use `fg-camera` (white); ordinary inverse labels continue to use `fg-inverse` (bone-50). These camera-specific colors do not replace the dark-plum hero palette. Real camera imagery has variable contrast and needs its own review.
