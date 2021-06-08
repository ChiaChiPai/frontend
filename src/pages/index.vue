<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps({})

const msg = ref('Hello Vue 3 + TypeScript + Vite')
</script>

<template>
  <div>{{ msg }}</div>
  <h2 class="text-xl font-bold py-2">
    Components
  </h2>
  <div class="space-x-2">
    <button class="btn">
      我要幫忙
    </button>
    <span class="tag">
      醫院
    </span>
    <span class="tag tag-outline">
      臺北市
    </span>
  </div>
</template>
