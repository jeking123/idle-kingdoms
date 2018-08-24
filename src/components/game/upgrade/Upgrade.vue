<template>
    <div>
        <h3 class="">Unlock Buildings</h3>
        <div class="is-paddingless-hor level is-mobile is-marginless is-size-6" v-for="(button, key) in build.buttons" :key="key" :class="{'purchased': button.disable === false}">
          <div class="level-left">
            <div class="level-item">
              <p>{{button.name}} &ensp;</p>
              <i class="mdi mdi-barley"></i><i class="mdi mdi-pine-tree"></i><i class="mdi mdi-cloud"></i>{{button.cost.food}}
            </div>
          </div>
          <div class="level-right">
            <div class="level-item is-size-3">
              <div @click="enableBld({num: button.type, cost: button.cost}, resources)">
                <i class="mdi mdi-plus-box"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    enableBld (payload, resources) {
      var food = resources[0][0].quantity
      var wood = resources[0][1].quantity
      var stone = resources[0][2].quantity

      var foodCost = payload.cost.food
      var woodCost = payload.cost.wood
      var stoneCost = payload.cost.stone
      if (food >= foodCost && wood >= woodCost && stone >= stoneCost) {
        this.$store.dispatch('enableBld', payload.num)
        this.$store.dispatch('useRec', {type: 0, amount: foodCost})
        this.$store.dispatch('useRec', {type: 1, amount: woodCost})
        this.$store.dispatch('useRec', {type: 2, amount: stoneCost})
      } else {
        this.$store.dispatch('setError', 1)
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
.purchased {
  display: none;
}
.is-paddingless-hor {
  padding: 5px 0px;
}
</style>
