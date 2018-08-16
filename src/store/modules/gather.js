const state = {
  resources: [
    // gathered resources
    [
      {name: 'food', quantity: 0, icon: 'mdi-barley'},
      {name: 'wood', quantity: 0, icon: 'mdi-pine-tree'},
      {name: 'stone', quantity: 0, icon: 'mdi-cloud'}
    ],
    // found resources
    [
      {name: 'skin', quantity: 0, icon: 'mdi-cow'},
      {name: 'herbs', quantity: 0, icon: 'mdi-mushroom'},
      {name: 'ore', quantity: 0, icon: 'mdi-rhombus-medium'}
    ]
    // // refined resources
    // [
    //   {name: 'leather', quantity: 0, icon: 'mdi-thumb-up'},
    //   {name: 'metal', quantity: 0, icon: 'mdi-instapaper mdi-rotate-90'},
    //   {name: 'peity', quantity: 0, icon: 'mdi-christianity'}
    // ]
  ]
}

const mutations = {
  // 'SET_REC' (state, resources) {
  //   state.resources = resources
  // }
  gatherRecs: (state, payload) => {
    if (payload === 'food') {
      state.resources[0][0].quantity++
      // if (Math.round(Math.random() * 100) < 2) { state.resources[1][0].quantity += 1 }
    } else if (payload === 'wood') {
      state.resources[0][1].quantity++
      // if (Math.round(Math.random() * 100) < 10) { state.resources[1][1].quantity += 1 }
    } else if (payload === 'stone') {
      state.resources[0][2].quantity++
      // if (Math.round(Math.random() * 100) <= 1) { state.resources[1][2].quantity += 1 }
    }
  }
}

const actions = {
  // initRec: ({commit}) => {
  //   commit('SET_REC', resources)
  // }
  gatherRec: ({commit}, payload) => {
    commit('gatherRecs', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
