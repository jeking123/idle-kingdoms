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
                <div v-for="type in this.$store.state.popButton" class="button" :key="type" @click="citizenToggle = !citizenToggle">{{type.name}}</div>
            </div>
            <div class="columns is-mobile is-multiline" v-for="type in this.$store.state.population" :key="type" :class="{citizenToggle: citizenToggle}">
                <div class="column columns is-mobile is-12 is-multiline" v-for="unit in type" :key="unit">
                    <div class="column is-narrow is-size-1">-</div>
                    <div class="column is-expanded">{{unit.name}}</div>
                    <div class="column is-narrow is-size-1">+</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            state: {
                citizenToggle: false
            }
        }
    },
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
.citizenToggle {
    display: none;
}
</style>
