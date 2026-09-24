# Color and surfaces

[Index](../index.md) · [Tokens](../tokens.json)

## Palette

- Plum is the brand accent: primary buttons, active states, and occasional emphasis.
- Bone is the default canvas and surface color.
- Ink provides warm charcoal text; avoid pure black.
- Sage signals success or healthy states, amber attention, clay alerts, and sky information. Keep semantic colors muted.

Use semantic tokens such as `bg-page`, `bg-surface`, `fg-1`, and `fg-brand` when the role is known. Palette tokens supply the underlying values; see the [token contract](tokens.md) for aliases.

## Surfaces and cards

Both the page and default cards use bone (`#FBF9F6`); no opaque pure-white backgrounds. Cards use `shadow-sm`, `radius-lg`, `border-hairline`, and `space-6` padding. Borders and shadows provide separation. Use `bg-surface-2` and `bg-sunken` for secondary and recessed surfaces.

Cards have no gradients, colored borders, or colored accent strips. Plum should not form large flat fills on ordinary product screens. A restrained dark plum hero is an explicit exception for onboarding and marketing; use inverse foreground colors there.

## Glass

Glass is allowed for floating controls over content and at most one restrained hero panel per screen. Light glass uses translucent bone (`glass-bone`), never translucent white; dark surfaces may use `glass-plum`. Use `glass-blur` and keep opacity within the intended 72–82% range.

A light hero may use a subtle bone-to-bone-100-to-plum-50 background wash. Glass elsewhere must serve the floating-control purpose rather than decorate the screen. On a dark plum hero, a bone-to-transparent protection gradient may support the call to action.

## Shadows

All shadows use warm ink (`#1A1814`), never pure black. `shadow-xs` through `shadow-md` are soft, close UI shadows; `shadow-lg` and `shadow-xl` elevate floating panels and modals. Avoid hard drop shadows.

Inner shadows are allowed persistently for sunken inputs and temporarily for card presses. [Motion guidance](motion.md) defines interaction timing.
