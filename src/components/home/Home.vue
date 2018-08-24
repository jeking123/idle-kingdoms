<template>
  <section class="section container">
    <div class="columns is-centered is-fullheight" style="justify-content: center;">
      <div class="column is-half has-text-centered">
        <p class="subtitle"> Welcome to</p>
        <h1 class="title">Idle Kingdoms</h1>
        <div class="content">
          <p>In Idle Kingdoms you can gather resources. Spend resources to gain followers to your kingdom, create buildings, purchase Upgrades and assign workers to gather resources.</p>
          <p>This game is in early development with only the basic shell and some game logic currently working.</p>
          <p>Built with <a class="has-text-primary has-text-weight-bold" href="https://vuejs.org" target="_blank">Vue.js</a> a Javascript Framework</p>
        </div>
        <button class="button" @click="goToGameStart">Start Game</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToGameStart () {
      this.$router.push('/gather')
    }
  }
}
</script>
