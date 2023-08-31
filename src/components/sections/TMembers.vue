<template>
  <section>
    <h3 class="mb-8 text-center text-2xl">Quem somos</h3>
    <div
      class="services-grid grid grid-cols-1 gap-12 rounded-lg py-8 md:grid-cols-2 lg:grid-cols-5"
    >
      <TMemberCard
        v-for="(member, index) in members"
        :key="member.title"
        :name="member.name"
        :avatar="member.avatar"
        :socials="member.socials"
        :role="member.role"
        :data-wow-duration="`${time[index]}s`"
        class="wow animate__animated animate__fadeInUp"
        data-wow-offset="10"
      />
    </div>
  </section>
</template>

<script>
import TMemberCard from '@/components/TMemberCard'

export default {
  name: 'TMembers',
  components: { TMemberCard },
  props: ['members'],
  data: () => ({
    time: [1.8, 1.4, 1, 1.4, 1.8]
  })
}
</script>

<style scoped></style>
