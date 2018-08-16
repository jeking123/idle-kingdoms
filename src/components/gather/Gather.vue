<template>
    <div>
        <h1>gather resources</h1>
        <div>
            <button class="button" @click="gatherRec('food')"><i class="mdi mdi-barley"></i> food</button>
            <button class="button" @click="gatherRec('wood')"><i class="mdi mdi-pine-tree"></i>wood</button>
            <button class="button" @click="gatherRec('stone')"><i class="mdi mdi-cloud"></i>stone</button>
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
