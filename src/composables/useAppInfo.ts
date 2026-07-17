import { computed } from 'vue'

import { appConfig } from '@config/app.config'
import { platformService } from '@services/platform/platform.service'

export const useAppInfo = () => {
  const platform = computed(() => platformService.getPlatform())
  const isNative = computed(() => platformService.isNative())

  return {
    appConfig,
    isNative,
    platform,
  }
}
