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
  recruitPop: (state) => {
    // payload is food cost
    // state.resources[0][0].quantity -= payload
    state.people.quantity += 1
  }
}

const actions = {
  recruitPop: ({commit}) => {
    commit('recruitPop')
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
