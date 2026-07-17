# AirTicket App

Minimal professional Ionic Vue Capacitor mobile app boilerplate prepared for UI/UX design handover and later backend API integration.

This is a mobile-only app foundation, not a website project. It intentionally contains only one visible route: `/`.

## Current Status

- One root handover page: `src/pages/RootPage.vue`.
- No assumed business screens or fake app flows.
- SCSS/SASS-ready global styling foundation.
- Reusable base, common, layout, and UI component folders.
- API, storage, platform, config, utility, testing, and Capacitor foundations.
- Android and iOS native projects generated with app id `com.airticket.app`.

## Run Locally

```bash
npm install
npm run dev
```

Use mobile viewport/device testing when reviewing UI. This app should be designed and checked as a mobile app first.

## Quality Checks

```bash
npm run type-check
npm run lint
npm run format:check
npm run test:unit
npm run build
```

## Capacitor

```bash
npm run cap:sync
npm run cap:android
```

iOS requires macOS and Xcode:

```bash
npm run cap:ios
```

## UI/UX Handover

The UI/UX developer should add screens only after the final design flow is known. Start with:

- `src/styles/tokens.scss`
- `src/theme/variables.scss`
- `src/components`
- `src/pages`
- `src/features/README.md`
- `docs/UI_UX_HANDOVER.md`

## Production Placeholders To Replace

- Final app name.
- Final Android package name / iOS bundle id.
- App icon and splash screen.
- Android signing config and keystore.
- iOS signing team, certificates, and provisioning profiles.
- Store metadata, screenshots, privacy policy, and support URL.
- Production API URL in `.env`.

See the `docs/` folder for detailed handover, structure, API, and mobile build notes.
