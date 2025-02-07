<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { PropType } from 'vue'
import { useEventListener } from '@vueuse/core'

// todo: 針對 inline-flex parent 優化
type Placement =
  'bottom' |
  'top' |
  'bottom-left' |
  'bottom-right' |
  'top-left' |
  'top-right'

const props = defineProps({
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom-left',
  },
})
const defaultPosition = props.placement
  .split('-')
  .map((placement, index) => {
    switch (placement) {
      case 'left':
      case 'right':
        return `${placement}-0`
      case 'bottom':
        return 'transform translate-y-full -bottom-2'
      case 'top':
        return 'transform -translate-y-full -top-2'
    }
    return ''
  })
  .join(' ')

const popover = ref<HTMLDivElement>()
const isShow = ref(false)
const openPopover = () => isShow.value = true
const closePopover = () => isShow.value = false

const handleOutsideClick = (e: Event) => {
  e.stopPropagation()

  if (!popover.value?.contains(e.target as Node)) {
    closePopover()
  }
}

useEventListener(document, 'click', handleOutsideClick)
useEventListener(document, 'touchstart', handleOutsideClick)

</script>

<template>
  <div ref="popover" tabindex="0" class="relative outline-none" @click="openPopover">
    <slot />
    <div v-if="isShow" class="absolute w-max z-50" :class="defaultPosition">
      <div @click.stop="closePopover">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
