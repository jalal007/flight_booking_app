# Project Structure

This project is intentionally minimal for UI/UX handover. It currently contains one visible page and no assumed business modules.

```text
src/
  app/                 Ionic app shell and provider registration
  assets/              Icons, images, and illustrations
  components/          Reusable base, common, layout, and UI components
  composables/         Reusable Vue composition logic
  config/              App and environment configuration
  constants/           Shared stable constants
  features/            Future feature modules; currently README only
  layouts/             Shared layout wrappers
  pages/               Root page and future route-level pages
  router/              Root route, route names, and router creation
  services/            API, storage, and platform abstractions
  stores/              Reserved for state stores when requirements are clear
  styles/              Global SCSS entry, tokens, variables, Ionic imports, utilities
  theme/               Ionic theme variable mapping
  types/               Shared TypeScript types
  utils/               Small framework-independent helpers
```

Native mobile folders:

```text
android/               Capacitor Android project
ios/                   Capacitor iOS project
docs/                  Handover, structure, API, and build documentation
```

## Pages

Only `src/pages/RootPage.vue` exists now. Add real route-level pages after the UI/UX screen map is finalized.

## Features

`src/features/README.md` explains the future feature-module pattern. Do not add feature folders until the final module names are known.

## Styling

- `src/styles/index.scss`: global app style entry.
- `src/styles/ionic.scss`: required Ionic CSS imports.
- `src/styles/tokens.scss`: design tokens for colors, type, spacing, radius, shadows, z-index, and safe areas.
- `src/styles/variables.scss`: SCSS-only helpers.
- `src/styles/utilities.scss`: small global mobile utility classes.
- `src/theme/variables.scss`: Ionic CSS variable mapping.

## Services

- `src/services/api/http-client.ts`: future API request foundation.
- `src/services/api/endpoints.ts`: intentionally empty until backend contracts are known.
- `src/services/storage/storage.service.ts`: mobile-safe Capacitor Preferences wrapper.
- `src/services/platform/platform.service.ts`: native platform helpers.

## Aliases

Configured aliases:

- `@/*`
- `@app/*`
- `@assets/*`
- `@components/*`
- `@config/*`
- `@constants/*`
- `@features/*`
- `@layouts/*`
- `@router/*`
- `@services/*`
- `@styles/*`
- `@utils/*`
- `@types/*`
