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
        {title:'首页',path:'/home',index:1,fontClass:'iconfont icon-xiazai45'},
        {title:'分类',path:'/category',index:0,fontClass:'iconfont icon-fenlei'},
        {title:'发现',path:'/discover',index:2,fontClass:'iconfont icon-faxian'},
        {title:'我的',path:'/mine',index:3,fontClass:'iconfont icon-wode'}
      ]
    }
  }
}
</script>

<style>

</style>