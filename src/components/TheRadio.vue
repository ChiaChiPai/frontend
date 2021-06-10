<script setup lang="ts">
import { defineProps } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import type { PropType } from 'vue'
import type { InputChildren } from '@/types'

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
  required: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Array as PropType<InputChildren[]>,
    required: true,
  },
})
</script>

<template>
  <div class="w-full pb-6 relative">
    <label :for="name" class="mb-1 block">
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>
    <div class="space-x-3">
      <template v-for="{ value, text } in children" :key="value">
        <Field :name="name" :label="label" type="radio" :value="value" /> {{ text }}
      </template>
    </div>
    <ErrorMessage :name="name" as="p" class="m-0 text-xs bottom-0.5 left-0 text-red-400 absolute" />
  </div>
</template>
