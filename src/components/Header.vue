<script setup lang="ts">
import { defineProps } from 'vue'
import { useAuth } from '@/logics/auth'

defineProps({})

const { isAuthorized } = useAuth()

</script>

<template>
  <header class="border px-2">
    <div class="container max-w-screen-xl mx-auto h-60px flex items-center justify-between text-primary">
      <button class="icon-btn">
        <ic:round-menu />
      </button>
      <router-link to="/" class="block">
        <img src="/img/logo.png" alt="Shared TW" class="h-55px">
      </router-link>
      <button v-if="isAuthorized" class="icon-btn">
        <ic:round-account-circle />
      </button>
      <router-link v-else to="/login" class="btn btn-outline">
        登入
      </router-link>
    </div>
  </header>
</template>
