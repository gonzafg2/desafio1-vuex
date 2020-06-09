<template>
  <table class="container table table-dark">
    <thead>
      <tr>
        <th class="text-center" scope="col" v-for="(item, index) in juegosPropiedades" :key="index">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody style="color: #000">
        <tr v-for="(item, index) in buscador" :key="index">
            <td class="text-center" :style="{'backgroundColor': item.color}">{{ item.codigo }}</td>
            <td :style="{'backgroundColor': item.color}">{{ item.nombre }}</td>
            <td class="text-center" :style="{'backgroundColor': item.color}">{{ item.stock }}</td>
            <td class="text-center" :style="{'backgroundColor': item.color}">$ {{ item.precio }}</td>
            <td class="text-center" :style="{'backgroundColor': item.color}">{{ item.color }}</td>
            <td class="text-center" :style="{'backgroundColor': item.color}">{{ item.destacado }}</td>
        </tr>

    </tbody>
  </table>
</template>

<script>
export default {
  name: "ListadoBusqueda",
  props: {
      codigo: {
          type: String
      },
  },
  computed: {
    // juegos() {
    //   return this.$store.state.juegos;
    // },
    juegosPropiedades() {
      return this.$store.state.juegosPropiedades;
    },
    buscador() {
        return this.$store.getters.juegoBuscado(this.codigo);
    }
  },
};
</script>
