<script setup lang="ts">
import { computed, defineProps, ref, unref } from 'vue'
import type { LoginArgs } from '@/logics/auth'

defineProps({})

const loginData = ref<Partial<LoginArgs>>({})
const isFilled = computed(() => {
  return !!(loginData.value.username && loginData.value.password)
})

function handleLogin(event: Event) {
  if (!isFilled.value) return

  const loginArgs = unref(loginData)
  console.log(loginArgs)
}

</script>

<template>
  <main class="w-full">
    <div class="p-10 rounded-md border text-left max-w-sm mx-auto">
      <h1 class="text-xl mb-4">
        登入
      </h1>
      <form @submit.prevent="handleLogin">
        <Input v-model="loginData.password" label="帳號" type="email" placeholder="user@example.com" autocomplete="username" />
        <Input v-model="loginData.password" label="密碼" type="password" placeholder="password" autocomplete="current-password" />
        <label for="">
          <input id="" type="checkbox" name="">
          記住我
        </label>
        <div class="flex justify-between items-center my-4">
          <router-link to="#">
            忘記密碼
          </router-link>
          <button class="btn" type="submit" :disabled="!isFilled">
            登入
          </button>
        </div>
      </form>
      <div class="space-y-2 mb-2">
        <button class="btn w-full bg-line" type="submit" :disabled="!isFilled">
          Line 登入
        </button>
        <button class="btn w-full bg-facebook" type="submit" :disabled="!isFilled">
          Facebook 登入
        </button>
        <button class="btn w-full bg-twitter" type="submit" :disabled="!isFilled">
          Twitter 登入
        </button>
      </div>
      <div>
        <span class="block py-2">註冊帳號：</span>
        <div class="flex space-x-4 text-center">
          <router-link to="#" class="flex-1 btn btn-outline" :disabled="!isFilled">
            機構單位
          </router-link>
          <router-link to="#" class="flex-1 btn" :disabled="!isFilled">
            一般民眾
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
