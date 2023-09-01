<template>
  <section>
    <p class="mb-2 text-sm font-semibold text-primary">Portfolio</p>
    <h3 class="mb-4 text-left text-2xl">Conheça nosso trabalho</h3>
    <div class="projects-grid grid grid-cols-1 gap-4 rounded-lg py-4 md:grid-cols-12">
      <TProjectCard
        :data-aos="`fade-${index % 4 < 2 ? 'left' : 'right'}`"
        v-for="(project, index) in siteProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TProjectCard from '@/components/ui/TProjectCard.vue'
import { siteProjects } from '@/site.config'
</script>
