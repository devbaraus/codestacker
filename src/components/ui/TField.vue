<template>
  <div
    :class="`flex  ${
      ['checkbox', 'radio'].includes(type)
        ? 'flex-row-reverse items-center justify-end'
        : 'flex-col'
    }`"
  >
    <label
      :class="`text-${textColor}  ${
        ['checkbox', 'radio'].includes(type) ? 'ml-2' : 'mb-3'
      } font-bold tracking-wide`"
    >
      {{ text }}
    </label>
    <input
      v-if="type != 'textarea'"
      :placeholder="placeholder"
      ref="input"
      @input="chooseMask"
      @change="callValidation"
      :type="type"
      v-bind="$attrs"
      :class="
        cn(
          ' border-1 border px-2 py-3',
          ['checkbox', 'radio'].includes(type) ? 'h-4 w-4' : 'shadow',
          !wasValidated ? 'border-white' : !!isValid ? 'border-tertiary' : 'border-secondary'
        )
      "
      v-on="getListeners"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :type="type"
      ref="field"
      v-bind="$attrs"
      @input="chooseMask"
      @change="callValidation"
      :class="`h-${height} border-1 resize-none border px-2 py-3 shadow ${
        !wasValidated ? 'border-white' : !!isValid ? 'border-tertiary' : 'border-secondary'
      }`"
      v-on="getListeners"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { cn } from '@/utils'

const emit = defineEmits(['input'])

const wasValidated = ref(false)
const isValid = ref(false)
const field = ref(null)
const input = ref(null)

const props = defineProps({
  textColor: {
    type: String,
    default: 'primary'
  },
  validate: {
    type: Function,
    default: () => {
      return true
    }
  },
  text: {
    type: String,
    default: 'campo'
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'exemplo'
  },
  height: {
    type: String,
    default: '32'
  }
})

function callValidation() {
  wasValidated.value = true
  isValid.value = props.validate()
}
function chooseMask() {
  if (props.type === 'tel') {
    maskTel()
  }
  if (props.type === 'textarea') {
    emit('input', field.value)
  } else {
    emit('input', input.value)
  }
}
function maskTel() {
  // let v = input.value
  // v = v.replace(/\D/g, '') //Remove tudo o que não é dígito
  // v = v.replace(/^(\d\d)(\d)/g, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
  // v = v.replace(/(\d{5})(\d)/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígitos
  // input.value = v
}

const getListeners = computed(() => {
  // const { input, ...others } = $attrs
  // return { ...others }
  return {}
})
</script>
