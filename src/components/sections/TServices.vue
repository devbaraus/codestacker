<template>
  <section class="-mt-8 lg:-mt-16">
    <div
      class="services-grid container grid grid-cols-1 gap-4 divide-y rounded-lg px-4 py-8 lg:grid-cols-3 lg:divide-none"
    >
      <TServiceCard
        v-for="(service, index) in services"
        :key="service.title"
        :title="service.title"
        :text="service.text"
        :icon="service.icon"
        :data-wow-duration="`${index * 0.3 + 1}s`"
        class="wow animate__animated animate__fadeInUp"
        :icon-class="
          cn(
            service.color === 'dark' && 'bg-dark',
            service.color === 'primary' && 'bg-primary',
            service.color === 'secondary' && 'bg-secondary'
          )
        "
        data-wow-offset="10"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TServiceCard from '@/components/ui/TServiceCard.vue'
import { PhLayout, PhDeviceMobile, PhUsb } from '@phosphor-icons/vue'
import { cn } from '@/utils'

const services = [
  {
    title: 'websites',
    color: 'dark',
    icon: PhLayout,
    text: 'Desenvolvemos sites para quaisquer modelos de negócio, seja você um profissional autônomo ou empresa de pequeno, médio ou grande porte.'
  },
  {
    title: 'aplicativos',
    color: 'primary',
    icon: PhDeviceMobile,
    text: 'Desenvolvemos aplicativos ideais para o seu negócio. Através das novas tendências e tecnologias do mercado criamos apps para colocar o seu negócio na palma da mão.'
  },
  {
    title: 'iot',
    color: 'secondary',
    icon: PhUsb,
    text: 'Desenvolvemos soluções baseadas em IOT, através do uso de dispositivos inteligentes espalhados pelos ambientes de desenvolvimento, produção e comercialização da sua empresa.'
  }
]
</script>

<style scoped>
.services-grid {
  box-shadow:
    0px 0px 100px rgba(0, 0, 0, 0.05),
    0px 1px 3px rgba(0, 0, 0, 0.05);
}
</style>
