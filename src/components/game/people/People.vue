<template>
    <div>
        <div>
            <div class="columns is-mobile is-margineless-bot" style="margin-top:0px;">
                <div class="column is-paddingless-horizontal">Workers {{populus.people.assigned}}</div>
                <div class="column is-paddingless-horizontal has-text-right">Populus {{populus.people.quantity}}/{{populus.people.max}}</div>
            </div>
            <progress class="progress" :value="populus.people.quantity" :max="populus.people.max"></progress>
            <div class="button is-fullwidth" @click.self="recruitPop({type:0, amount:1})"> Accept People to Kingdom | <i class="mdi mdi-barley"></i> 10</div>
        </div>
        <div>
              <div class="switch has-background-grey-dark has-text-white">
                <input type="radio" class="switch-input" name="view" id="week" v-model="citizenToggle" :value="true" checked>
                <label for="week" class="switch-label switch-label-off">Gatherers</label>
                <template>
                  <input type="radio" class="switch-input" name="view" v-model="citizenToggle" :value="false" id="month">
                  <label for="month" class="switch-label switch-label-on">Specialists</label>
                </template>
                <span class="switch-selection has-background-link"></span>
              </div>
                <!-- <div v-for="popB in populus.popButton" class="button" :key="popB.name" @click="citizenToggle = !citizenToggle">{{popB.name}}</div> -->
            </div>
        <div>
          <!-- Refactor this to components for simplicity -->
            <transition name="fade" mode="out-in">
              <div class="columns is-mobile is-multiline is-marginless-bot" v-if="citizenToggle" style="width:95vw;" key="gatherers">
                  <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                  style="align-items:center;"
                  v-for="unit in populus.population[0]"
                  :key="unit.name">
                      <div class="column is-narrow is-size-3 is-paddingless" @click="popDecrease(unit)" ><i class="mdi mdi-minus-box"></i></div>
                      <div class="column is-expanded is-paddingless is-uppercase is-size-7">{{unit.name}} |  {{unit.quantity}} / {{unit.max}}</div>
                      <div class="column is-narrow is-size-3 is-paddingless" @click="popIncrease(unit)"><i class="mdi mdi-plus-box"></i></div>
                  </div>
              </div>
              <div class="columns is-mobile is-multiline is-marginless-bot" v-else style="width:95vw;" key="specialty">
                  <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                  style="align-items:center;"
                  v-for="specialty in populus.population[1]"
                  :key="specialty.name">
                      <div class="column is-narrow is-size-3 is-paddingless" @click="popDecrease(specialty)" ><i class="mdi mdi-minus-box"></i></div>
                      <div class="column is-expanded is-paddingless is-uppercase is-size-7">{{specialty.name}} | {{specialty.quantity}} / {{specialty.max}}</div>
                      <div class="column is-narrow is-size-3 is-paddingless" @click="popIncrease(specialty)"><i class="mdi mdi-plus-box"></i></div>
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
      citizenToggle: true
    }
  },
  methods: {
    recruitPop (payload) {
      var resource = this.$store.getters.resources[0][0].quantity
      var pop = this.$store.getters.population
      if (resource >= 1 && pop.people.quantity <= (pop.people.max - 1)) {
        this.$store.dispatch('recruitPop', payload)
        // this.$store.dispatch('useRec', payload)
      } else {
        this.$store.dispatch('setError', 1)
      }
    },
    // assign workers
    popIncrease (payload) {
      var populus = this.$store.getters.population
      // console.log(payload.name)
      if (payload.quantity <= (payload.max - 1) && populus.people.assigned <= (populus.people.quantity - 1)) {
        this.$store.dispatch('popIncrease', payload.name)
      } else {
        this.$store.dispatch('setError', 2)
      }
    },
    // un assigne workers
    popDecrease (payload) {
      if (payload.quantity > 0) {
        this.$store.dispatch('popDecrease', payload.name)
      } else {
        this.$store.dispatch('setError', 3)
      }
    }
  },
  computed: {
    populus () {
      return this.$store.getters.population
    }
  }
}
</script>

<style scoped>

/* Animation */

.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  transform: translateX(0%);
}

/* EndAnimation*/

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
/* Radio Toggle Styling */
.switch {
  position: relative;
  height: 26px;
  width: 100%;
  margin: 10px auto;
  border-radius: 6px;
}

.switch-label {
  position: relative;
  z-index: 2;
  float: left;
  width: 50%;
  line-height: 26px;
  font-size: 11px;
  text-align: center;
  cursor: pointer;
}
.switch-label:active {
  font-weight: bold;
}

.switch-label-off {
  padding-left: 2px;
}

.switch-label-on {
  padding-right: 2px;
}

.switch-input {
  display:none;
}

.switch-input:checked + .switch-label-on ~ .switch-selection {
  left: 50%;
  /* Note: left: 50%; doesn't transition in WebKit */
}

.switch-selection {
  position: absolute;
  z-index: 1;
  top: 2px;
  left: 2px;
  display: block;
  width: 50%;
  height: 22px;
  border-radius: 3px;
  background-color: #65bd63;
  -webkit-transition: left 0.5s ease-out;
  -moz-transition: left 0.5s ease-out;
  -ms-transition: left 0.5s ease-out;
  -o-transition: left 0.5s ease-out;
  transition: left 0.5s ease-out;
}
</style>
