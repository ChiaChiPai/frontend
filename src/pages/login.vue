<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})
</script>

<template>
  <AuthLayout>
    <h1 class="text-xl mb-4">
      登入
    </h1>
    <LoginForm />
    <SSOLogin />
    <RegisterAccount />
  </AuthLayout>
</template>
