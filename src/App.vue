<template>
  <div id="app" class="hero is-fullheight" style="position:relative;">
    <app-header></app-header>
    <transition name="fadeLeft" mode="out-in">
      <router-view class="box is-radiusless is-shadowless size-up is-marginless-bot is-paddingless-botm"></router-view>
    </transition>
    <app-footer class="bottom"></app-footer>
    <transition name="fade" mode="out-in">
      <div class="box is-radiusless is-overlay overlay-style" v-if="error.active">
        <div>
          <div class="has-text-dark is-paddingless-hori">
            <div class="message is-danger has-text-dark is-fullwidth is-size-7" style="width:100%;">
              <div class="message-header">
                <p>{{error.name}}</p>
                <button class="delete" aria-label="delete" @click="deactivateError"></button>
              </div>
              <div class="message-body">
               <p>{{error.message}}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/Nav.vue'

export default {
  methods: {
    deactivateError () {
      this.$store.dispatch('deactivateError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
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
  margin: 0px !important;
  width: 100%;
}
.overlay-style {
  height: 100vh;
  padding-top:0px;
  background: rgba(5,5,5,.9);
  display:flex;
  align-items:center;
  justify-content: center;
  z-index:50;
}
</style>
