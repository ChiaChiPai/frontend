<script setup lang="ts">
import { defineProps } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(props.name, undefined, {
  initialValue: props.value,
})

</script>

<template>
  <div class="w-full pb-6 relative">
    <label :for="name" class="mb-1 block">
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="inputValue"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      class="border border-tansparent rounded-md outline-none w-full py-2 px-3 focus:border-gray-400"
      :class="{ 'border-red-400': !!errorMessage }"
      @input="handleChange"
      @blur="handleBlur"
    >
    <p v-show="errorMessage" class="m-0 text-xs bottom-0.5 left-0 text-red-400 absolute">
      {{ errorMessage }}
    </p>
  </div>
</template>
