import Vue from 'vue'
import Router from 'vue-router'
// import Home from './homeRouter'
// import Cate from './categoryRouter'
// import Dis from './discoverRouter'
// import Mine from './mineRouter'
import register from './register'
import login from './login'
// import you from './tab'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/you',
            component: () =>
                import ('../components/common/tab-bar/TT.vue'),
            children: [{
                    path: 'category',
                    component: () =>
                        import ('../pages/category/index.vue')
                },
                {
                    path: 'discover',
                    component: () =>
                        import ('../pages/discover/index.vue')
                },
                {
                    path: 'home',
                    component: () =>
                        import ('../pages/home/index.vue')
                },
                {
                    path: 'mine',
                    component: () =>
                        import ('../pages/mine/index.vue'),
                },
                {
                    path: 'mine/collection',
                    component: () =>
                        import ('../pages/mine/collection.vue')
                }
            ]
        },
        {
            path: '/',
            redirect: '/you/home'
        },
        // Home,
        // Cate,
        // Dis,
        // Mine,
        register,
        login,
        // you
    ]
})