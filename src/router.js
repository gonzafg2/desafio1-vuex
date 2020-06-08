import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./views/Inicio')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Inicio,
            alias: ["/home"]
        },
        {
            path: '/busquedas',
            name: 'Busquedas',
            component: () => import(/* webpackChunkName: "search" */"./views/Busquedas.vue"),
            alias: ["/busqueda", "/search"]
        },
        {
            path: '/ventas',
            name: 'Ventas',
            component: () => import(/* webpackChunkName: "sells" */"./views/Ventas.vue"),
            alias: ["/venta", "/sell", "/sells"]
        },
        {
            path: '/total',
            name: 'Total',
            component: () => import(/* webpackChunkName: "total" */"./views/Total.vue"),
            alias: ["/totales"]
        }
    ]
})