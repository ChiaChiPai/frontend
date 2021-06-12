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

const {
  id,
  organization,
  name,
  amount,
  unit,
  ended_date,
} = toRefs(props.supplyInfo)
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 class="text-xl font-bold">
        {{ organization.name }}
      </h2>
      <AppLabel>{{ organization.type }}</AppLabel>
    </div>
    <AppLabel outline>
      {{ organization.city }}
    </AppLabel>
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
      <AppLink :to="`/apply?id=${id}`">
        我要幫忙
      </AppLink>
    </div>
  </div>
</template>
