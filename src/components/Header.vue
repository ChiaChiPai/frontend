<script setup lang="ts">
import { defineProps } from 'vue'
import { useAuth } from '@/logics/auth'

defineProps({})

const { isAuthorized } = useAuth()

const menuList = [
  {
    title: '一線單位需求',
    path: '',
  },
  {
    title: '愛心捐贈',
    path: '',
  },
  {
    title: '相關平台',
    path: '',
  },
]

</script>

<template>
  <header class="fixed top-0 inset-x-0 border-b bg-white px-2 z-50">
    <div class="container max-w-screen-xl mx-auto h-$header-height flex items-center justify-between text-primary">
      <popover class="icon-btn">
        <ic:round-menu />
        <template #content>
          <ul class="rounded border bg-white -mt-2 ml-2 py-1 text-base text-black">
            <li v-for="(menu, index) in menuList" :key="index" class="py-2.5 px-6 active:text-primary">
              {{ menu.title }}
            </li>
          </ul>
        </template>
      </popover>
      <router-link to="/" class="block">
        <img src="/img/logo.png" alt="Shared TW" class="h-55px">
      </router-link>
      <div :class="{'opacity-0 pointer-events-none': $route.path === '/login'}">
        <button v-if="isAuthorized" class="icon-btn">
          <ic:round-account-circle />
        </button>
        <router-link v-else to="/login" class="btn btn-outline">
          登入
        </router-link>
      </div>
    </div>
  </header>
</template>
