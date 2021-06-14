<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="space-y-2">
      <AppTitle>
        Buttons
      </AppTitle>
      <div class="flex space-x-2">
        <AppButton>
          Button
        </AppButton>
        <AppButton outline>
          Button
        </AppButton>
      </div>
    </div>
    <div class="space-y-2">
      <AppTitle>
        Inputs
      </AppTitle>
      <AppCheckbox>
        Check
      </AppCheckbox>
      <FormCheckbox name="checkbox" label="Check" disabled />
      <AppInput />
    </div>
    <div class="space-y-2">
      <AppTitle>
        Label (Tag)
      </AppTitle>
      <div class="space-x-2">
        <AppLabel>
          Label
        </AppLabel>
        <AppLabel outline>
          Label
        </AppLabel>
      </div>
    </div>
    <div class="space-y-2">
      <AppTitle>
        Others
      </AppTitle>
      <div class="space-x-2">
        <AppLogo />
        <IconLoading :is-loading="true" />
      </div>
    </div>
  </div>
</template>
