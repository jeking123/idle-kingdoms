import Home from './components/home/Home'
import Game from './components/game/GameStart.vue'
import Gather from './components/game/gather/Gather.vue'
import People from './components/game/people/People.vue'
import Build from './components/game/build/Build.vue'
import Upgrade from './components/game/upgrade/Upgrade.vue'
// import Log from './components/game/log/Log.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/game',
    component: Game,
    children: [
      { path: '/gather', component: Gather },
      { path: '/people', component: People },
      { path: '/build', component: Build },
      { path: '/upgrade', component: Upgrade }
      // { path: '/log', component: Log }
    ]
  },
  { path: '*', component: Home }
]
