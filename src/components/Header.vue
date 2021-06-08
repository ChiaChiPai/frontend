<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <header class="border px-2">
    <div class="container max-w-screen-xl mx-auto h-60px flex items-center justify-between text-primary">
      <button class="icon-btn">
        <ic:round-menu />
      </button>
      <span class="text-black font-bold">Shared TW</span>
      <button class="icon-btn">
        <ic:round-account-circle />
      </button>
    </div>
  </header>
</template>
