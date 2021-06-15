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
  }
})

let count =  ref(props.value);

const handleAdd = () => {
  if(count.value >= props.max) return
  count.value++
}

const handleMinus = () => {
  if(count.value <= props.min) return
  count.value--
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
    :count="count"
    class="rounded-none h-7 text-center leading-none py-0 px-0 w-7"
  />
  <AppInput
    type="button"
    value="+"
    class="rounded-l-none h-7 leading-none py-0 px-0 w-6"
    @click="handleAdd"
  />
</template>