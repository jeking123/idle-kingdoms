export default [
  {
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
      ],
      // found resources
      [
        {name: 'skin', quantity: 0, icon: 'mdi-cow'},
        {name: 'herbs', quantity: 0, icon: 'mdi-mushroom'},
        {name: 'ore', quantity: 0, icon: 'mdi-rhombus-medium'}
      ],
      // refined resources
      [
        {name: 'leather', quantity: 0, icon: 'mdi-thumb-up'},
        {name: 'metal', quantity: 0, icon: 'mdi-instapaper mdi-rotate-90'},
        {name: 'peity', quantity: 0, icon: 'mdi-christianity'}
      ]
    ],
    population: [
      [
        {name: 'people', quantity: 0},
        {name: 'farmers', quantity: 0},
        {name: 'loggers', quantity: 0},
        {name: 'miners', quantity: 0}
      ]
    ],
    buildings: [
      // buildings resources
      [
        {name: 'farm', quantity: 0, unlocked: false},
        {name: 'sawmill', quantity: 0, unlocked: false},
        {name: 'quarry', quantity: 0, unlocked: false}
      ]
    ]
  }
]
