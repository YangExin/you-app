export default {
    path: '/mine',
    component: () =>
        import ('../pages/mine/index.vue'),
    children: [{
        path: 'collection',
        component: () =>
            import ('../pages/mine/collection.vue')
    }]

}