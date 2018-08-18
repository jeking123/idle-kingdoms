<template>
    <div>
        <h1>upgrade</h1>
        <div>
            <button class="button" @click="buildingUpgrade({food: 1, wood: 1, stone: 1})">Unlock Buildings</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'buildingUpgrade'
    ])
  }
}
</script>
