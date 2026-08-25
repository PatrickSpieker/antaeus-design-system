# Consumer App — UI Kit

iOS consumer app for Antaeus Health members. Built on the iOS 26 frame (`ios-frame.jsx`).

## Screens
- `TodayScreen.jsx` — daily driver; BP lead card, mini metrics, upcoming care, editorial "this week" moment
- `RecordScreen.jsx` — tracked measurements list + `AddMeasurementSheet` (bottom modal)
- `CareScreen.jsx` — care team + messages + `YouScreen` (profile)
- `Shared.jsx` — `Icon`, `Chip`, `Card`, `TabBar`, `ScreenHeader`

## Running
Open `index.html`. Tab bar switches screens; **Record → Add measurement** opens the sheet. State persists across reload.

## Notes
- Icons are hand-authored SVG matching Lucide stroke. Swap `<Icon/>` to use Lucide directly in production.
- No emoji, no colored left-borders, no neon. Stays within visual foundations.
