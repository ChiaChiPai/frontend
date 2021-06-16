<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <div class="flex items-center pl-11 pr-3">
    <div class="space-x-1 flex flex-1 text-sm">
      <div class="pr-1 pl-4 w-2/4">
        品項名稱
      </div>
      <div class="px-1 w-1/4">
        尚須數量
      </div>
      <div class="px-1 w-1/4">
        截止日
      </div>
    </div>
  </div>
</template>
