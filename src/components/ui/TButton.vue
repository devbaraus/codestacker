<script setup lang="ts">
import { cn } from '@/utils'

const baseClass =
  'ease-in-300 font-poppins px-3 py-2 shadow hover:opacity-75 bg-dark text-white hover:bg-primary rounded-lg'

defineProps({
  href: String,
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <a
    v-if="type === 'link'"
    :href="href"
    rel="noreferrer noopener"
    :class="cn(baseClass, $attrs.class)"
  >
    <slot name="preIcon" />
    <slot></slot>
    <slot name="postIcon" />
  </a>
  <button
    v-else
    :type="type"
    :class="cn(baseClass, $attrs.class)"
  >
    <slot name="preIcon" />
    <slot></slot>
    <slot name="postIcon" />
  </button>
</template>
