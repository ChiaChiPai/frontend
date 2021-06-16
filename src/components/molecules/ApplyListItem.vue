<script setup lang="ts">
import { defineProps } from 'vue'
import { useApply } from '@/logics/apply'
import dayjs from 'dayjs'

import type { PropType } from 'vue'
import type { SupplyItem } from '@/types'

const { changeItem, isChecked } = useApply()

defineProps({
  item: {
    type: Object as PropType<SupplyItem>,
    required: true,
  },
})

</script>

<template>
  <div class="flex items-center border border-gray-600 rounded-md py-2 px-3">
    <AppCheckbox :checked="isChecked(item.id)" @change="changeItem(item, $event)" />
    <div class="space-x-1 flex flex-1">
      <div class="pr-1 pl-3 font-medium mr-auto w-2/4">
        {{ item.name }}
      </div>
      <div class="px-1 w-1/4">
        {{ item.amount }}/{{ item.unit }}
      </div>
      <div class="px-1 w-1/4">
        {{ dayjs(item.expiredAt).format('MM/DD') }}
      </div>
    </div>
  </div>
</template>
