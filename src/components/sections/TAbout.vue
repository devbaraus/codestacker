<template>
  <section class="grid grid-cols-1 gap-12 lg:grid-cols-2">
    <div
      class="wow animate__animated animate__fadeInLeft"
      data-wow-duration="2s"
      data-wow-offset="10"
    >
      <p class="mb-2 text-sm font-semibold text-primary">Sobre nós</p>
      <h3 class="mb-8 text-2xl">Somos a primeira empresa júnior de informática do IFG</h3>
      <p class="text font-light">
        {{ siteDescription }}
      </p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      :alt="`Imagem de capa do site ${siteName}`"
      class="wow animate__animated animate__fadeInRight hidden h-full w-full rounded object-cover lg:flex"
      data-wow-duration="2s"
      title="Grupo Code Tower"
    />
  </section>
</template>

<script setup lang="ts">
import { siteDescription, siteName } from '@/site.config'
</script>
