# Antaeus design system

Shared design guidance and assets for agents working on Antaeus web and iOS products.
Reference examples, previews, reusable implementation components, and app prototypes are outside this repository's scope; existing ones will be removed rather than retained as unpublished material.

## Language

**Shared design system**:
The common design guidance, tokens, font names, and brand assets consumed by web and iOS agents, excluding reference examples and implementation code.

**Design token**:
A named design value defined in platform-neutral JSON, such as a color, spacing measurement, typography setting, or motion parameter.

**Design index**:
The short `index.md` entry point directing consuming agents to focused guidance, design tokens, and brand assets.
The published entry point is `/index.md`, with `/tokens.json`, `/guidance/…`, and `/assets/…`; existing URLs and the old manifest format need not remain compatible.

## Relationships

- Web and iOS products both follow the **Shared design system**.
- Platform implementations live in consuming products.
- **Design tokens** belong to the **Shared design system**; JSON is authoritative and CSS is generated from it.
- The **Design index** links to the parts of the **Shared design system** an agent needs for its task.
- The **Shared design system** specifies font names without hosting font files; consuming products source their fonts.
- Published guidance and assets always represent the latest **Shared design system**; historical definitions remain in Git rather than versioned releases.

## Design decisions

- The five “Onboarding Today” rows in the [Antaeus Health Figma](https://www.figma.com/design/tk7l50vfqxiItsHWQBTbGS/Antaeus-Health?node-id=301-2) set global visual defaults, as agreed November 23, 2026. Pages use bone-50; cards and inputs use white; boundaries use translucent ink; metadata uses ink-600. This supersedes the October 25 readability treatment.
- The lower boundary and metadata contrast is intentional and documented, not represented as meeting the former 3:1/7:1 requirements. Running text retains a 4.5:1 minimum.
- Icon strokes vary by role. Placeholder/camera leading is explicit, and the isolated 15-unit gap is normalized to 16.
- This adoption changes only the shared system. Consumer migrations and publication require separate work; delivery is a PR for review.
- Hover transitions take 140ms; press feedback takes 80ms.
- Inner shadows are allowed persistently for sunken inputs and temporarily for pressed cards.
- Entrances and exits must not zoom; buttons may scale to 0.98 for press feedback.
- Glass is allowed for floating controls and at most one restrained hero panel per screen.
- Dark plum hero backgrounds are an explicit exception for onboarding and marketing; ordinary product screens retain bone backgrounds.
- Light glass uses translucent bone instead of translucent white; plum glass remains available for dark surfaces.
- Shadows use warm ink (`#1A1814`), not pure black; prose must match the token definitions.
- Shared sizes are baselines; iOS uses native control sizing, Dynamic Type, and device safe areas rather than fixed web dimensions.

## Addon decisions retained after restructuring

- Headings and eyebrows use IBM Plex Sans; body and controls use Inter; metrics use IBM Plex Mono. Remove the serif family entirely.
- Use flat plum primary actions, outlined secondary actions, and text tertiary actions, with one primary action per screen.
- Default controls are 48 logical units; compact hit targets are at least 44. Tab controls are 48 plus the device's actual safe area, subject to native sizing and text scaling.
- Use the agreed onboarding spacing table in `guidance/layout.md`, including a reserved back-control row.
- Keep readable text, visible keyboard focus, exposed selection state, and reduced motion; the November 23 Figma decision supersedes the former stronger input boundaries.
- Menus and sheets use a 24% warm-ink scrim.

These decisions came from reviewing Devin's design addon on September 24, 2026. They live in shared guidance and typed tokens, not reference implementations. Product questions about invite placement, welcome copy, and empty-timeline guidance remain for consuming products.

## Example dialogue

> **Developer:** "Should the shared design system include an example button implementation?"
> **Designer:** "No reference examples; web and iOS agents use the shared guidance and assets."
