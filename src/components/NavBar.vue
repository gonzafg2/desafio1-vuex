<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link :to="{ name: 'Inicio' }" class="navbar-brand">{{
      this.$store.state.titulo
    }}</router-link>
    <span class="navbar-brand lead font-italic">{{ this.$store.state.subtitulo }}</span>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Inicio' }" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Busquedas' }" class="nav-link">Búsquedas</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Ventas' }" class="nav-link">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Total' }" class="nav-link">Total</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-link .router-link-exact-active {
  color: #fff;
}
</style>