const state = {
  log: [
    {id: 0, message: 'mistakes'},
    {id: 1, message: 'problems'}
  ]
}

const mutations = {
  'SET_LOG': (state, payload) => {
    state.log.push(payload)
  }
}

const actions = {
  setLog: ({commit}, payload) => {
    commit('SET_LOG', payload)
  }
}

const getters = {
  log () {
    return state.log
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
