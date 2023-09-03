<template>
  <div class="flex flex-col items-center justify-start p-4">
    <div :class="cn(`flex items-center justify-around rounded-full bg-primary p-5`, iconClass)">
      <component
        class="text-3xl text-white"
        :is="icon"
      ></component>
    </div>
    <p class="my-2 text-center text-lg font-medium uppercase">{{ title }}</p>
    <p class="break-words text-center font-light leading-tight">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils'

defineProps({
  title: String,
  text: String,
  icon: Object,
  iconClass: String
})
</script>
