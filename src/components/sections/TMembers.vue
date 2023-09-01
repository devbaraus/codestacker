<template>
  <section>
    <h3 class="mb-8 text-center text-2xl">Quem somos</h3>
    <div
      class="services-grid grid grid-cols-1 gap-12 rounded-lg py-8 md:grid-cols-2 lg:grid-cols-5"
    >
      <TMemberCard
        v-for="(member, index) in siteMembers"
        :key="member.id"
        :member="member"
        data-aos="fade-up"
        data-aos-duration="`${time[index]}s`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TMemberCard from '@/components/ui/TMemberCard.vue'
import { siteMembers } from '@/site.config'

const time = [1.8, 1.4, 1, 1.4, 1.8]
</script>
