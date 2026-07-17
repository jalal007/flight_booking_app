<template>
  <ion-page class="base-page">
    <slot name="header">
      <app-header v-if="title" :title="title" />
    </slot>

    <app-content :fullscreen="fullscreen">
      <div class="base-page__inner app-safe-area">
        <slot />
      </div>
    </app-content>

    <slot name="footer" />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'

import AppContent from '@components/layout/AppContent.vue'
import AppHeader from '@components/layout/AppHeader.vue'

withDefaults(
  defineProps<{
    fullscreen?: boolean
    title?: string
  }>(),
  {
    fullscreen: true,
    title: '',
  },
)
</script>

<style scoped lang="scss">
.base-page__inner {
  min-height: 100%;
  padding-bottom: max(var(--space-6), var(--safe-bottom));
  padding-top: var(--space-5);
}
</style>
