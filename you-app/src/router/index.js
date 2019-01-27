import Vue from 'vue'
import Router from 'vue-router'
import Home from './homeRouter'
import Cate from './categoryRouter'
import Dis from './discoverRouter'
import Mine from './mineRouter'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        Home,
        Cate,
        Dis,
        Mine
    ]
})