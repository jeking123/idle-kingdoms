const state = {
  log: [
    {message: 'mistakes'},
    {message: 'problems'}
  ]
}

// at some point, Update the log code with a switch of different options
const mutations = {
  'SET_LOG': (state, payload) => {
    state.log.push(payload)
  }
}

const actions = {
  setLog: ({commit}, payload) => {
    commit('SET_LOG', {message: payload.message})
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
