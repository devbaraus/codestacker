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
      id="servicos"
      class="pt-16"
    />
    <!--      <TBlog id="blog" class="my-32" :articles="articles" />-->
    <TPortfolio
      id="portfolio"
      class="-my-4 py-20"
    />
    <TAbout
      id="sobre"
      class="-my-4 py-20"
    />
    <TMembers class="-my-4 py-20" />
    <TContact
      id="contato"
      class="-my-4 py-20"
    />
  </main>
  <TFooter />
</template>
