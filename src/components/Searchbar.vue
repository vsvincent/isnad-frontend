<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    v-bind="$attrs"
    type="text"
    p="x-4 y-2"
    w="350px"
    text="center"
    bg="transparent"
    border="~ rounded green-400 dark:green-900"
    outline="none active:none"
  >
</template>
