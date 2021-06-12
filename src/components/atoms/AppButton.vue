<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
})

</script>

<template>
  <button
    class="btn"
    :class="{'btn-outline': outline}"
  >
    <div v-if="$slots.icon" class="inline-block mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </button>
</template>
