const state = {
  people: {
    name: 'people',
    quantity: 0,
    assigned: 0,
    max: 10
  },
  popButton: [
    {name: 'basic'},
    {name: 'specialty'}
  ],
  population: [
    [
      {name: 'farmers', quantity: 0, max: 0},
      {name: 'loggers', quantity: 0, max: 0},
      {name: 'miners', quantity: 0, max: 0}
    ],
    [
      {name: 'driers', quantity: 0, max: 0},
      {name: 'blacksmiths', quantity: 0, max: 0},
      {name: 'priests', quantity: 0, max: 0}
    ]
  ]
}

const mutations = {
  'RECRUIT_POP': (state) => {
    state.people.quantity += 1
  },
  'POP_INCREASE': (state, payload) => {
    switch (payload) {
      case 'farmers':
        state.population[0][0].quantity++
        state.people.assigned++
        break
      case 'loggers':
        state.population[0][1].quantity++
        state.people.assigned++
        break
      case 'miners':
        state.population[0][2].quantity++
        state.people.assigned++
        break
      case 'people':
        state.people.quantity++
    }
  },
  'POP_DECREASE': (state, payload) => {
    switch (payload) {
      case 'farmers':
        state.population[0][0].quantity--
        state.people.assigned--
        break
      case 'loggers':
        state.population[0][1].quantity--
        state.people.assigned--
        break
      case 'miners':
        state.population[0][2].quantity--
        state.people.assigned--
    }
  },
  'MAX_POP_INCREASE': (state, payload) => {
    switch (payload) {
      case 'farmers':
        state.population[0][0].max += 5
        break
      case 'loggers':
        state.population[0][1].max += 5
        break
      case 'miners':
        state.population[0][2].max += 5
        break
      case 'people':
        state.people.max += 3
    }
  }
}

const actions = {
  recruitPop: ({commit}, payload) => {
    commit('RECRUIT_POP')
    commit('USE_REC', payload) // Gather.js
  },
  popIncrease: ({commit}, payload) => {
    commit('POP_INCREASE', payload)
  },
  popDecrease: ({commit}, payload) => {
    commit('POP_DECREASE', payload)
  },
  maxPopIncrease: ({commit}, payload) => {
    commit('MAX_POP_INCREASE', payload)
  }
}

const getters = {
  population () {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
