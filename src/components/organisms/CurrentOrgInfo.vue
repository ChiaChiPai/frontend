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
  <div class="mb-2 flex items-center py-3 px-1">
    <h2 class="text-xl font-bold mr-auto">
      {{ org.name }}
    </h2>
    <AppLabel class="mr-2">
      {{ org.type }}
    </AppLabel>
    <AppLabel outline>
      {{ org.city }}
    </AppLabel>
  </div>
</template>
