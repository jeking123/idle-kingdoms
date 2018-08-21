const state = {
  buildings: [
    [ // Level 1
      {name: 'farm', quantity: 0, max: 0, unlocked: false},
      {name: 'sawmill', quantity: 0, max: 0, unlocked: false},
      {name: 'quarry', quantity: 0, max: 0, unlocked: false},
      {name: 'tent', quantity: 0, max: 0, unlocked: false}
    ],
    [ // Level 2
      {name: 'drying racks', quantity: 0, max: 0, unlocked: false},
      {name: 'smithy', quantity: 0, max: 0, unlocked: false},
      {name: 'temple', quantity: 0, max: 0, unlocked: false},
      {name: 'hut', quantity: 0, max: 0, unlocked: false}
    ],
    [ // Level 3
      {name: 'one', quantity: 0, max: 0, unlocked: false},
      {name: 'two', quantity: 0, max: 0, unlocked: false},
      {name: 'temple', quantity: 0, max: 0, unlocked: false},
      {name: 'hut', quantity: 0, max: 0, unlocked: false}
    ],
    [ // Level 4
      {name: 'two', quantity: 0, max: 0, unlocked: false},
      {name: 'one', quantity: 0, max: 0, unlocked: false},
      {name: 'temple', quantity: 0, max: 0, unlocked: false},
      {name: 'hut', quantity: 0, max: 0, unlocked: false}
    ]
  ],
  buttons: [

  ]
}

const mutations = {
  'INCR_BLD': (state, payload) => {
    switch (payload) {
      case 'farm':
        state.buildings[0][0].quantity++
        break
      case 'sawmill':
        state.buildings[0][1].quantity++
        break
      case 'quarry':
        state.buildings[0][2].quantity++
        break
      case 'tent':
        state.buildings[0][3].quantity++
    }
  },
  'DEC_BLD': (state, payload) => {
    switch (payload) {
      case 'farm':
        state.buildings[0][0].quantity--
        break
      case 'sawmill':
        state.buildings[0][1].quantity--
        break
      case 'quarry':
        state.buildings[0][2].quantity--
        break
      case 'tent':
        state.buildings[0][3].quantity--
    }
  }
}

const actions = {
  incrBld: ({commit}, payload) => {
    commit('INCR_BLD', payload)
  }
}

const getters = {
  buildings (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
