export default {
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
            children: [{
                path: 'collection',
                component: () =>
                    import ('../pages/mine/collection.vue')
            }]
        }
    ]
}