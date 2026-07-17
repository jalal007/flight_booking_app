<template>
  <ion-header class="app-header" :translucent="translucent">
    <ion-toolbar>
      <ion-buttons v-if="$slots.start" slot="start">
        <slot name="start" />
      </ion-buttons>

      <ion-title>
        <span class="app-header__title">{{ title }}</span>
        <small v-if="subtitle" class="app-header__subtitle">{{ subtitle }}</small>
      </ion-title>

      <ion-buttons v-if="$slots.end" slot="end">
        <slot name="end" />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/vue'

withDefaults(
  defineProps<{
    subtitle?: string
    title: string
    translucent?: boolean
  }>(),
  {
    subtitle: '',
    translucent: true,
  },
)
</script>

<style scoped lang="scss">
.app-header {
  z-index: var(--z-header);
}

ion-toolbar {
  --background: var(--color-surface);
  --border-color: var(--color-border);
  --color: var(--color-text);
  --min-height: 56px;
  padding-top: var(--safe-top);
}

.app-header__title {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0;
}

.app-header__subtitle {
  color: var(--color-text-muted);
  display: block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0;
}
</style>
