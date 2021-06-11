<script setup lang="ts">
import { defineProps, reactive } from 'vue'
import type { TSupplyInfo } from '@/types'

defineProps({})

const data: TSupplyInfo[] = Array.from({ length: 6 }).flatMap((_, i) => [
  {
    id: `${(i * 3) + 1}`,
    organization: {
      type: '醫院',
      name: '臺大醫院',
      city: '臺北市',
    },
    name: '維尼熊',
    amount: 200,
    unit: '隻',
    ended_date: '2021-06-16',
  },
  {
    id: `${(i * 3) + 2}`,
    organization: {
      type: '消防局',
      name: '淡水消防局',
      city: '新北市',
    },
    name: 'N95',
    amount: 200,
    unit: '個',
    ended_date: '2021-06-16',
  },
  {
    id: `${(i * 3) + 3}`,
    organization: {
      type: '警察局',
      name: '臥龍派出所',
      city: '桃園市',
    },
    name: '誠實豆沙包',
    amount: 200,
    unit: '個',
    ended_date: '2021-06-16',
  },
])

const supplyInfos = reactive(data)

</script>

<template>
  <div class="row">
    <div
      v-for="(supplyInfo, idx) in supplyInfos"
      :key="idx + Math.random().toString(36).substring(2, 9)"
      class="col mb-2"
    >
      <Card
        :supply-info="supplyInfo"
      />
    </div>
  </div>
</template>
