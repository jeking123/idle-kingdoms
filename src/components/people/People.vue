<template>
    <div>
        <div>
            <div class="columns is-mobile is-margineless-bot">
                <div class="column">Max Population: {{this.$store.state.people[0].max}}</div>
                <div class="column">Current Population: {{this.$store.state.people[0].quantity}}</div>
            </div>
            <progress class="progress" :value="this.$store.state.people[0].quantity" :max="this.$store.state.people[0].max"></progress>
            <p>Hiring people costs 10 fruit</p>
            <div class="button" @click="recruitPop(10)"> Accept People to Kingdom </div>
        </div>
        <div>
            <div>
                <div v-for="type in this.$store.state.popButton" class="button" :key="type">{{type.name}}</div>
            </div>
            <div v-for="type in this.$store.state.population" class="" :key="type">
                <div v-for="unit in type" :key="unit">unit</div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([
            'recruitPop'
        ])
    }
}
</script>

<style scoped>
.is-margineless-bot {
    margin-bottom: 0px;
}
</style>
