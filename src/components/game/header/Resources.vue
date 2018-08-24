<template>
  <div class="box is-radiusless" style="padding-bottom:0px;">
    <div class="columns is-multiline is-mobile is-marginless-bottom is-size-7 is-uppercase is-paddingless is-marginless" style="justify-content:space-between;" >
      <div class="column is-12 columns is-multiline is-mobile is-paddingless is-marginless" style="flex-direction:row:" v-for="type in resources" :key="type.name">
        <div class="column is-4 is-paddingless is-marginless" v-for=" resource in type" :key="resource.name">
          <app-resource> <i class="mdi" :class="resource.icon"></i> {{resource.name}} | {{resource.quantity}}</app-resource>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Resource from './Resource.vue'
export default {
  components: {
    appResource: Resource
  },
  computed: {
    resources () {
      return this.$store.getters.resources
    }
  }
}
</script>

<style scoped>
    .is-marginless-bottom {
        margin-bottom: 0px;
    }

    .border {
      border: 1pt solid lightgrey;
    }
    .box {
      padding-bottom: 20px;
    }
</style>
