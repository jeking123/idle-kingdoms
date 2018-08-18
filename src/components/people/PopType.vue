<template>
    <div>
        <div class="column columns is-mobile is-12 is-multiline is-marginless-bot"
                v-for="unit in type"
                :key="unit">
                    <div class="column is-narrow is-size-4 is-paddingless">-</div>
                    <div class="column is-expanded is-paddingless">{{unit.name}}</div>
                    <div class="column is-narrow is-size-4 is-paddingless">+</div>
                </div>
    </div>
</template>

<script>
export default {
  props: ['type']
}
</script>
