# UI/UX Handover

This Ionic Vue Capacitor project is prepared as a clean mobile app foundation for UI/UX design work. It is intentionally minimal so the design flow can define the real screen list.

## Project Purpose

- Give the UI/UX developer a professional mobile app shell.
- Keep reusable components, tokens, SCSS, routing, and mobile build foundations ready.
- Avoid fake pages and assumed product flows before the actual design is known.
- Make later backend API integration straightforward for the frontend developer.

## Current Status

Only one visible route exists:

```text
/  -> src/pages/RootPage.vue
```

No other route-level screens are created yet. This is intentional. The final app screens should be added only after the design flow is finalized.

## Why Other Pages Are Not Created Yet

The final mobile screen map is not known. Creating assumed pages now can confuse design work, create unused code, and force cleanup later. Use `RootPage.vue` only as the starting handover page.

## Where To Add New Screens

For early design implementation, add route-level pages in:

```text
src/pages/
```

After the final module names are known, create feature modules in:

```text
src/features/<feature-name>/
  pages/
  components/
  services/
  types/
```

Do not create feature folders before the feature names are approved.

## Route Creation Convention

1. Add a stable route name in `src/router/route-names.ts`.
2. Add the route in `src/router/routes.ts`.
3. Lazy-load the page component when the screen is not the initial root page.
4. Keep route paths simple and mobile-app focused.
5. Confirm direct navigation works after adding every route.

## Reusable Component Locations

- `src/components/base`: primitive reusable controls such as buttons, inputs, cards, and page wrappers.
- `src/components/common`: reusable app states such as empty, loading, and error states.
- `src/components/layout`: reusable mobile layout shell pieces.
- `src/components/ui`: composed UI sections created during design.
- `src/features/<feature-name>/components`: screen/module-specific UI after feature modules are known.

## Assets

Place visual assets here:

- Icons: `src/assets/icons`
- Images: `src/assets/images`
- Illustrations: `src/assets/illustrations`

Optimize images before handoff. Avoid committing unused export variants or design-source files unless explicitly needed.

## SCSS Styling Workflow

SCSS is supported and preferred.

- Global entry: `src/styles/index.scss`
- Required Ionic imports: `src/styles/ionic.scss`
- Design tokens: `src/styles/tokens.scss`
- SCSS-only helpers: `src/styles/variables.scss`
- Utility classes: `src/styles/utilities.scss`
- Ionic variable mapping: `src/theme/variables.scss`

Use this component pattern:

```vue
<style scoped lang="scss">
.component-name {
  color: var(--color-text);
}
</style>
```

Keep runtime theme values as CSS custom properties in `tokens.scss`. Use SCSS variables only for compile-time helper values.

## Token Update Guide

Update colors in `src/styles/tokens.scss` first, then map Ionic-specific colors in `src/theme/variables.scss`.

Update typography in:

- `--font-family-base`
- `--font-size-*`
- `--line-height-*`
- `--font-weight-*`

Update spacing in:

- `--space-*`
- `--page-horizontal-padding`
- layout utilities in `src/styles/utilities.scss`

Update radius and shadows in:

- `--radius-*`
- `--shadow-*`

Update z-index values in:

- `--z-*`

## Ionic Component Guidance

- Prefer Ionic components for native-feeling mobile controls.
- Keep touch targets comfortable for thumbs.
- Use Ionic pages/content/header/footer wrappers where possible.
- Do not override Ionic internals with brittle selectors unless there is no stable alternative.
- Keep keyboard behavior in mind for inputs and forms.
- Check status bar and toolbar contrast after color changes.

## Safe-Area Guidance

The project already exposes safe-area custom properties:

- `--safe-top`
- `--safe-right`
- `--safe-bottom`
- `--safe-left`

Use `BasePage`, `AppContent`, and `.app-safe-area` for normal screens. Check content near notches, home indicators, and system bars on both Android and iOS.

## Android/iOS Viewport Guidance

- Test narrow Android widths around 360px.
- Test iPhone safe-area layouts.
- Check long text wrapping.
- Check scroll behavior.
- Check keyboard overlap on input screens.
- Avoid desktop-first layouts and website-style sections.

## Naming Conventions

- Vue components: `PascalCase.vue`
- Composables: `useThing.ts`
- Services: `thing.service.ts`
- Types: `thing.types.ts`
- Utilities: clear verb/noun names such as `formatDateForDisplay`
- CSS classes: readable BEM-style names when useful

## Folder Conventions

- Shared reusable UI goes in `src/components`.
- Route-level screens go in `src/pages` until final feature modules are known.
- Feature folders are created only after the final screen/module map is approved.
- API work stays in `src/services/api` or future feature services.
- Storage work stays behind `src/services/storage/storage.service.ts`.

## What Not To Change Without Asking

- Capacitor app id and native project identifiers.
- Android/iOS signing or release configuration.
- API environment variable names.
- Storage key names used by backend integration.
- TypeScript, Vite, ESLint, or Capacitor major setup.
- Package additions that are not needed for design implementation.

## What To Hand Back

When design work is complete, hand back:

- All designed screens and routes.
- Updated tokens and component styles.
- Optimized image/icon/illustration assets.
- Notes for animations, gestures, empty/loading/error states, and keyboard behavior.
- A list of any added npm packages and why they were added.
- Any known design decisions that affect backend integration.

## Handoff Checklist

- All designed screens added.
- All routes working.
- No console errors.
- No broken imports.
- No unused demo files.
- Mobile responsive check done.
- Android viewport checked.
- iOS safe-area checked.
- Icons/images optimized.
- Colors/tokens documented.
- Any new package documented.
- `npm run build` passing.
- `npm run lint` passing.
- `npm run type-check` passing.
