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
            path: '/you',//主路由
            component: () =>
                import ('../components/common/tab-bar/TT.vue'),
            children: [{
                    path: 'category',//分类页面
                    component: () =>
                        import ('../pages/category/index.vue')
                },
                {
                    path: 'discover',//发现页面
                    component: () =>
                        import ('../pages/discover/index.vue')
                },
                {
                    path: 'home',//首页
                    component: () =>
                        import ('../pages/home/index.vue')
                },
                {
                    path: 'mine',//个人中心
                    component: () =>
                        import ('../pages/mine/index.vue'),
                },
                {
                    path: 'mine/collection',//收藏页面
                    component: () =>
                        import ('../pages/mine/collection.vue')
                }
            ]
        },
        {
            path: '/',
            redirect: '/you/home'
        },
        register,
        login,
        {
            path: '/you/mine/subscribe',//订阅首页
            component: () =>
                import ('../pages/mine/subscribe.vue')
        },
        {
            path: '/you/mine/subscribe/official',//公众号列表页面
            component: () =>
                import ('../pages/mine/subscribeOfficial.vue')
        },
        {
            path:'/you/mine/subscribe/official/content',//公众号详情页面
            component:()=>
            import ('../components/mine/officialcontent.vue'),
            // props:{ default: true, sidebar: false }
        },
        {
            path: '/you/mine/subscribe/free',
            component: () =>
                import ('../pages/mine/subscribeFree.vue')
        },
        {
            path: '/you/mine/install',//设置主页
            component: () =>
                import ('../pages/mine/install.vue')
        },
        {
            path: '/you/mine/cartbag',//购物袋页面
            component: () =>
                import ('../components/common/cartbag/cartbag.vue')
        },
        {
            path: '/you/mine/cart',//购物车页面
            component: () =>
                import ('../pages/mine/cart.vue')
        },
        {
            path:'/you/mine/service',//客服页面
            component:()=>
                import('../pages/mine/service.vue')
        },
        {
            path:'/you/mine/vip',//会员页面
            component:()=>
                import('../pages/mine/vip.vue')
        },
        {
            path:'/you/mine/recharge',//充值页面
            component:()=>
                import('../pages/mine/recharge.vue')
        },
        {
            path:'/you/mine/install/address',//收货地址列表页面
            component:()=>
                import('../pages/mine/address.vue')
        }
    ]
})