<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <div>
    <span class="block py-2">註冊帳號：</span>
    <div class="flex space-x-4 text-center">
      <router-link to="#" class="flex-1 btn btn-outline">
        機構單位
      </router-link>
      <router-link to="#" class="flex-1 btn">
        一般民眾
      </router-link>
    </div>
  </div>
</template>
