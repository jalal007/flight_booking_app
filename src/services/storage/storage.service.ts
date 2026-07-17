import { Preferences } from '@capacitor/preferences'

export const storageService = {
  async getString(key: string): Promise<string | null> {
    const result = await Preferences.get({ key })
    return result.value
  },

  async setString(key: string, value: string): Promise<void> {
    await Preferences.set({ key, value })
  },

  async remove(key: string): Promise<void> {
    await Preferences.remove({ key })
  },

  async clear(): Promise<void> {
    await Preferences.clear()
  },
}
