<template>
  <article class="flex h-full flex-1 flex-col">
    <nuxt-link :to="url">
      <TImage
        :src="cover.url"
        :alt="cover.alternative"
        :title="cover.caption"
        class="h-48 w-full rounded-lg object-cover"
      />
    </nuxt-link>
    <div class="mt-4 flex flex-1 flex-col justify-start">
      <span :class="`font-medium text-${typeColor} text-xs uppercase`">{{ type }}</span>
      <nuxt-link
        :to="url"
        class="my-1 text-base font-medium"
        >{{ title }}</nuxt-link
      >
    </div>
    <p class="text-gray justify-self-end break-words text-sm font-light leading-tight">
      {{ getDate(date) }}
    </p>
  </article>
</template>

<script>
import TImage from '@/components/TImage'

export default {
  name: 'TBlogCard',
  components: { TImage },
  props: {
    url: {
      type: String,
      default: ''
    },
    cover: {
      type: Object,
      default: {
        url: '',
        caption: '',
        alternative: ''
      }
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeColor() {
      return {
        noticia: 'tertiary',
        artigo: 'primary',
        tutorial: 'secondary'
      }[this.type]
    }
  },
  methods: {
    getDate(date) {
      let d = new Date(date)

      let day = d.getUTCDate()
      let month = d.toLocaleString('pt-br', { month: 'long' })
      let year = d.getUTCFullYear()

      return day + ' ' + month + ' ' + year
    }
  }
}
</script>

<style scoped></style>
