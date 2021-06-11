<script setup lang="ts">
import { useAuth } from '@/logics/auth'

const {
  loginWithLine,
  loginWithFacebook,
  loginWithTwitter,
} = useAuth()

</script>

<template>
  <div class="space-y-3 py-4 border-t">
    <button class="btn w-full bg-line" @click="loginWithLine">
      Line 登入
    </button>
    <button class="btn w-full bg-facebook" @click="loginWithFacebook">
      Facebook 登入
    </button>
    <button class="btn w-full bg-twitter" @click="loginWithTwitter">
      Twitter 登入
    </button>
  </div>
</template>
