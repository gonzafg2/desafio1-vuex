import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        }     
    ]
})