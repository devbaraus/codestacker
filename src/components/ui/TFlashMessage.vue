<template>
  <div
    :class="`${
      show ? '' : 'invisible'
    } ease-in-300 bg-dark-40  fixed z-50 flex h-full w-full items-center justify-center`"
    @click="handleClose"
  >
    <div
      id="flash-message"
      :class="`${
        show ? 'flash-active' : ''
      } ease-in-300  fixed flex h-80 w-64 flex-col items-center justify-center rounded bg-white px-4 py-8 text-dark`"
    >
      <i
        :class="`${
          flashMessage.status ? 'fi-check bg-tertiary' : 'fi-x bg-secondary'
        } rounded-full  p-3 text-5xl text-white`"
      ></i>
      <p class="text-bold mb-6 mt-4 text-center text-lg uppercase">{{ flashMessage.title }}</p>
      <p class="opacity-85 break-words text-center text-sm">{{ flashMessage.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TFlashMessage',
  data: () => ({
    show: false,
    timeout: null
  }),
  computed: {
    ...mapState(['flashMessage'])
  },
  methods: {
    handleClose() {
      clearTimeout(this.timeout)
      this.show = false
    }
  },
  watch: {
    flashMessage(newval) {
      if (!!newval.title && !!newval.description) {
        this.show = true
        this.timeout = setTimeout(() => {
          this.show = false
        }, 5000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#flash-message {
  top: 200vh;

  &.flash-active {
    top: calc(50vh - 9rem);
  }
}
</style>
