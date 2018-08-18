export const state = {
  time: {
    days: 0,
    hrs: 0
  },
  resources: [
    // gathered resources
    [
      {name: 'food', quantity: 0, icon: 'mdi-barley'},
      {name: 'wood', quantity: 0, icon: 'mdi-pine-tree'},
      {name: 'stone', quantity: 0, icon: 'mdi-cloud'}
    ]
    // // found resources
    // [
    //   {name: 'skin', quantity: 0, icon: 'mdi-cow'},
    //   {name: 'herbs', quantity: 0, icon: 'mdi-mushroom'},
    //   {name: 'ore', quantity: 0, icon: 'mdi-rhombus-medium'}
    // ],
    // // refined resources
    // [
    //   {name: 'leather', quantity: 0, icon: 'mdi-thumb-up'},
    //   {name: 'metal', quantity: 0, icon: 'mdi-instapaper mdi-rotate-90'},
    //   {name: 'peity', quantity: 0, icon: 'mdi-christianity'}
    // ]
  ],
  people: [
    {name: 'people', quantity: 5, max: 10}
  ],
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
  ],
  buildings: [
    // buildings resources
    [ // Level 1
      {name: 'farm', quantity: 0, unlocked: false},
      {name: 'sawmill', quantity: 0, unlocked: false},
      {name: 'quarry', quantity: 0, unlocked: false},
      {name: 'tent', quantity: 0, unlocked: false}
    ],
    [ // Level 2
      {name: 'drying racks', quantity: 0, unlocked: false},
      {name: 'smithy', quantity: 0, unlocked: false},
      {name: 'temple', quantity: 0, unlocked: false},
      {name: 'hut', quantity: 0, unlocked: false}
    ]
  ]
}
