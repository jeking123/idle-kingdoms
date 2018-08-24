import resources from '../../data/resources'
const state = {
  resources: []
}

const mutations = {
  'SET_REC' (state, resources) {
    state.resources = resources
  },
  'GATHER_REC': (state, payload) => {
    switch (payload.type) {
      case 0: // food
        state.resources[0][0].quantity += payload.amount
        break
      case 1: // wood
        state.resources[0][1].quantity += payload.amount
        break
      case 2: // stone
        state.resources[0][2].quantity += payload.amount
    }
  },
  'USE_REC': (state, payload) => {
    switch (payload.type) {
      case 0: // food
        state.resources[0][0].quantity -= payload.amount
        break
      case 1: // wood
        state.resources[0][1].quantity -= payload.amount
        break
      case 2: // stone
        state.resources[0][2].quantity -= payload.amount
    }
  }
}

const actions = {
  initRec: ({commit}) => {
    commit('SET_REC', resources)
  },
  gatherRec: ({commit}, payload) => {
    commit('GATHER_REC', payload)
  },
  useRec: ({commit}, payload) => {
    commit('USE_REC', payload)
  }
}

const getters = {
  resources: state => {
    return state.resources
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
