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

Use a one-unit hairline in `border-hairline` by default. Inputs use `border-input` at rest, which meets 3:1 against bone. Focus uses `border-brand` and `ring-focus` (a three-unit solid plum ring). Never use colored left-border accents on cards.

Keep keyboard focus visible on web and use appropriate native focus/accessibility behavior on iOS. Borders, shadows, and layout should support the hierarchy rather than add decorative chrome.

## Controls and action hierarchy

- One primary action per screen: flat `plum-500` fill, `fg-inverse` label, `radius-md`, and `weight-button`. Hover uses `plum-600`; no raised button shadow.
- Secondary actions use an outlined, unfilled surface with `border-hairline` and `fg-brand`. Tertiary actions are text links in the brand color. Do not stack competing filled actions.
- Disabled controls use `bg-sunken` and readable `fg-3` labels.
- Buttons, fields, and back controls default to `control-h` (48 logical units). Compact controls keep at least `target-min` (44) in both hit-area dimensions. Back controls are rounded squares using `radius-md`.
- A tab bar reserves `tabbar-control-h` (48) for controls, then adds the device's actual bottom safe area. A device with a 34-unit inset therefore needs 82 units. These are minimum baselines: native controls, text scaling, and accessible content may require more space.

## Onboarding rhythm

Use the same rhythm across form screens, adjusting for accessible content and smaller viewports rather than clipping content.

| From → to | Token | Logical gap |
|---|---|---|
| Page edge → content | `space-6` | 24 |
| Control row → eyebrow | `space-8` | 32 |
| Eyebrow → heading | `space-3` | 12 |
| Heading → helper | `space-4` | 16 |
| Helper → first field | `space-8` | 32 |
| Field → field or button | `space-4` | 16 |
| Button → tertiary links | `space-6` | 24 |

Reserve the control row (`control-h`) plus `space-2` top padding even without a back button, so headings stay aligned between steps. Use `text-display-m` for welcome headings and `text-display-s` for form headings, with `weight-display` and `leading-display`.

## Accessibility baseline

Running text must reach 4.5:1 contrast. Use `fg-1` for headings, `fg-2` for helpers, and `fg-3` for metadata, placeholders, countdowns, and disabled labels; `fg-4` aliases `fg-3`. Input boundaries must reach 3:1 against adjacent surfaces; card separators may remain hairlines.

Every interactive control needs visible keyboard focus and at least a 44-unit hit area, including inline links. Underline links in running text. Expose selection state to assistive technology and implement the corresponding keyboard behavior; ARIA roles alone are insufficient. Respect reduced motion as specified in [motion guidance](motion.md).
