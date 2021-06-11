<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  meta: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="flex justify-between items-center">
    <router-link to="/login" class="text-sm underline">
      取消
    </router-link>
    <button class="btn inline-flex items-center h-40px" type="submit" :disabled="!meta.valid">
      <mdi:loading v-if="isLoading" class="animate-spin text-lg" />
      <span v-else>註冊</span>
    </button>
  </div>
</template>
