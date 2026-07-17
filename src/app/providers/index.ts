import { IonicVue } from '@ionic/vue'
import type { App } from 'vue'

export const registerAppProviders = (app: App<Element>): void => {
  app.use(IonicVue)
}
