<template>
  <ion-button
    class="base-button"
    :class="`base-button--${variant}`"
    :color="buttonColor"
    :disabled="disabled || loading"
    :expand="expand"
    :fill="buttonFill"
    :size="size"
    :type="type"
    :aria-busy="loading ? 'true' : undefined"
  >
    <ion-spinner v-if="loading" class="base-button__spinner" name="crescent" />
    <span class="base-button__content">
      <slot />
    </span>
  </ion-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IonButton, IonSpinner } from '@ionic/vue'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'
type ButtonFill = 'clear' | 'outline' | 'solid'
type ButtonExpand = 'block' | 'full' | undefined
type ButtonSize = 'default' | 'large' | 'small'
type ButtonType = 'button' | 'reset' | 'submit'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    expand?: ButtonExpand
    loading?: boolean
    size?: ButtonSize
    type?: ButtonType
    variant?: ButtonVariant
  }>(),
  {
    disabled: false,
    expand: 'block',
    loading: false,
    size: 'default',
    type: 'button',
    variant: 'primary',
  },
)

const colorByVariant: Record<ButtonVariant, string | undefined> = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  ghost: undefined,
  danger: 'danger',
}

const fillByVariant: Record<ButtonVariant, ButtonFill> = {
  primary: 'solid',
  secondary: 'solid',
  tertiary: 'outline',
  ghost: 'clear',
  danger: 'solid',
}

const buttonColor = computed(() => colorByVariant[props.variant])
const buttonFill = computed(() => fillByVariant[props.variant])
</script>

<style scoped lang="scss">
.base-button {
  font-weight: var(--font-weight-semibold);
  min-height: 48px;
  text-transform: none;
}

.base-button__spinner {
  height: 18px;
  margin-right: var(--space-2);
  width: 18px;
}

.base-button__content {
  align-items: center;
  display: inline-flex;
  gap: var(--space-2);
  justify-content: center;
}

.base-button--ghost {
  --color: var(--color-text);
}
</style>
