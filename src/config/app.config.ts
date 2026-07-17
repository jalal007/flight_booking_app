export const appConfig = {
  // TODO(production): Replace with the approved final app name before store submission.
  displayName: import.meta.env.VITE_APP_NAME || 'AirTicket App',
  // TODO(production): Replace with the final Android package name / iOS bundle id.
  appId: import.meta.env.VITE_APP_ID || 'com.airticket.app',
  projectName: 'airticket-app',
  privacyPolicyUrl: import.meta.env.VITE_PRIVACY_POLICY_URL || 'https://example.com/privacy',
  supportUrl: import.meta.env.VITE_SUPPORT_URL || 'https://example.com/support',
} as const
