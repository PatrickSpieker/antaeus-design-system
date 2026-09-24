# Layout

[Index](../index.md) · [Tokens](../tokens.json)

Use a four-unit spacing grid and generous whitespace. Shared dimensions are logical baselines, not physical pixels. See [platform adaptation](tokens.md).

## Spacing and navigation

- Use `space-6` for typical card padding and gaps between cards.
- Major sections default to `space-20` on web and `space-12` on compact mobile layouts.
- Web reading content may use a 720 CSS-pixel maximum width; dashboards may use 1200. These are layout guidance, not iOS screen constraints.
- Web navigation may use a 64 CSS-pixel top bar and 260 CSS-pixel side column. Compact web headers may use a 56 CSS-pixel baseline.
- Consumer mobile screens do not have fixed side panels.
- On iOS, use native control sizing, Dynamic Type, and device safe areas. Do not hard-code a tab-bar height that claims to include every device's safe area. Accessible content and controls may grow beyond baseline dimensions.

## Radii

| Role | Token |
|---|---|
| Inputs, tiny buttons, rows | `radius-sm` |
| Buttons, tags, small cards | `radius-md` |
| Cards and panels | `radius-lg` |
| Modals and hero glass | `radius-xl` |
| Explicit pills and avatars | `radius-pill` |

Fully rounded shapes are reserved for pills and avatars. Tags use the regular medium radius unless intentionally presented as pills. `radius-pill` expresses a fully rounded shape: use a native capsule/circle on iOS rather than treating its large numeric CSS baseline as a literal device requirement.

## Borders and focus

Use a one-unit hairline in `border-hairline` by default. Inputs use `border-subtle` at rest. Focus uses a plum border at 40% opacity and the `ring-focus` token (a three-unit plum ring at 28% opacity). Never use colored left-border accents on cards.

Keep keyboard focus visible on web and use appropriate native focus/accessibility behavior on iOS. Borders, shadows, and layout should support the hierarchy rather than add decorative chrome.
