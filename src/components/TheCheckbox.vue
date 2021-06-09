<script setup lang="ts">
import { defineProps } from 'vue'
import { Field } from 'vee-validate'

defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <Field
    v-slot="{ field, errorMessage }"
    :name="name"
    type="checkbox"
    :value="value"
    class="relative w-full pb-6"
    as="div"
  >
    <label class="ml-2">
      <input type="checkbox" :name="name" v-bind="field" :value="value" :disabled="disabled">
      {{ label }}
    </label>
    <p v-show="errorMessage" class="absolute left-0 bottom-0.5 m-0 text-xs text-red-400">
      {{ errorMessage }}
    </p>
  </Field>
</template>
