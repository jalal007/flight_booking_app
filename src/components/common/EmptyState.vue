<template>
  <section class="empty-state" aria-live="polite">
    <div v-if="$slots.media" class="empty-state__media">
      <slot name="media" />
    </div>

    <div class="empty-state__copy">
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
    </div>

    <div v-if="$slots.actions" class="empty-state__actions">
      <slot name="actions" />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    description?: string
    title: string
  }>(),
  {
    description: '',
  },
)
</script>

<style scoped lang="scss">
.empty-state {
  align-items: center;
  display: grid;
  gap: var(--space-4);
  justify-items: center;
  padding: var(--space-10) var(--space-4);
  text-align: center;
}

.empty-state__media {
  color: var(--color-brand);
}

.empty-state__copy {
  display: grid;
  gap: var(--space-2);
  max-width: 28rem;
}

h2,
p {
  margin: 0;
}

h2 {
  color: var(--color-text);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0;
  line-height: var(--line-height-tight);
}

p {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.empty-state__actions {
  width: min(100%, 18rem);
}
</style>
