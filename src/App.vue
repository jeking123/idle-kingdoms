<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div id="app" class="hero is-fullheight" style="position:relative;">
=======
  <div id="app" class="hero is-fullheight">
>>>>>>> parent of 3b9c66a... testing the error over the whole app
    <app-header style="position:relative;"></app-header>
=======
  <div id="app" class="hero is-fullheight">
    <app-header></app-header>
>>>>>>> parent of 8e5c86c... lots of updates
    <router-view class="box is-radiusless is-shadowless size-up is-marginless-bot is-paddingless-botm"></router-view>
    <app-footer class="bottom"></app-footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/Nav.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  created () {
    this.$store.dispatch('initRec')
  },
  mounted () {
    this.$store.dispatch('runGame')
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
.section {
  padding: 2rem 1.15rem;
}
.size-up {
  flex-grow: 2;
}
.box {
  padding: 1.25rem 1.25rem 0rem 1.25rem;
}
.box:not(:last-child) {
  margin-bottom: 0px;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
