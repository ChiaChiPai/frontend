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
    <Input
      name="email"
      type="email"
      label="帳號"
      placeholder="user@example.com"
      autocomplete="email"
    />
    <Input
      name="password"
      type="password"
      label="密碼"
      placeholder="password"
      autocomplete="current-password"
    />
    <Checkbox
      name="remember"
      label="記住我"
    />
    <div class="flex justify-between items-center mb-4">
      <router-link to="/account/password_reset" class="text-sm underline">
        忘記密碼
      </router-link>
      <button class="btn" type="submit" :disabled="!meta.valid">
        登入
      </button>
    </div>
  </Form>
</template>
