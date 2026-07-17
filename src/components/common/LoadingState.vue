<template>
  <section class="loading-state" aria-live="polite" aria-busy="true">
    <ion-spinner name="crescent" />
    <p>{{ label }}</p>
  </section>
</template>

<script setup lang="ts">
import { IonSpinner } from '@ionic/vue'

withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Loading',
  },
)
</script>

<style scoped lang="scss">
.loading-state {
  align-items: center;
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  justify-content: center;
  min-height: 10rem;
}

p {
  font-size: var(--font-size-sm);
  margin: 0;
}
</style>
