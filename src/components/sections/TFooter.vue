<template>
  <footer class="w-full bg-dark py-4 pt-8 text-white">
    <div
      class="container mx-auto flex flex-wrap justify-around gap-x-12 lg:flex-row lg:flex-nowrap"
    >
      <div class="w-full">
        <a
          class="h-full w-full"
          href="/"
        >
          <img
            class="inline h-16 align-middle"
            src="@/assets/logo.svg"
            :alt="`Logo ${siteName}`"
            :title="siteName"
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
              class="font-light hover:text-primary"
              v-if="link.url.includes('http')"
              target="_blank"
              :href="link.url"
              rel="noreferrer"
              >{{ link.text }}</a
            >
            <a
              class="font-light hover:text-primary"
              v-else
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
            v-for="contato in siteContact.socials"
            :key="contato.href"
          >
            <a
              class="inline-flex items-center font-light hover:text-primary"
              :href="contato.href"
              target="_blank"
            >
              <PhLinkedinLogo
                class="mr-2"
                v-if="contato.type === 'linkedin'"
              />
              <PhFacebookLogo
                class="mr-2"
                v-if="contato.type === 'facebook'"
              />
              <PhInstagramLogo
                class="mr-2"
                v-if="contato.type === 'instagram'"
              />
              <PhTwitterLogo
                class="mr-2"
                v-if="contato.type === 'twitter'"
              />

              {{ contato.label }}
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
import { siteCNPJ, siteContact, siteDescription, siteLinksUteis, siteName } from '@/site.config'
import { PhFacebookLogo, PhInstagramLogo, PhLinkedinLogo, PhTwitterLogo } from '@phosphor-icons/vue'
</script>
