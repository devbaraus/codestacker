<template>
  <div class="group relative flex h-full flex-1 flex-col overflow-hidden">
    <img
      class="ease-in-300 h-72 object-cover transition-all group-hover:scale-105"
      :src="project.cover.href"
      :alt="project.cover.alternative"
      :title="project.cover.caption"
    />
    <div
      class="absolute -bottom-full left-0 w-full bg-white/60 px-8 py-4 transition-all group-hover:bottom-0"
    >
      <span
        :class="
          cn(
            'text-xs font-semibold uppercase',
            project.tag === 'website' && 'text-primary',
            project.tag === 'iot' && 'text-secondary'
          )
        "
        >{{ project.tag }}</span
      >
      <p class="text-base">{{ project.title }}</p>
      <span class="text-gray text-xs uppercase">{{ projectRealeased }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types'
import { computed } from 'vue'
import { format } from 'date-fns'
import portugueseLocale from 'date-fns/locale/pt-BR'
import { cn } from '@/utils'

const props = defineProps<{
  project: Project
}>()

const projectRealeased = computed(() => {
  return format(new Date(props.project.releasedAt), 'MMMM yyyy', { locale: portugueseLocale })
})
</script>
