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
    <OrgInfoNavBar :org="supplyInfo.organization" />
    <ApplySupplyList :list="supplyInfo.items" />
  </main>
  <ApplyToolbar :checked-num="checkedItemLen" :is-disabled="isDisabled" />
</template>
