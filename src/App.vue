<template>
  <div id="app">
    <NavBar />
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: "App",
  components: { NavBar }
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
