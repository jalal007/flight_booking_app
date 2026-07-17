import { createApp } from 'vue'

import AppShell from '@app/AppShell.vue'
import { registerAppProviders } from '@app/providers'
import router from '@router'
/* Basic CSS for Ionic apps */
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/ionic.bundle.css'

const app = createApp(AppShell)

registerAppProviders(app)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
