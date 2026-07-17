<template>
  <div class="base-input">
    <ion-item
      class="base-input__field"
      :class="{ 'base-input__field--invalid': error }"
      lines="none"
    >
      <ion-label v-if="label" position="stacked">{{ label }}</ion-label>
      <ion-input
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :value="modelValue"
        @ionInput="handleInput"
      />
    </ion-item>

    <ion-text v-if="message" :color="error ? 'danger' : 'medium'">
      <small>{{ message }}</small>
    </ion-text>
  </div>
</template>

<script setup lang="ts">
import type { AutocompleteTypes } from '@ionic/core'
import { computed } from 'vue'
import { IonInput, IonItem, IonLabel, IonText } from '@ionic/vue'

type InputType = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
type InputMode = 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
type IonInputEvent = CustomEvent<{ value?: string | null }>

const props = withDefaults(
  defineProps<{
    autocomplete?: AutocompleteTypes
    error?: string
    helperText?: string
    inputmode?: InputMode
    label?: string
    modelValue?: string
    placeholder?: string
    readonly?: boolean
    type?: InputType
  }>(),
  {
    autocomplete: 'off',
    error: '',
    helperText: '',
    inputmode: 'text',
    label: '',
    modelValue: '',
    placeholder: '',
    readonly: false,
    type: 'text',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const message = computed(() => props.error || props.helperText)

const handleInput = (event: IonInputEvent): void => {
  emit('update:modelValue', event.detail.value ?? '')
}
</script>

<style scoped lang="scss">
.base-input {
  display: grid;
  gap: var(--space-2);
}

.base-input__field {
  --background: var(--color-surface-muted);
  --border-radius: var(--radius-md);
  --inner-padding-bottom: var(--space-2);
  --inner-padding-end: var(--space-3);
  --inner-padding-start: var(--space-3);
  --inner-padding-top: var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.base-input__field--invalid {
  border-color: var(--color-danger);
}

ion-label {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-1);
}

small {
  display: block;
  font-size: var(--font-size-xs);
  line-height: var(--line-height-normal);
  padding-inline: var(--space-1);
}
</style>
