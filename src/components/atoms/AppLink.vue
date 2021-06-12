<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'

defineProps({
  to: {
    type: [String, Object] as PropType<string | object | null>,
    default: null,
  },
  href: {
    type: String,
    default: '',
  },
  outline: {
    type: Boolean,
    default: false,
  },
})

</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    class="btn"
    :class="{'btn-outline': outline}"
  >
    <div v-if="$slots.icon" class="inline-block mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </router-link>
  <a
    v-else
    :href="href"
    target="_blank"
    rel="noopener"
    class="btn"
    :class="{'btn-outline': outline}"
  >
    <div v-if="$slots.icon" class="inline-block mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </a>
</template>
