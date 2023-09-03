<script setup lang="ts">
import TAbout from '@/components/sections/TAbout.vue'
import TContact from '@/components/sections/TContact.vue'
import TFooter from '@/components/sections/TFooter.vue'
import THeaderHero from '@/components/sections/THeaderHero.vue'
import TMembers from '@/components/sections/TMembers.vue'
import TPortfolio from '@/components/sections/TPortfolio.vue'
import TServices from '@/components/sections/TServices.vue'
import TNavBar from '@/components/TNavBar.vue'
import AOS from 'aos'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    once: true
  })
})
</script>

<template>
  <header>
    <TNavBar />
  </header>

  <main class="container mt-20">
    <THeaderHero id="home" />
    <TServices
      class="pt-16"
      id="servicos"
    />
    <!--      <TBlog id="blog" class="my-32" :articles="articles" />-->
    <TPortfolio
      class="-my-4 py-20"
      id="portfolio"
    />
    <TAbout
      class="-my-4 py-20"
      id="sobre"
    />
    <TMembers class="-my-4 py-20" />
    <TContact
      class="-my-4 py-20"
      id="contato"
    />
  </main>
  <TFooter />
</template>
