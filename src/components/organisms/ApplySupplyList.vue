<script setup lang="ts">
import { defineProps } from 'vue'

import type { PropType } from 'vue'
import type { Supply } from '@/types'

defineProps({
  list: {
    type: Array as PropType<Supply[]>,
    required: true,
  },
})

</script>

<template>
  <div
    v-for="(supply, key) in list"
    :key="key"
    class="card mb-2"
  >
    <div class="mb-1">
      <h3>需求物資</h3>
      <span class="text-lg">{{ supply.name }}</span>
    </div>
    <div class="flex items-stretch mb-2">
      <div class="w-6/12">
        <h3>需求數量</h3>
        <span class="block text-lg py-1">{{ supply.amount }}/{{ supply.unit }}</span>
      </div>
      <div class="w-6/12">
        <h3>可贊助數量</h3>
        <input
          v-model="supply.provide.amount"
          class="border border-tansparent rounded-md outline-none w-full py-2 px-3 focus:border-gray-400"
          type="number"
        >
      </div>
    </div>
    <div class="flex items-stretch mb-2">
      <span class="w-6/12">
        <h3>截止日期</h3>
        <span class="block text-lg py-1">{{ supply.ended_date }}</span>
      </span>
      <div class="w-6/12">
        <h3>可贊助日期</h3>
        <AppDatepicker
          v-model="supply.provide.date"
        />
      </div>
    </div>
    <div class="flex flex-col items-end">
      <label :for="`apply-${key}`">
        <input
          :id="`apply-${key}`"
          v-model="supply.provide.applyCheck"
          type="checkbox"
          class="hidden"
        >
        <span class="flex items-center text-lg text-gray-600">
          <span class="mr-2">申請</span>
          <uil:check-square v-if="supply.provide.applyCheck" />
          <uil:square v-else />
        </span>
      </label>
    </div>
  </div>
</template>
