<script setup lang="ts">
/* eslint-disable no-console */
import {
  computed, defineProps, reactive, ref,
  watchEffect,
} from 'vue'
import { useRoute } from 'vue-router'
import { format, isBefore, isEqual } from 'date-fns'
import Datepicker from '@/components/Datepicker.vue'

defineProps({})

const route = useRoute()
const { id } = route.query

const isDisabled = ref(true)
const supplyInfo = reactive({
  id,
  organization: {
    type: '醫院',
    name: '臺大醫院',
    city: '臺北市',
  },
  supplies: Array.from({ length: 3 }).map(() => ({
    name: 'N95',
    amount: 200,
    unit: '個',
    ended_date: '2021-06-16',
    provide: {
      amount: 0,
      date: format(new Date(), 'yyyy-MM-dd'),
      applyCheck: false,
    },
  })),
})

watchEffect(() => {
  const checkSupply = supplyInfo.supplies
    .filter(supply => supply.provide.applyCheck)

  if (checkSupply.length) {
    isDisabled.value = !checkSupply
      .every(supply => supply.provide.amount
        && supply.amount >= supply.provide.amount
        && (isBefore(new Date(supply.provide.date), new Date(supply.ended_date))
          || isEqual(new Date(supply.provide.date), new Date(supply.ended_date))
        ))
  }
})

const checkedItemLen = computed(() =>
  supplyInfo.supplies.filter(el => el.provide.applyCheck).length,
)
</script>

<template>
  <div class="pb-12">
    <div class="card mb-2 flex items-center justify-between">
      <h2 class="text-xl font-bold py-2">
        {{ supplyInfo.organization.name }}
      </h2>
      <span class="tag ml-auto">
        {{ supplyInfo.organization.type }}
      </span>
      <span class="tag tag-outline ml-2 ">
        {{ supplyInfo.organization.city }}
      </span>
    </div>
    <div
      v-for="(supply, key) in supplyInfo.supplies"
      :key="key"
      class="card mb-2"
    >
      <div class="py-2">
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
            <Datepicker
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
              <mdi:checkbox-marked-outline v-if="supply.provide.applyCheck" />
              <mdi:checkbox-blank-outline v-else />
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="toolbar">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between">
      <span class="px-2">已勾選 {{ checkedItemLen }} 項</span>
      <div>
        <router-link class="btn btn-outline mr-2" to="/">
          取消
        </router-link>
        <button class="btn" :disabled="isDisabled">
          確認申請
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
.toolbar {
  @apply fixed bg-white inset-x-0 bottom-0 py-2 px-3 border;
}
</style>
