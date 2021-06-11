<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { PropType } from 'vue'
import type { TSupplyInfo } from '@/types'

const props = defineProps({
  supplyInfo: {
    type: Object as PropType<TSupplyInfo>,
    required: true,
  },
})

const { supplyInfo } = toRefs(props)
const {
  id,
  organization,
  name,
  amount,
  unit,
  ended_date,
} = toRefs(supplyInfo.value)
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 class="text-xl font-bold py-2">
        {{ organization.name }}
      </h2>
      <span class="tag">{{ organization.type }}</span>
    </div>
    <span class="tag tag-outline">{{ organization.city }}</span>
    <div class="py-3 flex justify-between">
      <div>
        <h3>需求物資</h3>
        {{ name }}
      </div>
      <div>
        <h3>需求數量</h3>
        {{ amount }}/{{ unit }}
      </div>
      <div>
        <h3>截止日期</h3>
        {{ ended_date }}
      </div>
    </div>
    <div class="flex justify-end">
      <router-link class="btn" :to="`/apply?id=${id}`">
        我要幫忙
      </router-link>
    </div>
  </div>
</template>
