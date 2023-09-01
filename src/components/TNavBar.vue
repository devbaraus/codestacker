<script setup lang="ts">
import { ref } from 'vue'
import { PhList, PhX } from '@phosphor-icons/vue'
import TButton from '@/components/ui/TButton.vue'
import { cn } from '@/utils'
import { siteName } from '@/site.config'

const mobnav = ref<boolean>(false)

function toggleNav() {
  mobnav.value = !mobnav.value
}

const links = [
  {
    url: '/#home',
    text: 'Home'
  },
  {
    url: '/#servicos',
    text: 'Serviços'
  },
  {
    url: '/#portfolio',
    text: 'Portfólio'
  },
  // {
  //   url: '/#blog',
  //   text: 'Blog',
  // },
  {
    url: '/#sobre',
    text: 'Sobre'
  },
  {
    url: '/#contato',
    text: 'Contato',
    special: true
  }
]
</script>

<template>
  <div
    :class="
      cn(
        `left-0 top-0 z-30 flex h-screen w-full rounded-b-lg bg-transparent backdrop-blur-sm backdrop-filter lg:hidden`,
        mobnav ? 'fixed' : 'hidden'
      )
    "
    @click="toggleNav"
  >
    <div
      class="ml-auto flex flex-col items-end gap-4 bg-white p-8 py-6 text-xl"
      @click.stop=""
    >
      <button
        class="lg:hidden"
        @click="toggleNav"
      >
        <PhX class="text-xl" />
      </button>
      <ul class="flex flex-col items-end gap-4">
        <li
          :key="link.url"
          v-for="link in links"
          @click="toggleNav"
        >
          <t-button
            class="ease-in-300 hover:bg-primary"
            v-if="link.special"
            type="link"
            :url="link.url"
          >
            {{ link.text }}
          </t-button>
          <a
            class="ease-in-300 hover:text-primary"
            v-else
            :href="link.url"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </div>
  </div>

  <div
    class="container fixed left-1/2 top-0 z-10 flex h-16 -translate-x-1/2 items-center justify-around bg-white/80 shadow backdrop-blur-sm backdrop-filter lg:top-2 lg:rounded"
  >
    <nav class="container z-20 flex items-center justify-between py-4 text-dark">
      <a href="/">
        <img
          src="@/assets/logo.svg"
          class="inline h-10 align-middle"
          :alt="siteName"
          :title="siteName"
        />
        <p class="ml-2 inline align-middle text-2xl font-extrabold uppercase">
          {{ siteName }}
        </p>
      </a>
      <button
        @click="toggleNav"
        class="lg:hidden"
      >
        <PhList class="text-xl" />
      </button>

      <ul class="hidden items-center gap-4 lg:inline-flex">
        <li
          :key="link.url"
          v-for="link in links"
        >
          <t-button
            v-if="link.special"
            type="link"
            :href="link.url"
          >
            {{ link.text }}
          </t-button>
          <a
            class="ease-in-300 hover:text-primary"
            v-else
            :href="link.url"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
