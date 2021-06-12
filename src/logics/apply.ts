import { computed, reactive, ref, watch } from 'vue'
// import { useRoute } from 'vue-router'
import { format, isBefore, isEqual } from 'date-fns'

import type { SupplyInfo } from '@/types'

export function useApply() {
  // const route = useRoute()
  // const { id } = route.query

  const isDisabled = ref(true)
  const supplyInfo = reactive<SupplyInfo>({
    id: 0,
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

  const checkedSupply = computed(() => {
    return supplyInfo.supplies
      .filter(supply => supply.provide.applyCheck)
  })

  watch(checkedSupply, (supplies) => {
    if (supplies.length > 0) {
      isDisabled.value = false
      supplies.map(supply => supply.provide.amount
        && supply.amount >= supply.provide.amount
        && (isBefore(new Date(supply.provide.date), new Date(supply.ended_date))
          || isEqual(new Date(supply.provide.date), new Date(supply.ended_date))
        ))
    } else {
      isDisabled.value = true
    }
  })

  const checkedItemLen = computed(() =>
    supplyInfo.supplies.filter(el => el.provide.applyCheck).length,
  )

  return {
    isDisabled,
    supplyInfo,
    checkedItemLen,
  }
}
