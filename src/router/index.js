import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import GridSystem from '@/views/GridSystem'
Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component : Login
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component : GridSystem
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router