<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})
</script>

<template>
  <main class="w-full">
    <div class="p-10 rounded-md border text-left max-w-sm mx-auto">
      <h1 class="text-xl mb-4">
        登入
      </h1>
      <LoginForm />
      <SSOLogin />
      <RegisterAccount />
    </div>
  </main>
</template>
