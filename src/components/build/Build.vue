<template>
     <div>
          <div class="tabs is-toggle is-fullwidth is-small has-text-centered">
            <ul>
              <li class="" @click="setShowBuild(0)" :class="{'is-active': showBuild == 'lvl1'}"><a>
                  <span>LVL1</span>
                </a></li>
              <li class="" @click="setShowBuild(1)" :class="{'is-active': showBuild == 'lvl2'}" disabled><a>
                  <span>LVL2</span>
                </a></li>
              <li class="" @click="setShowBuild(2)" :class="{'is-active': showBuild == 'lvl3'}"><a>
                  <span>LVL3</span>
                </a></li>
              <li class="" @click="setShowBuild(3)" :class="{'is-active': showBuild == 'lvl4'}"><a>
                  <span>LVL4</span>
                </a></li>
            </ul>
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
                      <!-- <div class="column is-narrow is-size-3 is-paddingless"
                           @click="decBld(building, resources)">
                        <i class="mdi mdi-minus-box"></i>
                      </div> -->
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
      showBuild: 'lvl1'
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
    setShowBuild (payload) {
      switch (payload) {
        case 0:
          this.showBuild = 'lvl1'
          break
        case 1:
          this.showBuild = 'lvl2'
          break
        case 2:
          this.showBuild = 'lvl3'
          break
        case 3:
          this.showBuild = 'lvl4'
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
