# Token contract

[Index](../index.md) · [JSON](../tokens.json) · [Generated CSS](../tokens.css)

`tokens.json` is the sole source of design token values. Its `tokens` object maps semantic or palette names to records containing `type` and `value`. Names do not include a CSS `--` prefix. This is a small repository-specific format, not a claim of compliance with an external token standard.

## Types

| Type | Value | Interpretation |
|---|---|---|
| `color` | Object with `hex` and `alpha` | Six-digit sRGB hex and opacity from 0 to 1 |
| `dimension` | Object with numeric `value`, `unit: "logical"` | Nonnegative baseline length |
| `duration` | Object with numeric `value`, `unit: "ms"` | Nonnegative milliseconds |
| `tracking` | Object with numeric `value`, `unit: "em"` | Letter spacing relative to font size; may be negative |
| `number` | Number | Unitless multiplier or font weight, according to the token name |
| `fontFamily` | String | Family name only; does not load or register a font |
| `cubicBezier` | Four numbers | Control points x1, y1, x2, y2; x coordinates are between 0 and 1 |
| `shadow` | Array of layer objects | Ordered shadow layers; see below |

## References

Any token's entire `value` may instead be an object with one `ref` field naming another token of the same type. Resolve references recursively; missing targets, type mismatches, and cycles are invalid. JSON preserves the references. Generated CSS preserves top-level aliases using custom-property references.

Shadow layers contain `x`, `y`, `blur`, and `spread` in logical units; `color` names a color token, `opacity` multiplies that color's alpha, and `inset` is a Boolean. Offsets and spread may be negative; blur cannot. Layers are preserved in array order. Native consumers translate these into suitable platform rendering rather than interpreting a CSS shadow string. `ring-focus` uses this shape for the web focus outline; it is not a content elevation.

## Web and iOS

Web maps logical lengths to CSS pixels. `/tokens.css` contains only `:root` custom properties with the same names prefixed by `--`; there are no utility classes, resets, component selectors, external font imports, or application styles.

iOS reads the same JSON as point baselines, then applies native control sizing, Dynamic Type, and safe-area behavior. An `em` tracking value is multiplied by the current font size; line-height values are multipliers. Easing points describe a timing curve, not physical spring parameters. Durations are converted from milliseconds as needed by the platform API. A pill radius denotes a capsule/circle, not a fixed enormous corner radius.

Tokens establish shared design intent. They do not override accessibility settings, content-driven sizing, or platform conventions. Consuming repositories implement and bundle their own platform styles and components.

## Updates

Only the latest definitions are published. There are no versioned endpoint paths or compatibility aliases; Git retains history. Fetch the current JSON and needed guidance together when applying the design system. Publication uses a five-minute browser cache, so recently deployed updates may take that long to appear in an existing cache.

## Roles and device-dependent values

Use `font-heading`, `font-body`, and `font-mono` for type roles. The former `font-serif` token is removed; `font-sans` now aliases `font-body` (Inter). Font names do not trigger downloads.

The control and tap-target tokens are logical minimum baselines. `tabbar-control-h` supplies only the content height: web adds `env(safe-area-inset-bottom)`, while iOS uses its native safe-area inset. Device-dependent expressions do not belong in platform-neutral JSON.
