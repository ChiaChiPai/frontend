<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  info: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="card mb-2 flex items-center justify-between">
    <h2 class="text-xl font-bold py-2">
      {{ info.organization.name }}
    </h2>
    <AppLabel class="ml-auto">
      {{ info.organization.type }}
    </AppLabel>
    <AppLabel class="ml-2" outline>
      {{ info.organization.city }}
    </AppLabel>
  </div>
</template>
