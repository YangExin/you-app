<template>
  <div id="app">
    <router-view/>
    <tab-bar>
      <tab-item v-for="item in tabList" :key="item.title" :info="item"></tab-item>
    </tab-bar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabList:[
        {title:'首页',path:'/you/home',index:1,fontClass:'iconfont icon-xiazai45'},
        {title:'分类',path:'/you/category',index:0,fontClass:'iconfont icon-fenlei'},
        {title:'发现',path:'/you/discover',index:2,fontClass:'iconfont icon-faxian'},
        {title:'我的',path:'/you/mine',index:3,fontClass:'iconfont icon-wode'}
      ]
    }
  },
//   computed:{
//       isPath(){
//           if(this.$route.path === '/register' || this.$route.path === '/login'){
//               return false
//           }else {
//               return true
//           }
//       }
//   }
}
</script>

<style>

</style>