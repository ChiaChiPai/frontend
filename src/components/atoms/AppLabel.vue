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
  <span
    class="tag"
    :class="{'tag-outline': outline}"
  >
    <slot />
  </span>
</template>
