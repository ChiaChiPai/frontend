<script setup lang="ts">
import { Form } from 'vee-validate'
import type { LoginArgs } from '@/logics/auth'

const schema = {
  email: 'required|email',
  password: 'required|min:8',
  remember: '',
}

function onSubmit(values: LoginArgs) {
  alert(JSON.stringify(values, null, 2))
}
</script>

<template>
  <Form v-slot="{ meta }" :validation-schema="schema" @submit="onSubmit">
    <TheInput
      name="email"
      type="email"
      label="帳號"
      placeholder="user@example.com"
      autocomplete="email"
    />
    <TheInput
      name="password"
      type="password"
      label="密碼"
      placeholder="password"
      autocomplete="current-password"
    />
    <TheCheckbox
      name="remember"
      label="記住我"
    />
    <div class="flex mb-6 justify-between items-center">
      <router-link to="/account/password_reset" class="text-sm underline">
        忘記密碼
      </router-link>
      <button class="btn" type="submit" :disabled="!meta.valid">
        登入
      </button>
    </div>
  </Form>
</template>
