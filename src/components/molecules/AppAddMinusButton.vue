<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: null,
  },
})

const value = ref(props.value)

const handleAdd = () => {
  if (value.value >= props.max) return
  value.value++
}

const handleMinus = () => {
  if (value.value <= props.min) return
  value.value--
}

</script>

<template>
  <AppInput
    type="button"
    value="-"
    class="rounded-r-none rounded-5 h-7 leading-none py-0 px-0 w-6"
    @click="handleMinus"
  />
  <AppInput
    type="number"
    :value="value"
    class="rounded-none h-7 text-center leading-none py-0 px-0 w-7"
  />
  <AppInput
    type="button"
    value="+"
    class="rounded-l-none h-7 leading-none py-0 px-0 w-6"
    @click="handleAdd"
  />
</template>
