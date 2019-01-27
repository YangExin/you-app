import { FetchGet, FetchPost } from '../fetch/index'
import Tabs from '../components/common/tab-bar/Tabs.vue'
import Tab from '../components/common/tab-bar/Tab.vue'
import ScrollerY from '../components/common/scroller/scrollerY.vue'

export default {
    install(Vue) {
        Vue.component(Tabs.name, Tabs);
        Vue.component(Tab.name, Tab);
        Vue.component(ScrollerY.name, ScrollerY);
        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}