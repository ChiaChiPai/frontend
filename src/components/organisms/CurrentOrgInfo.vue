<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  org: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="card mb-2 flex items-center justify-between">
    <h2 class="text-xl font-bold py-2">
      {{ org.name }}
    </h2>
    <AppLabel class="ml-auto">
      {{ org.type }}
    </AppLabel>
    <AppLabel class="ml-2" outline>
      {{ org.city }}
    </AppLabel>
  </div>
</template>
