<template>
  <div
    class="wow animate__animated animate__fadeIn animate__slow flex h-screen w-full flex-1 flex-col items-center justify-center lg:h-full lg:py-64"
  >
    <p class="text-center font-semibold uppercase text-primary">Bem vindos à {{ siteName }}</p>
    <h1 class="my-4 text-center text-4xl font-extrabold text-dark lg:text-6xl">
      Inovação em Tecnologia
    </h1>
    <h2 class="text-center uppercase">
      Somos um grupo de estudantes focado em solucionar problemas da sociedade.
    </h2>
  </div>
</template>
<script setup lang="ts">
import { siteName } from '@/site.config'
</script>
