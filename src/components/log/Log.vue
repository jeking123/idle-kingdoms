<template>
  <div>
    <h1>The Log</h1>
    <div v-for="(item, index) in log" :key="index">{{index}}: {{item.message}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    log () {
      return this.$store.getters.log
    }
  }
}
</script>
