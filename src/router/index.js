import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import GridSystem from '@/views/GridSystem'
import MainPage from '@/views/MainPage'
import Table from '@/views/Table'
import MyPage from '@/views/MyPage'

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
    {
        path: '/main-page',
        name: 'MainPage',
        component : MainPage
    },
    {
        path: '/table',
        name: 'Table',
        component : Table
    },
    {
        path: '/myPage',
        name: 'MyPage',
        component : MyPage
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router