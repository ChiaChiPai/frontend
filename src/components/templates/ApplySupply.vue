<script setup lang="ts">
import { useApply } from '@/logics/apply'

const {
  isDisabled,
  supplyInfo,
  checkedItemLen,
} = useApply()

</script>

<template>
  <main class="pb-12">
    <CurrentOrgInfo :org="supplyInfo.organization" />
    <ApplySupplyList :list="supplyInfo.supplies" />
  </main>
  <ApplyToolbar :checked-num="checkedItemLen" :is-disabled="isDisabled" />
</template>
