<template>
  <ion-content class="app-content" :fullscreen="fullscreen">
    <slot />
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent } from '@ionic/vue'

withDefaults(
  defineProps<{
    fullscreen?: boolean
  }>(),
  {
    fullscreen: true,
  },
)
</script>

<style scoped lang="scss">
.app-content {
  --background: var(--color-surface);
}
</style>
