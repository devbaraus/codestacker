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
      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      :alt="`Imagem de capa do site ${siteName}`"
      data-aos="fade-up"
      class="hidden h-full w-full rounded object-cover lg:flex"
      :title="`Grupo ${siteName}`"
    />
  </section>
</template>

<script setup lang="ts">
import { siteDescription, siteName } from '@/site.config'
</script>
