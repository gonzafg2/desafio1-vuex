<template>
  <div class="my-5 d-flex flex-column align-items-center justify-content-center">
    <div class="form-group">
      <label class="text-center w-100 mb-4">Encuentre su juego aquí</label>
      <input type="text" v-model="codigo"
        class="form-control" placeholder="Código del juego...">
      <small class="form-text text-muted">Total de Juegos: <strong>{{ juegosTotales }}</strong></small>
      <small class="form-text text-muted">Stock Total: <strong>{{ totalStock }}</strong></small>
    </div>
    <ListadoBusqueda :codigo="this.codigo" class="my-5" />
  </div>
</template>

<script>
import ListadoBusqueda from "./../components/ListadoBusqueda";

export default {
  name: "Busquedas",
  components: {
    ListadoBusqueda,
  },
  data() {
    return {
      codigo: ""
    }
  },
  computed: {
    juegosTotales() {
      return this.$store.getters.juegosTotal;
    },
    totalStock() {
      return this.$store.getters.stockTotales;
    },
    // buscador() {
    //   return this.$store.getters.juegoBuscado(this.codigo);
    // }
  },
};
</script>
