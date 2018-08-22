const state = {
  error: {
    message: 'this is an error message, something has gone horribly wrong!',
    name: 'Recruit',
    errorHistory: [],
    active: false
  }
}

const mutations = {
  'SET_ERR': (state, payload) => {
    // Error Code structure
    // numbers, first is page, second is item on page
    // EG. 0
    state.error.active = true

    switch (payload) {
      case 0:
        state.error.message = 'error'
        state.error.name = 'error'
        break
      case 1:
        state.error.name = 'Resources'
        state.error.message = 'Not Enough Resources'
        break
      case 2:
        state.error.name = 'Buildings'
        state.error.message = 'No more space for workers'
        break
      case 3:
        state.error.name = 'Workers'
        state.error.message = 'No More Workers'
        break
    }
  },
  'DEACTIVATE_ERR': (state) => {
    state.error.active = false
    var message = {name: state.error.name, message: state.error.message}
    state.error.errorHistory.unshift(message)
  }
}

const actions = {
  setError: ({commit}, payload) => {
    commit('SET_ERR', payload)
  },
  deactivateError: ({commit}) => {
    commit('DEACTIVATE_ERR')
  }
}

const getters = {
  error (state) {
    return state.error
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
