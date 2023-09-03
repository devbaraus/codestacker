<template>
  <section>
    <p class="mb-2 text-center text-sm font-semibold text-primary">Atualizações e Novidades</p>
    <h3 class="mb-8 text-center text-2xl">Artigos Recentes</h3>
    <div class="grid grid-cols-1 justify-center gap-8 lg:grid-cols-3">
      <TBlogCard
        class=""
        class="wow animate__animated animate__fadeInUp"
        v-for="(article, index) in articles"
        :key="article.title"
        :title="article.title"
        :type="article.type"
        :date="article.created_at"
        :cover="article.cover"
        :data-wow-duration="`${(3 - index) * 0.3 + 1}s`"
        data-wow-offset="0"
      />
    </div>
  </section>
</template>

<script>
import TBlogCard from '@/components/TBlogCard'

export default {
  name: 'TBlog',
  components: { TBlogCard },
  props: ['articles']
}
</script>
