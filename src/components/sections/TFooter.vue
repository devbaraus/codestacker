<template>
  <footer class="w-full bg-dark py-4 pt-8 text-white">
    <div
      class="container mx-auto flex flex-wrap justify-around gap-x-12 lg:flex-row lg:flex-nowrap"
    >
      <div class="w-full">
        <a
          href="/"
          class="h-full w-full"
        >
          <img
            src="@/assets/logo.svg"
            class="inline h-16 align-middle"
            alt="Logo Code Tower"
            title="Code Tower"
          />
          <p class="ml-2 inline align-middle text-3xl font-extrabold uppercase">{{ siteName }}</p>
        </a>
        <p class="my-4 font-light">
          {{ siteDescription }}
        </p>
        <p class="font-light">CNPJ: {{ siteCNPJ }}</p>
      </div>
      <div class="my-8 w-full lg:my-0">
        <p class="mb-4 text-center text-xl">Links úteis</p>
        <ul class="flex flex-col gap-y-2">
          <li
            v-for="link in siteLinksUteis"
            :key="link.url"
          >
            <a
              v-if="link.url.includes('http')"
              class="ease-in-300 font-light hover:text-primary"
              target="_blank"
              :href="link.url"
              rel="noreferrer"
              >{{ link.text }}</a
            >
            <a
              v-else
              class="ease-in-300 font-light hover:text-primary"
              :href="link.url"
              rel="noreferrer"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <p class="mb-4 text-center text-xl">Contato</p>
        <ul class="flex flex-col gap-y-2">
          <li
            v-for="contato in siteContatos"
            :key="contato.url"
          >
            <a
              :href="contato.url"
              class="ease-in-300 inline-flex items-center font-light hover:text-primary"
              target="_blank"
            >
              <i :class="`fi-${contato.icon} mr-2`"></i>{{ contato.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-gray mt-8 text-center text-sm">
      Copyright &copy; {{ new Date().getFullYear() }}, {{ siteName }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { siteCNPJ, siteContatos, siteDescription, siteLinksUteis, siteName } from '@/site.config'
</script>

<style scoped></style>
