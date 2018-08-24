<template>
  <div id="app" class="hero is-fullheight" style="position:relative;">
    <transition name="fadeLeft" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
#app {
  overflow: hidden;
}
.section {
  padding: 2rem 1.15rem;
}
.size-up {
  flex-grow: 2;
}
.box {
  padding: 1.25rem 1.25rem 0rem 1.25rem;
}
.box:not(:last-child) {
  margin-bottom: 0px;
}
.bottom {
  position: absolute;
  bottom: 0;
  margin: 0px !important;
  width: 100%;
}
.overlay-style {
  height: 100vh;
  padding-top:0px;
  background: rgba(5,5,5,.9);
  display:flex;
  align-items:center;
  justify-content: center;
  z-index:50;
}
</style>
