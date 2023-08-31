<template>
  <section>
    <p class="mb-2 text-center text-sm font-semibold text-primary">Contato</p>
    <h3 class="mb-8 text-center text-2xl">Entre em contato conosco</h3>

    <div class="lg:flex-no-wrap flex w-full flex-row flex-wrap">
      <div
        class="wow animate__animated animate__fadeInLeft mb-6 w-full lg:mb-0"
        data-wow-duration="2s"
        data-wow-offset="10"
      >
        <!--        <TMap class="lg:pr-3" />-->
      </div>

      <form
        @submit.prevent="submitForm"
        class="wow animate__animated animate__fadeInRight w-full space-y-6 lg:pl-3"
        data-wow-duration="2s"
        data-wow-offset="10"
      >
        <div class="flex w-full flex-row flex-wrap gap-6 lg:flex-nowrap">
          <TField
            class="w-full"
            v-model="cname"
            text="Nome"
            name="nome"
            placeholder="Fulano Benedito"
            pattern="(\w.+\s).+"
            type="text"
            :validate="validateName"
            required
          />
          <TField
            class="w-full"
            text="Assunto"
            placeholder="Site institucional"
            type="text"
            name="assunto"
            :validate="validateSubject"
            v-model="csubject"
            required
          />
        </div>
        <div class="flex w-full flex-row flex-wrap gap-6 lg:flex-nowrap">
          <TField
            class="w-full"
            text="Email"
            placeholder="exemplo@exemplo.com"
            type="email"
            name="email"
            :validate="validateEmail"
            v-model="cemail"
            required
          />
          <TField
            class="w-full"
            text="Telefone"
            placeholder="(62) 99999-9999"
            v-model="ctel"
            name="telefone"
            :validate="validateTel"
            type="tel"
            required
          />
        </div>
        <TField
          height="32"
          text="Mensagem"
          name="mensagem"
          placeholder="Sua mensagem é muito importante"
          type="textarea"
          v-model="cmsg"
          :validate="validateMessage"
          required
        />
        <div class="flex w-full flex-row justify-end">
          <TButton
            type="submit"
            class="px-6 uppercase lg:px-3"
            >enviar</TButton
          >
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import TField from '@/components/ui/TField.vue'
import TButton from '@/components/ui/TButton.vue'
import { ref } from 'vue'

const cname = ref('')
const cemail = ref('')
const ctel = ref('')
const csubject = ref('')
const cmsg = ref('')

function validateEmail() {
  let reg = new RegExp(
    '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$',
    'i'
  )
  return reg.test(cemail.value) && !!cemail.value
}

function validateName() {
  let reg = new RegExp('(\\w.+\\s).+', 'i')
  return reg.test(cname.value) && !!cname.value
}

function validateTel() {
  let reg = new RegExp('(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})', 'i')
  return reg.test(ctel.value) && !!ctel.value
}

function validateSubject() {
  return !!csubject.value
}

function validateMessage() {
  let reg = new RegExp('(\\w.+\\s).+', 'i')
  return reg.test(cmsg.value) && !!cmsg.value
}

function submitForm(e: Event) {
  const data = (e.target as HTMLFormElement).serialize()

  console.log(data)

  // this.$axios
  //   .post('https://formspree.io/f/mknpbyad', data)
  //   .then(() => {
  //     this.$store.commit('flashMessage', {
  //       status: true,
  //       title: 'Sucesso',
  //       description: 'Mensagem enviada! Entraremos em contato assim que possível.'
  //     })
  //     form.reset()
  //   })
  //   .catch(() => {
  //     this.$store.commit('flashMessage', {
  //       status: false,
  //       title: 'Oops',
  //       description: 'Não foi possível encaminhar os dados. Tente novamente!'
  //     })
  //   })
}
</script>

<style scoped></style>
