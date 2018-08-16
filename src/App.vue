<template>
  <div id="app" class="hero is-fullheight">
    <app-header></app-header>
    <router-view class="section size-up"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/Nav.vue'

export default {
  computed: {
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  mounted() {
    this.$store.dispatch('runGame')
  }
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
.section {
  padding: 2rem 1.15rem;
}
.size-up {
  flex-grow: 2;
}
</style>
