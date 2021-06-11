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
    <TheInput
      name="username"
      type="text"
      label="帳號"
      placeholder="username"
      autocomplete="username"
    />
    <TheInput
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
      <button class="btn inline-flex items-center h-40px" type="submit" :disabled="!meta.valid">
        <mdi:loading v-if="isLoading" class="animate-spin text-lg" />
        <span v-else>登入</span>
      </button>
    </div>
  </Form>
</template>
