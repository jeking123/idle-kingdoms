const state = {
  people: {
    name: 'people',
    quantity: 0,
    max: 10
  },
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
      {name: 'priests', quantity: 0}
    ]
  ]
}

const mutations = {
  'RECRUIT_POP': (state) => {
    state.people.quantity += 1
  }
}

const actions = {
  recruitPop: ({commit}, payload) => {
    commit('RECRUIT_POP')
    commit('USE_REC', payload) // Gather.js
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
