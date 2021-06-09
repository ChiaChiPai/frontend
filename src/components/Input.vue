<script setup lang="ts">
import { defineEmit, defineProps, ref, watch } from 'vue'

const input = ref<HTMLInputElement | null>(null)

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmit(['input', 'update:modelValue'])

watch(() => props.modelValue, (v) => {
  if (!input.value || input.value.value === v) return
  input.value.value = v
})

function handleInput(event: Event) {
  const { value } = event.target as HTMLInputElement
  emit('input', value)
  emit('update:modelValue', value)
}

</script>

<template>
  <label class="block my-2">
    <span class="block text-sm mb-1">{{ label }}</span>
    <input
      class="px-3 py-2 border w-full"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="handleInput"
    >
  </label>
</template>
