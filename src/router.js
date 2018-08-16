import Gather from './components/gather/Gather.vue'
import People from './components/people/People.vue'
import Build from './components/build/Build.vue'
import Upgrade from './components/upgrade/Upgrade.vue'

export const routes = [
  { path: '/gather', component: Gather },
  { path: '/people', component: People },
  { path: '/build', component: Build },
  { path: '/upgrade', component: Upgrade }
]
