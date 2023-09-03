<template>
  <section>
    <p class="mb-2 text-center text-sm font-semibold text-primary">Contato</p>
    <h3 class="mb-8 text-center text-2xl">Entre em contato conosco</h3>

    <div class="grid lg:grid-cols-2 gap-8">
      <!--      <div-->
      <!--        data-aos="fade-left"-->
      <!--        class="mb-6 w-full lg:mb-0"-->
      <!--      >-->
      <!--        <TMap class="lg:pr-3" />-->
      <!--      </div>-->
      <div
        class="w-full"
        data-aos="fade-in"
      >
        <div class="space-y-4">
          <div class="space-y-2">
            <p class="font-semibold tracking-wide text-primary">Endereço</p>
            <p class="font-light">{{ siteContact.address }}</p>
          </div>
          <div class="space-y-2">
            <p class="font-semibold tracking-wide text-primary">Telefone</p>
            <p class="font-light">{{ siteContact.email }}</p>
          </div>
          <div class="space-y-2">
            <p class="font-semibold tracking-wide text-primary">Email</p>
            <p class="font-light">
              <a
                class="hover:underline"
                href="mailto:"
              >
                {{ siteContact.email }}
              </a>
            </p>
          </div>
        </div>
      </div>
      <form
        class="space-y-4"
        @change="validateFormField"
        data-aos="fade-in"
      >
        <div class="flex w-full flex-row flex-wrap gap-6 lg:flex-nowrap">
          <TField
            class="w-full"
            name="name"
            text="Nome"
            placeholder="Fulano Benedito"
            pattern="(\w.+\s).+"
            type="text"
            required
            :valid="formValidation.name"
          />
          <TField
            class="w-full"
            name="subject"
            text="Assunto"
            placeholder="Site institucional"
            type="text"
            required
            :valid="formValidation.subject"
          />
        </div>
        <div class="flex w-full flex-row flex-wrap gap-6 lg:flex-nowrap">
          <TField
            class="w-full"
            name="email"
            text="Email"
            placeholder="exemplo@exemplo.com"
            type="email"
            required
            :valid="formValidation.email"
          />
          <TField
            class="w-full"
            name="phone"
            text="Telefone"
            placeholder="(62) 99999-9999"
            :mask="formMask.phone.mask"
            type="tel"
            required
            :valid="formValidation.phone"
          />
        </div>
        <TField
          name="message"
          :valid="formValidation.message"
          text="Mensagem"
          placeholder="Sua mensagem é muito importante"
          type="textarea"
          required
        />
        <div class="flex w-full flex-row justify-end">
          <TButton
            class="px-6 uppercase lg:px-3"
            type="submit"
            >enviar
          </TButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import TButton from '@/components/ui/TButton.vue'
import TField from '@/components/ui/TField.vue'
import IMask from 'imask'
import { ref } from 'vue'
import { z } from 'zod'
import { siteContact } from '../../site.config'

const formValidation = ref({
  name: null,
  email: null,
  phone: null,
  subject: null,
  message: null
})

const formMask = {
  phone: {
    mask: IMask.createPipe({
      mask: '(00) 00000-0000'
    }),
    unmask: (value: string) => {
      return value.replace(/\D/g, '')
    }
  }
}

const formSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15).transform(formMask.phone.unmask),
  subject: z.string().min(3).max(50),
  message: z.string().min(3).max(500)
})

function validateFormField(e: Event) {
  const target = e.target as HTMLInputElement
  const name = target.name
  const value = target.value

  const isValid = formSchema.pick({ [name]: true }).safeParse({ [name]: value }).success

  formValidation.value = {
    ...formValidation.value,
    [name]: isValid
  }
}
</script>
