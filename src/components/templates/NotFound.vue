<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <h1 class="text-3xl font-bold py-16">
    404 Not Found
  </h1>
  <router-link to="/" class="hover:text-secondary">
    返回首頁
  </router-link>
</template>
