import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  // TODO(production): Replace appId with the final Android package name / iOS bundle id.
  appId: 'com.airticket.app',
  // TODO(production): Replace appName with the approved final app display name.
  appName: 'AirTicket App',
  webDir: 'dist',
  bundledWebRuntime: false,
  /*
   * TODO(production):
   * - Replace app icon and splash screen assets before release.
   * - Configure Android signing and iOS signing in the native projects; never commit keys.
   * - Finalize Play Store / App Store metadata, privacy policy, and support links.
   */
  plugins: {
    SplashScreen: {
      // TODO(ui-ux): Replace generated splash assets and colors before release.
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
    },
    StatusBar: {
      // TODO(ui-ux): Align status bar style with the final approved visual system.
      style: 'LIGHT',
      backgroundColor: '#ffffff',
    },
    Keyboard: {
      resize: 'body',
      style: 'light',
    },
  },
}

export default config
