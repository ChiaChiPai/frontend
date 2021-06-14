<script setup lang="ts">
import { defineProps } from 'vue'
import { ErrorMessage } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <ErrorMessage :name="name" as="p" class="m-0 text-xs bottom-0.5 left-0 text-red-400 absolute" />
</template>
