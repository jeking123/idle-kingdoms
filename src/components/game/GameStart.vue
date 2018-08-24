<template>
  <div class="hero is-fullheight" style="position:relative;">
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
import Header from './header/Header.vue'
import Footer from './Nav.vue'

export default {
  methods: {
    deactivateError () {
      this.$store.dispatch('deactivateError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    resources () {
      return this.$store.getters.resources
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
    setInterval(() => {
      this.$store.dispatch('runGame') // runs time
      var build = this.$store.getters.buildings
      var people = this.$store.getters.population
      // console.log(build.buildings.lvl1[0].quantity)
      var building1 = build.buildings.lvl1[0].quantity; var building2 = build.buildings.lvl1[1].quantity; var building3 = build.buildings.lvl1[2].quantity
      var worker1 = people.population[0][0].quantity; var worker2 = people.population[0][1].quantity; var worker3 = people.population[0][2].quantity

      // increases resources by # of workers
      var farms = (building1 * worker1); var sawmills = (building2 * worker2); var quarrys = (building3 * worker3)
      // console.log(farms)
      if (build.buildings.lvl1[0].quantity > 0) {
        this.$store.dispatch('gatherRec', {type: 0, amount: farms})
      }
      if (build.buildings.lvl1[1].quantity > 0) {
        this.$store.dispatch('gatherRec', {type: 1, amount: sawmills})
      }
      if (build.buildings.lvl1[2].quantity > 0) {
        this.$store.dispatch('gatherRec', {type: 2, amount: quarrys})
      }
    }, 1000)
  }
}
</script>
