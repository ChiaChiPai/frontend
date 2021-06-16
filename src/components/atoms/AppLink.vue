<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
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
  inline: {
    type: Boolean,
    default: false,
  },
  size: String as PropType<'sm'>,
})

const linkClass = computed(() => ({
  'btn': !props.inline,
  'btn-outline': props.outline,
  'text-sm underline': props.inline,
  'text-sm px-2.5 py-2': props.size === 'sm',
}))

</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    :class="linkClass"
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
    :class="linkClass"
  >
    <div v-if="$slots.icon" class="inline-block mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </a>
</template>
