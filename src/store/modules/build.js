const state = {
  buildings: {
    lvl1: [ // Level 1
      {name: 'farm', worker: 'farmers', quantity: 0, max: 0, unlocked: false, cost: {food: 5, wood: 25, stone: 5}},
      {name: 'sawmill', worker: 'loggers', quantity: 0, max: 0, unlocked: false, cost: {food: 5, wood: 35, stone: 10}},
      {name: 'quarry', worker: 'miners', quantity: 0, max: 0, unlocked: false, cost: {food: 5, wood: 5, stone: 35}},
      {name: 'tent', worker: 'people', quantity: 0, max: 0, unlocked: false, cost: {food: 0, wood: 5, stone: 5}}
    ],
    lvl2: [ // Level 2
      {name: 'drying racks', worker: 'driers', quantity: 0, max: 0, unlocked: false, cost: {food: 0, wood: 50, stone: 25}},
      {name: 'smithy', worker: 'blacksmiths', quantity: 0, max: 0, unlocked: false, cost: {food: 0, wood: 25, stone: 100}},
      {name: 'temple', worker: 'priests', quantity: 0, max: 0, unlocked: false, cost: {food: 100, wood: 100, stone: 100}},
      {name: 'hut', worker: 'people', quantity: 0, max: 0, unlocked: false, cost: {food: 25, wood: 100, stone: 25}}
    ],
    lvl3: [ // Level 3
      {name: 'nine', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'ten', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'eleven', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'twelve', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}}
    ],
    lvl4: [ // Level 4
      {name: 'thirteen', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'fourteen', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'fiteen', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}},
      {name: 'sixteen', worker: 'farmer', quantity: 0, max: 0, unlocked: false, cost: {food: 1, wood: 1, stone: 1}}
    ]
  },
  buttons: {
    unlkLvl1: {name: 'Unlock Level 1', type: 'lvl1', disable: true, cost: {food: 25, wood: 25, stone: 25}},
    unlkLvl2: {name: 'Unlock Level 2', type: 'lvl2', disable: true, cost: {food: 100, wood: 100, stone: 100}},
    unlkLvl3: {name: 'Unlock Level 3', type: 'lvl3', disable: true, cost: {food: 1000, wood: 1000, stone: 1000}},
    unlkLvl4: {name: 'Unlock Level 4', type: 'lvl4', disable: true, cost: {food: 10000, wood: 10000, stone: 10000}}
  },
  showBuild: 'locked'
}

const mutations = {
  'INCR_BLD': (state, payload) => {
    // console.log(payload)
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
  },
  'ENABLE_BLD': (state, payload) => {
    switch (payload) {
      case 'lvl1':
        state.buttons.unlkLvl1.disable = false
        break
      case 'lvl2':
        state.buttons.unlkLvl2.disable = false
        break
      case 'lvl3':
        state.buttons.unlkLvl3.disable = false
        break
      case 'lvl4':
        state.buttons.unlkLvl4.disable = false
    }
  }
}

const actions = {
  incrBld: ({commit}, payload) => {
    commit('INCR_BLD', payload)
  },
  decBld: ({commit}, payload) => {
    commit('DEC_BLD', payload)
  },
  enableBld: ({commit}, payload) => {
    commit('ENABLE_BLD', payload)
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
