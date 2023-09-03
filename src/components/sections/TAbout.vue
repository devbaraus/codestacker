<template>
  <section class="grid grid-cols-1 gap-12 lg:grid-cols-2">
    <div data-aos="fade-up">
      <p class="mb-2 text-sm font-semibold text-primary">Sobre nós</p>
      <h3 class="mb-8 text-2xl">Somos a primeira empresa júnior de informática do IFG</h3>
      <p class="text font-light">
        {{ siteDescription }}
      </p>
    </div>
    <img
      class="hidden h-72 w-full rounded-lg object-cover lg:flex"
      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80&fm=webp"
      :alt="`Imagem de capa do site ${siteName}`"
      data-aos="fade-up"
      :title="`Grupo ${siteName}`"
      width="750"
      height="500"
    />
  </section>
</template>

<script setup lang="ts">
import { siteDescription, siteName } from '@/site.config'
</script>
