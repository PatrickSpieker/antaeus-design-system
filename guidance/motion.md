# Motion and interaction

[Index](../index.md) · [Tokens](../tokens.json)

Use restrained ease-out transitions. `ease-spring` is allowed only on arrivals such as cards, numbers, and modals; never on exits or hover.

| Interaction | Token | Baseline |
|---|---|---|
| Hover | `dur-hover` | 140ms |
| Press feedback | `dur-press` | 80ms |
| State change | `dur-base` | 220ms |
| Layout change | `dur-slow` | 360ms |
| Page transition | `dur-slower` | 520ms |

Entrances combine fading with an 8–12 logical-unit translation. Entrances and exits must not zoom. Buttons may scale to `press-scale` (0.98) on press, then release; this is the explicit press-feedback exception.

## Hover and press

- Primary button hover changes `plum-500` to `plum-600`; outlined secondary hover reveals `bg-surface-2`. No button lift or scale on hover.
- Card hover increases `shadow-sm` to `shadow-md` and lifts by at most one logical unit.
- Link hover reveals an underline or changes `fg-brand` to `fg-brand-strong`.
- Button press uses the 80ms scale response without a color change.
- Card press may use a temporary inner shadow.

Numeric metrics may count up on first appearance over `dur-slower` with ease-out. Subsequent data updates replace the value directly rather than replaying the animation.

These values describe the normal-motion baseline. Consuming products honor platform reduced-motion settings, avoiding nonessential translation, scaling, and count-up animation when requested. Touch-only interfaces do not need simulated hover states.
