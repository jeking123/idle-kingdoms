<template>
     <div>
      <div class="buttons has-addons is-fullwidth is-uppercase">
        <span class="button is-expanded disabled"
              @click="setShowBuild(0, build)"
              :class="{'is-selected': showBuild == 'lvl1', 'is-link': showBuild =='lvl1'}"
              :disabled="build.buttons.unlkLvl1.disable">lvl1</span>
        <span class="button is-expanded" @click="setShowBuild(1, build)"
              :class="{'is-selected': showBuild == 'lvl2', 'is-link': showBuild =='lvl2'}" :disabled="build.buttons.unlkLvl2.disable">lvl2</span>
        <span class="button is-expanded" @click="setShowBuild(2, build)"
              :class="{'is-selected': showBuild == 'lvl3', 'is-link': showBuild =='lvl3'}" :disabled="build.buttons.unlkLvl3.disable">lvl3</span>
        <span class="button is-expanded" @click="setShowBuild(3, build)"
              :class="{'is-selected': showBuild == 'lvl4', 'is-link': showBuild =='lvl4'}"
              :disabled="build.buttons.unlkLvl4.disable">lvl4</span>
      </div>
      <div v-if="build.buttons.unlkLvl1 === false">
        <h1>Must Unlock Buildings</h1>
      </div>
      <div>
        <transition name="fade" mode="out-in">
          <div class="columns is-mobile is-multiline is-marginless-bot"
                v-for="(lvl, key) in build.buildings"
                v-if="showBuild == key"
                :key="key"
                style="width:95vw;"
          >
                <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-weight-bold"
                      style="align-items:center;"
                      v-for="building in lvl"
                      :key="building.name"
                >
                  <div class="column is-expanded is-paddingless is-uppercase is-size-7 bldCost">
                    {{building.name}} | <i class="mdi mdi-barley">{{building.cost.food}} </i> <i class="mdi mdi-pine-tree">{{building.cost.wood}} </i> <i class="mdi mdi-cloud">{{building.cost.stone}} </i>
                  </div>
                  <div class="column is-narrow is-paddingless is-size-7"> {{building.quantity}} </div>
                  <div class="column is-narrow is-size-3 is-paddingless"
                        @click="incrBld(building, resources)">
                    <i class="mdi mdi-plus-box"></i>
                  </div>
              </div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // determines which set of buildings to show
      showBuild: 'locked'
    }
  },
  methods: {
    incrBld (payload, resources) {
      var food = resources[0][0].quantity
      var wood = resources[0][1].quantity
      var stone = resources[0][2].quantity

      var foodCost = payload.cost.food
      var woodCost = payload.cost.wood
      var stoneCost = payload.cost.stone
      if (food >= foodCost && wood >= woodCost && stone >= stoneCost) {
        this.$store.dispatch('incrBld', payload.name)
        this.$store.dispatch('maxPopIncrease', payload.worker)
        // refactor to take all resources in one dispatch
        this.$store.dispatch('useRec', {type: 0, amount: foodCost})
        this.$store.dispatch('useRec', {type: 1, amount: woodCost})
        this.$store.dispatch('useRec', {type: 2, amount: stoneCost})
      } else {
        this.$store.dispatch('setError', 1)
      }
    },
    decBld (payload) {
      this.$store.dispatch('decBld', payload.name)
    },
    // runs navigation and sets which set of buildings to show
    setShowBuild (payload, build) {
      switch (payload) {
        case 0:
          if (build.buttons.unlkLvl1.disable === false) {
            this.showBuild = 'lvl1'
          }
          break
        case 1:
          if (build.buttons.unlkLvl2.disable === false) {
            this.showBuild = 'lvl2'
          }
          break
        case 2:
          if (build.buttons.unlkLvl3.disable === false) {
            this.showBuild = 'lvl3'
          }
          break
        case 3:
          if (build.buttons.unlkLvl4.disable === false) {
            this.showBuild = 'lvl4'
          }
      }
    }
  },
  computed: {
    build () {
      return this.$store.getters.buildings
    },
    resources () {
      return this.$store.getters.resources
    }
  }
}
</script>

<style scoped>
.is-margineless-bot {
    margin-bottom: 0px;
}
.is-paddingless-bot {
    margin-bottom: 0px;
}
.is-paddingless-horizontal {
    padding-top: 0px;
    padding-bottom: 0px;
}
.citizenToggle {
    display: none;
}
.bldCost i {
  margin-right: 7px;
}
</style>
