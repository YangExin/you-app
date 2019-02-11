import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './components/index'
import VueCookie from 'vue-cookie'
// var Vue = require('vue');
// var VueCookie = require('vue-cookie');


Vue.config.productionTip = false
Vue.use(common);
Vue.use(VueCookie);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')