import Vue from 'vue'
import Vuex from 'vuex'
import gather from './modules/gather'
import people from './modules/people'
import log from './modules/log'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: {
      days: 0,
      hrs: 0
    },
    buildings: [
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
    ],
    error: {
      message: 'this is an error message, something has gone horribly wrong!',
      name: '',
      errorHistory: [],
      active: false
    }
  },
  getters: {
    error (state) {
      return state.error
    }
  },
  mutations: {
    'SET_ERROR': (state, payload) => {
      state.error.message = payload.message
      state.error.name = payload.name
      state.error.active = payload.active
    },
    farms: state => {
      if (state.buildings[0][0].quantity >= 1) {
        state.resources[0][0].quantity += (state.buildings[0][0].quantity * 1)
        if (Math.round(Math.random() * 100) < 8) { state.resources[1][0].quantity += 1 }
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
    }
  },
  actions: {
    runGame: ({commit}) => {
      setInterval(() => {
        // commit('farms')
        // commit('sawmills')
        // commit('quarrys')
        commit('time')
      }, 1000)
    }
  },
  modules: {
    gather,
    people,
    log
  }
})
