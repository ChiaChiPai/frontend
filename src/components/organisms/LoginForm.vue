<script setup lang="ts">
import { Form } from 'vee-validate'
import { useAuth } from '@/logics/auth'
import { ref } from 'vue'
import { syncRef } from '@vueuse/core'

import type { LoginArgs } from '@/types'

const { login } = useAuth()

const schema = {
  username: 'required',
  password: 'required|min:8',
}

const isLoading = ref(false)

function onSubmit(values: LoginArgs) {
  const { loading } = login(values)
  syncRef(loading, isLoading)
}
</script>

<template>
  <Form v-slot="{ meta }" :validation-schema="schema" @submit="onSubmit">
    <AppInput
      name="username"
      type="text"
      label="帳號"
      placeholder="username"
      autocomplete="username"
    />
    <AppInput
      name="password"
      type="password"
      label="密碼"
      placeholder="password"
      autocomplete="current-password"
    />
    <div class="flex mb-6 justify-between items-center">
      <router-link to="/account/password_reset" class="text-sm underline">
        忘記密碼
      </router-link>
      <AppButton type="submit" :disabled="!meta.valid">
        <IconLoading v-if="isLoading" />
        <span v-else>登入</span>
      </AppButton>
    </div>
  </Form>
</template>
