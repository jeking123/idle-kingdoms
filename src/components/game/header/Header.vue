<template>
  <div>
    <div class="modal" :class="{'is-active': showModal}">
      <div class="modal-background" @click="showModal = !showModal"></div>
      <app-settings></app-settings>
    </div>

    <header class="box is-radiusless has-background-white-ter columns is-mobile" style="justify-content:space-between; align-items:center; padding-bottom:0px;">
          <h1 class="column has-text-weight-bold is-size-5 is-narrow">Idle Kingdoms</h1>
          <div class="column is-narrow">
            <!-- <div v-for="t in this.$store.state.time" :key="t">{{t}}</div> -->
            {{this.$store.state.time.days}} : {{this.$store.state.time.hrs}}
          </div>
        <div class="column is-narrow">
          <button class="button is-rounded is-link">
            <span class="icon">
              <i  class="mdi mdi-24px mdi-settings"
                  @click="showModal = !showModal"
              ></i>
            </span>
          </button>
        </div>
    </header>
    <div class="">
        <app-resources></app-resources>
    </div>
  </div>
</template>

<script>
import Resources from './Resources.vue'
import Settings from './Settings'
export default {
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  components: {
    appResources: Resources,
    appSettings: Settings
  }
}
</script>

<style scoped>
  .is-rounded {
    padding-left:.75rem;
    padding-right: .75rem;
  }
  .box {
    padding-bottom: 0px;
  }
  .is-paddingless-hori {
    padding-left:0px;
    padding-right:0px;
  }
</style>
