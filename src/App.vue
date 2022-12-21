<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Main1 from './components/Main1.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    Main1,
    AppFooter
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader />

  <main>
    <Main1 />
  </main>

  <AppFooter />
</template>

<style lang="scss">
// @use './style/general.scss'
</style>