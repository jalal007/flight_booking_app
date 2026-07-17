<template>
  <ion-footer class="app-footer">
    <ion-toolbar>
      <slot />
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonToolbar } from '@ionic/vue'
</script>

<style scoped lang="scss">
.app-footer {
  z-index: var(--z-footer);
}

ion-toolbar {
  --background: var(--color-surface);
  --border-color: var(--color-border);
  padding-bottom: var(--safe-bottom);
}
</style>
