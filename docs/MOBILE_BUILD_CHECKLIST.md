# Mobile Build Checklist

## Android debug build

1. Install Android Studio.
2. Install Android SDK, platform tools, and a current JDK supported by Capacitor.
3. Run `npm install`.
4. Run `npm run build`.
5. Run `npx cap sync android`.
6. Run `npx cap open android`.
7. Build or run the app from Android Studio.

## Android release build

Do not commit signing files.

1. Replace final app name and package name if needed.
2. Replace app icon and splash screen.
3. Configure Android signing in Android Studio or Gradle.
4. Store keystore securely outside Git.
5. Build an AAB for Play Store upload.
6. Test release build on a physical Android device.

## Play Store checklist

- Final app name.
- Final package name.
- App icon and feature graphic.
- Phone screenshots.
- Privacy policy URL.
- Data safety form.
- App permissions review.
- Production API URL.
- Release signing configured.
- Version code/version name updated.

## iOS requirement

iOS build/open requires macOS and Xcode. Windows can keep the dependency/config ready, but App Store preparation must happen on macOS.

## iOS setup

1. Install Xcode on macOS.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npx cap sync ios`.
5. Run `npx cap open ios`.
6. Configure signing team and bundle id in Xcode.
7. Test on simulator and physical iPhone.

## App Store Connect checklist

- Final app name.
- Final bundle id.
- App icon and launch screen assets.
- Signing certificate and provisioning profile.
- Privacy policy URL.
- App privacy labels.
- Support URL.
- Screenshots for required device sizes.
- Production API URL.
- Version/build number updated.
