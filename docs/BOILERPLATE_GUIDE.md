# Boilerplate Guide

This is intentionally a minimal mobile app boilerplate. It exists to give the UI/UX developer a clean Ionic Vue Capacitor foundation without guessing the final product screens.

## Current App Surface

- One visible route: `/`.
- One route-level page: `src/pages/RootPage.vue`.
- No fake business pages.
- No real API calls.
- No final product flow assumptions.

## Styling Workflow

SCSS is the preferred styling workflow.

- Put global design tokens in `src/styles/tokens.scss`.
- Put SCSS-only helpers in `src/styles/variables.scss`.
- Put app-wide helpers in `src/styles/utilities.scss`.
- Map Ionic theme variables in `src/theme/variables.scss`.
- Use `<style scoped lang="scss">` for Vue component styles.

Keep the token names stable where possible so later frontend/API work does not need to change because of visual refinements.

## Adding Real Screens Later

Add screens only after the final UI/UX flow is known:

1. Add the route name in `src/router/route-names.ts`.
2. Add the route in `src/router/routes.ts`.
3. Create the page in `src/pages` or inside a real feature module.
4. Create reusable components in `src/components`.
5. Create feature-specific components inside the future feature folder.

## Feature Modules

Create `src/features/<feature-name>` only after the final module names are known. A future module can use:

```text
features/<feature-name>/
  pages/
  components/
  services/
  types/
```

Do not add fake business pages before the design is finalized.

## API Integration Later

Use `src/services/api/http-client.ts` and `src/services/storage/storage.service.ts` during backend integration. Avoid direct `fetch` calls from Vue pages.

`src/services/api/endpoints.ts` is intentionally empty until the backend contract is available.

## State Management

`src/stores` is reserved. Add a store library only when app state requirements are clear.

## Quality Checks

Run before handover or commit:

```bash
npm run type-check
npm run lint
npm run format:check
npm run test:unit
npm run build
```

## Production TODOs

- Final app name.
- Final package/bundle id.
- App icon.
- Splash screen.
- Signing config.
- Store metadata.
- Privacy policy and support links.
- Production API URL.
