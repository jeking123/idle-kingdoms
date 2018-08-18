<template>
    <div>
        <div>
            <div class="columns is-mobile is-margineless-bot">
                <div class="column is-paddingless-horizontal">Current Pop: {{populus.people.quantity}}</div>
                <div class="column is-paddingless-horizontal">Max Pop: {{populus.people.max}}</div>
            </div>
            <progress class="progress" :value="populus.people.quantity" :max="populus.people.max"></progress>
            <div class="button is-fullwidth" @click.self="recruitPop()"> Accept People to Kingdom | <i class="mdi mdi-barley"></i> 10</div>
        </div>
        <div>
            <div>
                <div v-for="popB in populus.popButton" class="button" :key="popB.name" @click="citizenToggle = !citizenToggle">{{popB.name}}</div>
            </div>
            <div class="columns is-mobile is-multiline is-marginless-bot" v-show="citizenToggle">
                <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                style="align-items:center;"
                v-for="unit in populus.population[0]"
                :key="unit.name">
                    <div class="column is-narrow is-size-3 is-paddingless">-</div>
                    <div class="column is-expanded is-paddingless">{{unit.name}}</div>
                    <div class="column is-narrow is-size-3 is-paddingless">+</div>
                </div>
            </div>
            <div class="columns is-mobile is-multiline is-marginless-bot" v-show="!citizenToggle">
                <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                style="align-items:center;"
                v-for="specialty in populus.population[1]"
                :key="specialty.name">
                    <div class="column is-narrow is-size-3 is-paddingless">-</div>
                    <div class="column is-expanded is-paddingless">{{specialty.name}}</div>
                    <div class="column is-narrow is-size-3 is-paddingless">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      citizenToggle: true
    }
  },
  methods: {
    ...mapActions([
      'recruitPop'
    ])
  },
  computed: {
    populus () {
      return this.$store.getters.population
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
</style>
