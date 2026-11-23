# Layout

[Index](../index.md) · [Tokens](../tokens.json)

Use a four-unit spacing grid and generous whitespace. Shared dimensions are logical baselines, not physical pixels. See [platform adaptation](tokens.md).

## Spacing and navigation

- Use `space-4` (16) for typical card padding and `space-3` (12) between selection cards. Use the component recipes below for asymmetric padding.
- Major sections default to `space-20` on web and `space-12` on compact mobile layouts.
- Web reading content may use a 720 CSS-pixel maximum width; dashboards may use 1200. These are layout guidance, not iOS screen constraints.
- Web navigation may use a 64 CSS-pixel top bar and 260 CSS-pixel side column. Compact web headers may use a 56 CSS-pixel baseline.
- Consumer mobile screens do not have fixed side panels.
- On iOS, use native control sizing, Dynamic Type, and device safe areas. Do not hard-code a tab-bar height that claims to include every device's safe area. Accessible content and controls may grow beyond baseline dimensions.

## Visual hierarchy

Make the page purpose, content groups, and next action recognizable at a glance. Use the [default type hierarchy](typography.md#default-hierarchy) and keep the single primary action distinct from supporting actions.

Group related content through proximity before adding containers. Keep labels, values, units, and help close together; leave larger gaps between unrelated groups. Use cards when content needs a distinct boundary, not around every item. Existing card border and contrast requirements still apply.

Give emphasis a purpose. Do not automatically give every section an eyebrow, large heading, icon, card, and shadow. Reserve display treatment for an intentional focal point, including the onboarding headings below. Make interactive items recognizable through established control shapes, underlined links, or explicit action labels.

Review consuming screens in grayscale: headings, the primary action, selection, and errors must remain distinguishable. Check that status text and chart labels can be understood without decoding colors. This supplements the contrast and accessibility checks below.

## Radii

| Role | Token |
|---|---|
| Inputs, tiny buttons, rows | `radius-sm` |
| Buttons, tags, small cards | `radius-md` |
| Cards and panels | `radius-lg` |
| Modals and hero glass | `radius-xl` |
| Relationship pills and photo avatars | `radius-pill` |
| Identity placeholder tiles | `radius-md` |

Fully rounded shapes are reserved for explicit pills and photo avatars; identity placeholder tiles are rounded squares. Tags use the regular medium radius unless intentionally presented as pills. `radius-pill` expresses a fully rounded shape: use a native capsule/circle on iOS rather than treating its large numeric CSS baseline as a literal device requirement.

## Borders and focus

Use a one-unit `border-card` (alias of `border-hairline`, ink at 8%) for card and category boundaries and interior separators. Inputs use `border-input` (alias of `border-subtle`, ink at 12%) at rest. These deliberately subtle boundaries do not meet 3:1; see [measured contrast](color.md#readable-card-content). Selected category cards use `border-brand` plus a checkmark. Focus uses `border-brand` and `ring-focus` (a three-unit solid plum ring). Never use colored left-border accents on cards.

Keep keyboard focus visible on web and use appropriate native focus/accessibility behavior on iOS. Borders, shadows, and layout should support the hierarchy rather than add decorative chrome.

## Controls and action hierarchy

- One primary action per screen: flat `plum-500` fill, `fg-inverse` label, `radius-md`, and `weight-button`. Hover uses `plum-600`; no raised button shadow.
- Secondary actions use an outlined, unfilled surface with `border-hairline` and `fg-brand`. Tertiary actions are text links in the brand color. Do not stack competing filled actions.
- Disabled controls use `bg-sunken` and readable `fg-3` labels.
- Buttons, fields, and back controls default to `control-h` (48 logical units). Compact controls keep at least `target-min` (44) in both hit-area dimensions. Back controls are rounded squares using `radius-md`, white `bg-surface`, `border-hairline`, `shadow-xs`, and an `fg-1` arrow.
- A tab bar reserves `tabbar-control-h` (48) for controls, then adds the device's actual bottom safe area. A device with a 34-unit inset therefore needs 82 units. These are minimum baselines: native controls, text scaling, and accessible content may require more space.

## Shared component recipes

| Component | Surface and boundary | Spacing and shape |
|---|---|---|
| Input | `bg-surface`, `border-input`, `shadow-inset` | `radius-sm`, 48 high, 16 horizontal padding, 8 between inline label and value |
| Identity card | `bg-surface`, `border-card`, `shadow-sm` | `radius-lg`, 16 padding and 16 between identity tile and text |
| Selection card | `bg-surface`, `border-card` (selected: `border-brand`), `shadow-sm` | `radius-lg`, 16 vertical / 24 horizontal padding, 12 between cards |
| Clinic list | `bg-surface`, `border-card`, `shadow-sm` | `radius-lg`, no outer padding; rows use 24 horizontal / 12 vertical content insets and interior hairlines |
| Progress list | `bg-surface`, `border-card`, `shadow-sm` | `radius-lg`, 8 outer vertical padding; rows use 12 vertical / 24 horizontal padding |
| Message preview | `bg-surface-2`, `border-card`, no shadow | `radius-lg`, 16 vertical / 20 horizontal padding |
| Relationship pill | `bg-surface`, `border-hairline`, `shadow-xs` | `radius-pill`, 48 high, 16 horizontal padding |
| Selected relationship pill | plum-100 fill, no visible border or shadow, plum check | `radius-pill`, 16 left / 12 right padding, 4 between label and check |

## Onboarding rhythm

Use this shared form rhythm across products, adjusting for accessible content and smaller viewports rather than clipping content. Welcome composition may center its content and use a 16-unit eyebrow-to-heading gap.

| From → to | Token | Logical gap |
|---|---|---|
| Page edge → content | `space-6` | 24 |
| Control row → eyebrow | `space-8` | 32 |
| Eyebrow → heading | `space-3` | 12 |
| Heading → helper | `space-4` | 16 |
| Helper → first field | `space-8` | 32 |
| Separate field → field or button | `space-4` | 16 |
| Paired name → date-of-birth field | `space-2` | 8 |
| Helper → compact search, confirmation input, or camera | `space-4` | 16 |
| Choice group, identity card, or camera → primary action | `space-8` | 32 |
| Button → tertiary links | `space-6` | 24 |

Reserve the control row (`control-h`) plus `space-2` top padding even without a back button, so headings stay aligned between steps. Use `text-display-m` for welcome headings and `text-display-s` for form headings, with `weight-display`; welcome headings use `leading-display` (1.08), form headings use `leading-display-s` (1.25). The isolated 15-unit progress-wrapper bottom padding is normalized to `space-4` (16); do not introduce a 15-unit spacing token. Clinic-summary helper-to-action spacing uses `space-5` (20).

## Accessibility baseline

Running text, including metadata, must reach 4.5:1 contrast. The former 7:1 metadata target is superseded by the approved Figma palette. Use `fg-1` for headings, `fg-2` for helpers, and `fg-3` for metadata, placeholders, countdowns, and disabled labels; `fg-4` aliases `fg-3`. The approved resting input/card boundaries are below 3:1; do not describe them as meeting that threshold. See [measured contrast](color.md#readable-card-content).

Every interactive control needs visible keyboard focus and at least a 44-unit hit area, including inline links. Underline links in running text. Expose selection state to assistive technology and implement the corresponding keyboard behavior; ARIA roles alone are insufficient. Respect reduced motion as specified in [motion guidance](motion.md).
