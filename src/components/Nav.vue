<template>
  <div class="tabs is-toggle is-centered is-boxed is-fullwidth is-medium">
    <ul class="">

        <router-link to="/gather" tag="li" activeClass="is-active" class="is-size-4">
            <a class="is-paddingless-hori"><span class="icon"><i class="mdi mdi-donkey" aria-hidden="true"></i></span></a>
        </router-link>
        <router-link to="/people" tag="li" activeClass="is-active" class="is-size-4">
            <a class="is-paddingless-hori"><span class="icon"><i class="mdi mdi-face" aria-hidden="true"></i></span></a>
        </router-link>
        <router-link to="/build" tag="li" activeClass="is-active" class="is-size-4">
            <a class="is-paddingless-hori"><span class="icon"><i class="mdi mdi-wall" aria-hidden="true"></i></span></a>
        </router-link>
        <router-link to="/upgrade" tag="li" activeClass="is-active" class="is-size-4">
            <a class="is-paddingless-hori"><span class="icon"><i class="mdi mdi-home-plus" aria-hidden="true"></i></span></a>
        </router-link>
    </ul>
  </div>
</template>

<style scoped>
  .is-paddingless-hori {
    padding: .5em 0px;
  }
  .tabs li {
    border-bottom: .25pt solid #dbdbdb;
  }
  .is-active {
    height: 70px;
    font-size: 2.1em !important;
  }
</style>
