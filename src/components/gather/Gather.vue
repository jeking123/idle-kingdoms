<template>
    <div>
        <h1>gather resources</h1>
        <div>
            <button class="button" @click="gatherRec({type: 0, amount: 1})"><i class="mdi mdi-barley"></i> food</button>
            <button class="button" @click="gatherRec({type: 1, amount: 1})"><i class="mdi mdi-pine-tree"></i>wood</button>
            <button class="button" @click="gatherRec({type: 2, amount: 1})"><i class="mdi mdi-cloud"></i>stone</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'gatherRec'
    ])
  }
}
</script>
