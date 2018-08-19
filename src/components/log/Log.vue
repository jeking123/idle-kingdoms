<template>
  <div>
    <h1>The Log</h1>
    <div v-for="item in log" :key="item.id">{{item.id}}: {{item.message}}</div>
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
