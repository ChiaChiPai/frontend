<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'checkbox',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
  },
})

defineEmit(['change', 'input', 'blur'])
</script>

<template>
  <label class="inline-flex items-center text-black select-none" :class="{'text-gray-300': disabled}">
    <span class="checkbox__input">
      <input
        type="checkbox"
        :name="name"
        :disabled="disabled"
        @change="$emit('change', $event)"
        @blur="$emit('blur', $event)"
        @input="$emit('input', $event)"
      >
      <span class="checkbox__control">
        <uil:check-circle class="checked" />
        <uil:circle />
      </span>
    </span>
    <slot />
  </label>
</template>

<style lang="postcss">
.checkbox__input {
  @apply inline-block relative w-21px h-21px mr-1 align-middle;
  > * {
    @apply absolute inset-0 w-full h-full;
  }
  .checkbox__control {
    @apply inline-flex;
    @apply relative w-full h-full;
    .checked {
      @apply opacity-0;
    }
    svg {
      @apply absolute inset-0 w-full h-full transition-opacity;
    }
  }
  input {
    @apply opacity-0 m-0;
    &:checked + .checkbox__control .checked {
      @apply opacity-100;
    }
    &:disabled + .checkbox__control {
      @apply text-gray-300;
    }
  }
}
</style>
