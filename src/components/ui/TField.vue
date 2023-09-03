<template>
  <div
    :class="
      cn(
        'flex',
        ['checkbox', 'radio'].includes(type!)
          ? 'flex-row-reverse items-center justify-end'
          : 'flex-col'
      )
    "
  >
    <label
      :class="
        cn(
          'text-primary font-bold tracking-wide',
          ['checkbox', 'radio'].includes(type!) ? 'ml-2' : 'mb-3'
        )
      "
    >
      {{ text }}
    </label>
    <input
      v-if="type != 'textarea'"
      ref="input"
      @input="inputValue"
      :type="type"
      v-bind="$attrs"
      :class="
        cn(
          ' border-1 border px-2 py-3',
          ['checkbox', 'radio'].includes(type!) ? 'h-4 w-4' : 'shadow',
          valid ? 'border-white' : 'border-secondary'
        )
      "
    />
    <textarea
      v-else
      ref="field"
      @input="inputValue"
      v-bind="$attrs"
      :class="
        cn(
          'h-32 border-1 resize-none border px-2 py-3 shadow',
          valid ? 'border-white' : 'border-secondary'
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils'
import { ref } from 'vue'

const emit = defineEmits(['input'])

const field = ref<HTMLTextAreaElement>()
const input = ref<HTMLInputElement>()

const props = defineProps({
  mask: Function,
  valid: {
    type: Boolean,
    default: true
  },
  text: String,
  type: String
})

function inputValue(e: Event) {
  const fieldRef = input.value || field.value
  let value = (e.target as HTMLInputElement | HTMLTextAreaElement).value
  value = props.mask ? props.mask(value) : value

  emit('input', value)
  fieldRef!.value = value
}
</script>
