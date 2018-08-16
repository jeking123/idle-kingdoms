<template>
    <div>
        <div>
            <div class="columns is-mobile is-margineless-bot">
                <div class="column is-paddingless-horizontal">Current Pop: {{this.$store.state.people[0].quantity}}</div>
                <div class="column is-paddingless-horizontal">Max Pop: {{this.$store.state.people[0].max}}</div>
            </div>
            <progress class="progress" :value="this.$store.state.people[0].quantity" :max="this.$store.state.people[0].max"></progress>
            <div class="button is-fullwidth" @click="recruitPop(10)"> Accept People to Kingdom | <i class="mdi mdi-barley"></i> 10</div>
        </div>
        <div>
            <div>
                <div v-for="popB in this.$store.state.popButton" class="button" :key="popB" @click="citizenToggle = !citizenToggle">{{popB.name}}</div>
            </div>
            <div class="columns is-mobile is-multiline is-marginless-bot" v-show="citizenToggle">
                <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold"
                style="align-items:center;"
                v-for="unit in this.$store.state.population[0]" 
                :key="unit">
                    <div class="column is-narrow is-size-3 is-paddingless">-</div>
                    <div class="column is-expanded is-paddingless">{{unit.name}}</div>
                    <div class="column is-narrow is-size-3 is-paddingless">+</div>
                </div>
            </div>
            <div class="columns is-mobile is-multiline is-marginless-bot" v-show="!citizenToggle">
                <div class="column columns is-mobile is-12 is-multiline is-marginless is-paddingless-bot has-text-centered has-text-weight-bold" 
                style="align-items:center;" 
                v-for="specialty in this.$store.state.population[1]" 
                :key="specialty">
                    <div class="column is-narrow is-size-3 is-paddingless">-</div>
                    <div class="column is-expanded is-paddingless">{{specialty.name}}</div>
                    <div class="column is-narrow is-size-3 is-paddingless">+</div>
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
            citizenToggle: true
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
.is-paddingless-bot {
    margin-bottom: 0px;
}
.is-paddingless-horizontal {
    padding-top: 0px;
    padding-bottom: 0px;
}
.citizenToggle {
    display: none;
}
</style>
