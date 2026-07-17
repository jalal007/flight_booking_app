import { Capacitor } from '@capacitor/core'

export type AppPlatform = 'android' | 'ios' | 'web'

export const platformService = {
  getPlatform(): AppPlatform {
    const platform = Capacitor.getPlatform()

    if (platform === 'android' || platform === 'ios') {
      return platform
    }

    return 'web'
  },

  isNative(): boolean {
    return Capacitor.isNativePlatform()
  },
}
