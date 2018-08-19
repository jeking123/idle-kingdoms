<template>
  <div id="app" class="hero is-fullheight" style="position:relative;">
    <app-header style="position:relative;"></app-header>
    <router-view class="box is-radiusless is-shadowless size-up is-marginless-bot is-paddingless-botm"></router-view>
    <app-footer class="bottom"></app-footer>
    <div class="box is-radiusless is-overlay" style=" background: rgba(240,5,5,.4)">
      <div class="hero">
        <div class="has-text-dark hero-body is-paddingless-hori">
          <div class="message message-header is-white has-text-dark is-fullwidth" style="width:100%;">
            <p>this is an error</p>
            <button class="delete" aria-label="delete"></button>
          </div>
        </div>
      </div>
    </div>
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
.is-paddingless-hori {
    padding-left:0px;
    padding-right:0px;
  }
</style>
