<template>
  <div>
    <h1>The Log</h1>
    <div v-for="(item, index) in log" :key="index">{{index}}: {{item.message}}</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'setLog'
    ])
  },
  computed: {
    log () {
      return this.$store.getters.log
    }
  }
}
</script>
