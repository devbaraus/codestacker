<template>
  <div class="flex h-full flex-1 flex-col">
    <TImage
      :src="avatar.url"
      :title="avatar.caption"
      :alt="avatar.alternative"
      class="mb-4 h-64 w-full rounded-lg object-cover lg:h-48"
    />

    <div class="flex flex-1 flex-col">
      <span :class="`text-sm font-bold uppercase text-${roleColor}`">{{ roleName }}</span>
      <p class="my-2">{{ name }}</p>
    </div>
    <div class="flex gap-x-2">
      <a
        v-for="social in socials"
        target="_blank"
        rel="noreferrer"
        :href="social.url"
        :class="`ease-in-300 text-lg hover:text-${roleColor}`"
        :key="social.url"
      >
        <i :class="`fi-${social.type === 'website' ? 'globe' : social.type}`"></i>
      </a>
    </div>
  </div>
</template>

<script>
import TImage from '@/components/TImage'

export default {
  name: 'TMemberCard',
  components: { TImage },
  computed: {
    roleColor() {
      return {
        presidente: 'secondary',
        projetos: 'primary',
        financeiro: 'tertiary',
        marketing: 'quaternary'
      }[this.roleName]
    },
    roleName() {
      return this.role.split('_').slice(-1)[0]
    }
  },
  methods: {
    socialURL() {
      let socialBase = {
        instagram: 'https://instagram.com/',
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/in/',
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/'
      }
      for (let index in this.socials) {
        this.socials[index].url = this.socials[index].url.includes('http')
          ? this.socials[index].url
          : socialBase[this.socials[index].type] + this.socials[index].url
      }
    }
  },
  props: {
    avatar: {
      type: Object,
      default: {
        url: '',
        alternative: '',
        caption: ''
      }
    },
    role: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    socials: {
      type: Array,
      default: []
    }
  },
  created() {
    this.socialURL()
  }
}
</script>

<style scoped></style>
