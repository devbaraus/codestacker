<template>
  <div class="flex h-full flex-1 flex-col">
    <img
      :src="member.cover.href"
      :title="member.cover.caption"
      :alt="member.cover.alternative"
      class="mb-4 h-64 w-full rounded-lg object-cover lg:h-48"
    />

    <div class="flex flex-1 flex-col">
      <span
        :class="
          cn(
            `text-sm font-bold uppercase`,
            member.role === 'presidente' && 'text-secondary',
            member.role === 'projetos' && 'text-primary',
            member.role === 'financeiro' && 'text-tertiary',
            member.role === 'marketing' && 'text-quaternary'
          )
        "
        >{{ member.role }}</span
      >
      <p class="my-2">{{ member.name }}</p>
    </div>
    <div class="flex gap-x-2">
      <a
        v-for="social in member.socials"
        target="_blank"
        rel="noreferrer"
        :href="social.href"
        :class="
          cn(
            `ease-in-300 text-lg`,
            member.role === 'presidente' && 'hover:text-secondary',
            member.role === 'projetos' && 'hover:text-primary',
            member.role === 'financeiro' && 'hover:text-tertiary',
            member.role === 'marketing' && 'hover:text-quaternary'
          )
        "
        :key="social.href"
      >
        <PhInstagramLogo v-if="social.type === 'instagram'" />
        <PhTwitterLogo v-if="social.type === 'twitter'" />
        <PhLinkedinLogo v-if="social.type === 'linkedin'" />
        <span class="sr-only">{{ social.label }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Member } from '@/types'
import { PhInstagramLogo, PhTwitterLogo, PhLinkedinLogo } from '@phosphor-icons/vue'
import { cn } from '@/utils'

defineProps<{
  member: Member
}>()
</script>

<style scoped></style>
