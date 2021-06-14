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
    v-slot="{ field }"
    :name="name"
    type="checkbox"
    :value="value"
    :label="label"
    class="relative w-full pb-6"
    as="div"
  >
    <label class="ml-2">
      <input type="checkbox" :name="name" v-bind="field" :value="value" :disabled="disabled">
      {{ label }}
    </label>
    <FormErrorMessage :name="name" />
  </Field>
</template>
