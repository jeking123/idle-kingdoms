import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: {
      days: 0,
      hrs: 0
    },
    resources: [
      // gathered resources
      [
        {name: 'food', quantity: 0, icon: 'mdi-barley'},
        {name: 'wood', quantity: 0, icon: 'mdi-pine-tree'},
        {name: 'stone', quantity: 0, icon: 'mdi-cloud'}
      ],
      // // found resources
      // [
      //   {name: 'skin', quantity: 0, icon: 'mdi-cow'},
      //   {name: 'herbs', quantity: 0, icon: 'mdi-mushroom'},
      //   {name: 'ore', quantity: 0, icon: 'mdi-rhombus-medium'}
      // ],
      // // refined resources
      // [
      //   {name: 'leather', quantity: 0, icon: 'mdi-thumb-up'},
      //   {name: 'metal', quantity: 0, icon: 'mdi-instapaper mdi-rotate-90'},
      //   {name: 'peity', quantity: 0, icon: 'mdi-christianity'}
      // ]
    ],
    people: [
      {name: 'people', quantity: 5, max: 10}
    ],
    popButton: [
      {name: 'basic'},
      {name: 'specialty'}
    ],
    population: [
      [
        {name: 'farmers', quantity: 0},
        {name: 'loggers', quantity: 0},
        {name: 'miners', quantity: 0}
      ],
      [
        {name: 'driers', quantity: 0},
        {name: 'blacksmiths', quantity: 0},
        {name: 'priests', quantity: 0},
      ]
    ],
    buildings: [
      // buildings resources
      [ // Level 1
        {name: 'farm', quantity: 0, unlocked: false},
        {name: 'sawmill', quantity: 0, unlocked: false},
        {name: 'quarry', quantity: 0, unlocked: false},
        {name: 'tent', quantity: 0, unlocked: false}
      ],
      [ // Level 2
        {name: 'drying racks', quantity: 0, unlocked: false},
        {name: 'smithy', quantity: 0, unlocked: false},
        {name: 'temple', quantity: 0, unlocked: false},
        {name: 'hut', quantity: 0, unlocked: false}
      ]
    ]
  },
  getters: {

  },
  mutations: {
    gatherRecs: (state, payload) => {
      if (payload === 'food') {
        state.resources[0][0].quantity++
        // if (Math.round(Math.random() * 100) < 2) { state.resources[1][0].quantity += 1 }
      } else if (payload === 'wood') {
        state.resources[0][1].quantity++
        // if (Math.round(Math.random() * 100) < 10) { state.resources[1][1].quantity += 1 }
      } else if (payload === 'stone') {
        state.resources[0][2].quantity++
        // if (Math.round(Math.random() * 100) <= 1) { state.resources[1][2].quantity += 1 }
      }
    },
    farms: state => {
      if (state.buildings[0][0].quantity >= 1) {
        state.resources[0][0].quantity += (state.buildings[0][0].quantity * 1)
        if (Math.round(Math.random() * 100) < 8) {state.resources[1][0].quantity += 1 }
      }
    },
    sawmills: state => {
      if (state.buildings[0][1].quantity >= 1) {
        state.resources[0][1].quantity += (state.buildings[0][1].quantity * 1)
        if (Math.round(Math.random() * 100) < 6) { state.resources[1][1].quantity += 1 }
      }
    },
    quarrys: state => {
      if (state.buildings[0][2].quantity >= 1) {
        state.resources[0][2].quantity += (state.buildings[0][2].quantity * 1)
        if (Math.round(Math.random() * 100) < 3) { state.resources[1][2].quantity += 1 }
      }
    },
    time: state => {
      state.time.hrs += 1
      if (state.time.hrs === 24) {
        state.time.hrs = 0
        state.time.days += 1
      }
    },
    buildingUpgrade: (state, payload) => {
      var food = state.resources[0][0].quantity
      var wood = state.resources[0][1].quantity
      var stone = state.resources[0][2].quantity
      if (food >= payload.food && wood >= payload.wood && stone >= payload.stone) {
        state.resources[0][0].quantity -= payload.food
        state.resources[0][1].quantity -= payload.wood
        state.resources[0][2].quantity -= payload.stone
        state.buildings = true
      }
    },
    recruitPop: (state, payload) => {
      // payload is food cost
      state.resources[0][0].quantity -= payload
      state.people[0].quantity++
    }
  },
  actions: {
    // ES6 shorten to pass only needed method through
    gatherRec: ({commit}, payload) => {
      commit('gatherRecs', payload)
    },
    recruitPop: ({commit}, payload) => {
      commit('recruitPop', payload)
    },
    runGame: ({commit}) => {
      setInterval(() => {
        commit('farms')
        commit('sawmills')
        commit('quarrys')
        commit('time')
      }, 1000)
    }
  }
})
