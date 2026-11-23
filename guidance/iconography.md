# Iconography

[Index](../index.md)

Lucide is the shared icon family. Consuming web and iOS products source the icon assets and use a platform-appropriate renderer; this repository does not supply icon implementations or a CDN loader.

- Use role-specific logical-unit strokes, rounded caps and joins, and unfilled shapes. Keep the stroke independent of the rendered icon size; do not rescale it accidentally with the view box.
- Baseline visual sizes are 16 in dense UI, 20 by default, 24 for prominent controls, and 32–40 for illustrative use.
- Icon size is separate from the interactive hit area; honor platform accessibility requirements for controls.
- Icons inherit their foreground color. Color may reinforce state, but pair it with a distinct shape or explicit status text.
- Pair unfamiliar action icons with visible labels. Icon-only controls need an accessible name and a recognizable meaning in context; a tooltip alone does not replace a needed visible label.
- Do not use emoji, Unicode glyph substitutes, multicolor icons, or decorative icons beside every label.

Shared glyph vocabulary: Activity, Heart, Pill, ClipboardList, CalendarDays, Stethoscope, FileText, Users, MessageSquare, Bell, Settings, ChevronRight, Plus, Search, Check, AlertCircle, TrendingUp, TrendingDown, and Minus.

| Role | Token | Stroke |
|---|---|---|
| Default, including list chevrons | `icon-stroke-default` | 1.5 |
| Back arrow | `icon-stroke-back` | 1.25 |
| Prominent selection check or identity person | `icon-stroke-prominent` | 2 |
| Small relationship/progress check | `icon-stroke-check-small` | 1.666667 (5/3 rounded) |
| Identity confirmation | `icon-stroke-confirmation` | 1 |

These global role defaults replace the uniform 1.5-unit rule. Identity placeholders use a 64-unit plum-100 tile with `radius-md` and a 32-unit plum icon; they are rounded squares, not circular photo avatars. Camera face guides are 2-unit `fg-camera` outlines, not Lucide icons. List chevrons may use the compact 8×14 visual box shown in Figma; their enclosing row still provides the full hit area.
