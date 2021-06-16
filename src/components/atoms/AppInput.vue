<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

defineProps({
  id: String,
  name: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: [Number, String],
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
})

defineEmit(['change', 'blur', 'click'])

</script>

<template>
  <input
    :type="type"
    :value="value"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    :disabled="disabled"
    class="border border-tansparent rounded-md outline-none w-full py-2 px-3 focus:border-gray-400"
    :class="$attrs.class || {'border-red-400': error}"
    @input="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @click="$emit('click', $event)"
  >
</template>
