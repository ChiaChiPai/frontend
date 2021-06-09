<script setup lang="ts">
import { Form } from 'vee-validate'
import type { LoginArgs } from '@/logics/auth'

const schema = {
  username: 'required',
  email: 'required|email',
  password: 'required|min:8',
  passwordConfirm: 'required|confirmed:@password',
  tel: 'required|numeric',
}

const initialValues = {
  otherContactType: 'line',
  invoice: 'no',
}

const selectChild = [
  {
    text: 'Line',
    value: 'line',
  },
  {
    text: 'Facebook',
    value: 'facebook',
  },
  {
    text: 'Telegram',
    value: 'telegram',
  },
]

const radioChild = [
  {
    text: '是',
    value: 'yes',
  },
  {
    text: '否',
    value: 'no',
  },
]

function onSubmit(values: LoginArgs) {
  alert(JSON.stringify(values, null, 2))
}
</script>

<template>
  <AuthLayout>
    <h1 class="text-xl mb-4">
      註冊帳號（一般民眾）
    </h1>
    <Form v-slot="{ meta }" :validation-schema="schema" :initial-values="initialValues" @submit="onSubmit">
      <TheInput
        name="username"
        label="帳號名稱"
        placeholder="username"
        autocomplete="username"
        required
      />
      <TheInput
        name="email"
        type="email"
        label="電子郵件信箱"
        placeholder="user@example.com"
        autocomplete="email"
        required
      />
      <TheInput
        name="password"
        type="password"
        label="密碼"
        placeholder="password"
        autocomplete="new-password"
        required
      />
      <TheInput
        name="passwordConfirm"
        type="password"
        label="確認密碼"
        placeholder="password"
        autocomplete="current-password"
        required
      />
      <TheInput
        name="tel"
        type="tel"
        label="電話號碼（不含『 - 』）"
        placeholder="0901234564"
        autocomplete="tel"
        required
      />
      <TheSelect
        name="otherContactType"
        label="其他聯絡方式"
        :children="selectChild"
      />
      <TheInput
        name="otherContact"
        type="text"
        label=""
        placeholder="line / facebook / telegram"
        autocomplete="tel"
      />
      <TheRadio
        name="invoice"
        label="是否需要收據"
        :children="radioChild"
        required
      />
      <div class="flex mb-4 justify-between items-center">
        <router-link to="/" class="text-sm underline">
          取消
        </router-link>
        <button class="btn" type="submit" :disabled="!meta.valid">
          註冊
        </button>
      </div>
    </Form>
  </AuthLayout>
</template>
