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
  <div class="relative w-full pb-6">
    <label :for="name" class="block mb-1">
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="inputValue"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      class="
        border border-tansparent rounded-md
        px-3 py-2 outline-none w-full
        focus:border-gray-400"
      :class="{ 'border-red-400': !!errorMessage }"
      @input="handleChange"
      @blur="handleBlur"
    >
    <p v-show="errorMessage" class="absolute left-0 bottom-0.5 m-0 text-xs text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>
