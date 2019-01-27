import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './components/index'


Vue.config.productionTip = false
Vue.use(common);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')