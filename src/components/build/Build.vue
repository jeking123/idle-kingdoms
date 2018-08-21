<template>
     <div>
          <div class="tabs is-toggle is-fullwidth is-small has-text-centered">
            <ul>
              <li class="" @click="setShowBuild(0)" :class="{'is-active': showBuild == 'lvl1'}"><a>
                  <span>LVL1</span>
                </a></li>
              <li class="" @click="setShowBuild(1)" :class="{'is-active': showBuild == 'lvl2'}"><a>
                  <span>LVL2</span>
                </a></li>
              <li class="" @click="setShowBuild(2)" :class="{'is-active': showBuild == 'lvl3'}"><a>
                  <span>LVL3</span>
                </a></li>
              <li class="" @click="setShowBuild(3)" :class="{'is-active': showBuild == 'lvl4'}"><a>
                  <span>LVL4</span>
                </a></li>
            </ul>
          </div>
        <div>
          <!-- Refactor this to Components for simplicity -->
            <transition name="fade" mode="out-in">
              <div class="columns is-mobile is-multiline is-marginless-bot" v-if="showBuild === 'lvl1'" style="width:95vw;" key="lvl1">
                  <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                  style="align-items:center;"
                  v-for="building1 in build.buildings[0]"
                  :key="building1.name">
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-minus-box"></i></div>
                      <div class="column is-expanded is-paddingless is-uppercase is-size-7">{{building1.name}} |  {{building1.quantity}}</div>
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-plus-box"></i></div>
                  </div>
              </div>
              <div class="columns is-mobile is-multiline is-marginless-bot" v-else-if="showBuild === 'lvl2'" style="width:95vw;" key="lvl2">
                  <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                  style="align-items:center;"
                  v-for="building2 in build.buildings[1]"
                  :key="building2.name">
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-minus-box"></i></div>
                      <div class="column is-expanded is-paddingless is-uppercase is-size-7">{{building2.name}} | {{building2.quantity}}</div>
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-plus-box"></i></div>
                  </div>
              </div>
              <div class="columns is-mobile is-multiline is-marginless-bot" v-else-if="showBuild === 'lvl3'" style="width:95vw;" key="lvl3">
                  <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                  style="align-items:center;"
                  v-for="building3 in build.buildings[2]"
                  :key="building3.name">
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-minus-box"></i></div>
                      <div class="column is-expanded is-paddingless is-uppercase is-size-7">{{building3.name}} | {{building3.quantity}}</div>
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-plus-box"></i></div>
                  </div>
              </div>
              <div class="columns is-mobile is-multiline is-marginless-bot" v-else-if="showBuild === 'lvl4'" style="width:95vw;" key="lvl4">
                  <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                  style="align-items:center;"
                  v-for="building3 in build.buildings[3]"
                  :key="building3.name">
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-minus-box"></i></div>
                      <div class="column is-expanded is-paddingless is-uppercase is-size-7">{{building3.name}} | {{building3.quantity}}</div>
                      <div class="column is-narrow is-size-3 is-paddingless"><i class="mdi mdi-plus-box"></i></div>
                  </div>
              </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showBuild: 'lvl1'
    }
  },
  methods: {
    setShowBuild (payload) {
      switch (payload) {
        case 0:
          this.showBuild = 'lvl1'
          break
        case 1:
          this.showBuild = 'lvl2'
          break
        case 2:
          this.showBuild = 'lvl3'
          break
        case 3:
          this.showBuild = 'lvl4'
      }
    }
  },
  computed: {
    build () {
      return this.$store.getters.buildings
    }
  }
}
</script>

<style scoped>
.is-margineless-bot {
    margin-bottom: 0px;
}
.is-paddingless-bot {
    margin-bottom: 0px;
}
.is-paddingless-horizontal {
    padding-top: 0px;
    padding-bottom: 0px;
}
.citizenToggle {
    display: none;
}
</style>
