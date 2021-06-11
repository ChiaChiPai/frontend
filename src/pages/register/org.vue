<script setup lang="ts">
import { ref } from 'vue'
import { syncRef } from '@vueuse/core'
import { Form } from 'vee-validate'
import { useAuth } from '@/logics/auth'
import { OtherContactMethodEnum } from '@/api'
import { TWCountyList, otherContactItems, needInvoiceItems, orgTypes, initialValues } from '@/data'

import type { ToSchema, RegisterOrgArgs } from '@/types'

const { registerOrg } = useAuth()

const schema: ToSchema<RegisterOrgArgs> = {
  username: 'required',
  email: 'required|email',
  password: 'required|min:8',
  passwordConfirm: 'required|confirmed:@password',
  tel: 'required|numeric',
  orgType: 'required',
  orgTypeOther: '',
  orgName: 'required',
  orgCity: 'required',
  orgAddress: 'required',
  orgOfficeHours: 'required',
  invoice: 'required',
  otherContactType: '',
  otherContent: '',
}

const isLoading = ref(false)

function onSubmit(values: RegisterOrgArgs) {
  const { loading } = registerOrg(values)
  syncRef(loading, isLoading)
}
</script>

<template>
  <AuthLayout>
    <h1 class="text-xl mb-4">
      註冊帳號（一線單位）
    </h1>
    <Form v-slot="{ meta, values }" :validation-schema="schema" :initial-values="initialValues" @submit="onSubmit">
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
        label="聯絡電話（不含『 - 』）"
        placeholder="0901234564"
        autocomplete="tel"
        required
      />
      <TheSelect
        name="orgType"
        label="單位類型"
        :children="orgTypes"
        required
      />
      <TheInput
        v-if="values.orgType === 'other'"
        name="orgTypeOther"
        label=""
        placeholder="單位類型"
      />
      <TheInput
        name="orgName"
        type="text"
        label="單位正式名稱"
        required
      />
      <TheSelect
        name="orgCity"
        label="單位縣市"
        :children="TWCountyList"
        required
      />
      <TheInput
        name="orgAddress"
        type="text"
        label="單位地址"
        required
      />
      <TheInput
        name="orgOfficeHours"
        type="text"
        label="聯絡時間 (ex. 10:00~17:00)"
        required
      />
      <TheSelect
        name="otherContactType"
        label="其他聯絡方式"
        :children="otherContactItems"
      />
      <TheInput
        v-if="values.otherContactType !== OtherContactMethodEnum.NotSet"
        name="otherContact"
        label=""
        :placeholder="otherContactItems.find(item => item.value === values.otherContactType)?.text || ''"
      />
      <TheRadio
        name="invoice"
        label="是否需要收據"
        :children="needInvoiceItems"
        required
      />
      <RegisterActions :is-loading="isLoading" :meta="meta" />
    </Form>
  </AuthLayout>
</template>
