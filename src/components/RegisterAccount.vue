<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <div>
    <span class="py-2 block">註冊帳號：</span>
    <div class="flex space-x-4 text-center">
      <router-link to="/register/org" class="flex-1 btn btn-outline">
        機構單位
      </router-link>
      <router-link to="/register/person" class="flex-1 btn">
        一般民眾
      </router-link>
    </div>
  </div>
</template>
