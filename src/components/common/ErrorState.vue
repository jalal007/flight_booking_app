<template>
  <section class="error-state" role="alert">
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
    <slot name="actions" />
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    description?: string
    title?: string
  }>(),
  {
    description: '',
    title: 'Something went wrong',
  },
)
</script>

<style scoped lang="scss">
.error-state {
  background: color-mix(in srgb, var(--color-danger) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-danger) 26%, transparent);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  display: grid;
  gap: var(--space-3);
  padding: var(--space-5);
}

h2,
p {
  margin: 0;
}

h2 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0;
}

p {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}
</style>
