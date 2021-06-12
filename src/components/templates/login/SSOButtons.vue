<script setup lang="ts">
import { useAuth } from '@/logics/auth'

const {
  loginWithLine,
  loginWithFacebook,
  loginWithGoogle,
} = useAuth()

</script>

<template>
  <div class="space-y-3 py-4 border-t">
    <AppButton class="w-full bg-line" @click="loginWithLine">
      Line 登入
    </AppButton>
    <AppButton class="w-full bg-facebook" @click="loginWithFacebook">
      Facebook 登入
    </AppButton>
    <AppButton class="w-full bg-google" @click="loginWithGoogle">
      Google 登入
    </AppButton>
  </div>
</template>
