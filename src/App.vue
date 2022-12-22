<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Main1 from './components/Main1.vue'
import Main2 from './components/Main2.vue'
import Main3 from './components/Main3.vue'
import Main4 from './components/Main4.vue'

import { store } from './store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    Main1,
    Main2,
    Main3,
    Main4,
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
    <Main2 />
    <Main3 />
    <Main4 />
  </main>

  <AppFooter />
</template>

<style lang="scss">
// @use './style/general.scss'
</style>