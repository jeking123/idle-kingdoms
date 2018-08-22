const state = {
  buildings: {
    lvl1: [ // Level 1
      {name: 'farm', worker: 'farmers', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'sawmill', worker: 'loggers', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'quarry', worker: 'miners', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'tent', worker: 'peoples', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}}
    ],
    lvl2: [ // Level 2
      {name: 'drying racks', worker: 'driers', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'smithy', worker: 'blacksmiths', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'temple', worker: 'priests', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'hut', worker: 'peoples', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}}
    ],
    lvl3: [ // Level 3
      {name: 'one', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'two', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'temple', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'hut', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}}
    ],
    lvl4: [ // Level 4
      {name: 'two', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'one', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'temple', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'hut', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}}
    ]
  },
  buttons: [

  ]
}

const mutations = {
  'INCR_BLD': (state, payload) => {
    console.log(payload)
    switch (payload) {
      case 'farm':
        state.buildings.lvl1[0].quantity++
        break
      case 'sawmill':
        state.buildings.lvl1[1].quantity++
        break
      case 'quarry':
        state.buildings.lvl1[2].quantity++
        break
      case 'tent':
        state.buildings.lvl1[3].quantity++
    }
  },
  'DEC_BLD': (state, payload) => {
    switch (payload) {
      case 'farm':
        state.buildings.lvl1[0].quantity--
        break
      case 'sawmill':
        state.buildings.lvl1[1].quantity--
        break
      case 'quarry':
        state.buildings.lvl1[2].quantity--
        break
      case 'tent':
        state.buildings.lvl1[3].quantity--
    }
  }
}

const actions = {
  incrBld: ({commit}, payload) => {
    commit('INCR_BLD', payload)
  },
  decBld: ({commit}, payload) => {
    commit('DEC_BLD', payload)
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
