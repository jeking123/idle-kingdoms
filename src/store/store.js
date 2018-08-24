import Vue from 'vue'
import Vuex from 'vuex'
import gather from './modules/gather'
import people from './modules/people'
import build from './modules/build'
import log from './modules/log'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: {
      days: 0,
      hrs: 0
    }
  },
  mutations: {
    'TIME': state => {
      state.time.hrs += 1
      if (state.time.hrs === 24) {
        state.time.hrs = 0
        state.time.days += 1
      }
    }
  },
  actions: {
    runGame: ({commit}, payload) => {
      commit('TIME')
    }
  },
  modules: {
    gather,
    people,
    build,
    log,
    error
  }
})
