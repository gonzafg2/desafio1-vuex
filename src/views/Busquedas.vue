<template>
  <div class="my-5 d-flex flex-column align-items-center justify-content-center">
    <div class="form-group">
      <label class="text-center w-100 mb-4">Encuentre su juego aquí</label>
      <input type="text"
        class="form-control" placeholder="Código del juego...">
      <small class="form-text text-muted">Total de Juegos: <strong>{{ juegosTotales }}</strong></small>
      <small class="form-text text-muted">Stock Total: <strong>{{ totalStock }}</strong></small>
    </div>
    <ListadoBusqueda class="my-5" />
  </div>
</template>

<script>
import ListadoBusqueda from "./../components/ListadoBusqueda";

export default {
  name: "Busquedas",
  components: {
    ListadoBusqueda,
  },
  computed: {
    juegosTotales() {
      return this.$store.state.juegos.length;
    },
    totalStock() {
      let stockTotal = null;
      for (let juego of this.$store.state.juegos) {
        stockTotal += juego.stock;
      }
      return stockTotal;
    }
  },
};
</script>
