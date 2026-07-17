<template>
  <ion-card class="base-card" :class="{ 'base-card--interactive': interactive }">
    <ion-card-header v-if="$slots.header || title || subtitle" class="base-card__header">
      <slot name="header">
        <ion-card-title v-if="title">{{ title }}</ion-card-title>
        <ion-card-subtitle v-if="subtitle">{{ subtitle }}</ion-card-subtitle>
      </slot>
    </ion-card-header>

    <ion-card-content class="base-card__content">
      <slot />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'

withDefaults(
  defineProps<{
    interactive?: boolean
    subtitle?: string
    title?: string
  }>(),
  {
    interactive: false,
    subtitle: '',
    title: '',
  },
)
</script>

<style scoped lang="scss">
.base-card {
  --background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin: 0;
}

.base-card--interactive {
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    transform 160ms ease;
}

.base-card--interactive:active {
  box-shadow: var(--shadow-md);
  transform: translateY(1px);
}

.base-card__header {
  padding: var(--space-5) var(--space-5) var(--space-2);
}

.base-card__content {
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  padding: var(--space-5);
}
</style>
