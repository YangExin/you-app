<template>
<router-link class="tab border-top" :to="info.path" :class="{active:color}">
    <i :class="info.fontClass"></i>
</router-link>
</template>

<script>
export default {
    name:'tab-item',
    props: ['info'],
    computed: {
        color(){
            let active = false;//默认先给所有class设置默认不存在
            if(this.$route.path.indexOf(this.info.path)!=-1){//判断路由路径是不是一致
                active = true;//如果一致就变成rue
            }
            return active;//返回这个结果，（把这个计算属性，放在动态类里，上面，样式里提前写好那个红色字体的类样式）
        }
    }
}
</script>

<style>
/* .tab:active{
    color: #b4282d!important;
} */
.active i{
    color: #000!important;
}
.tab{
    text-align: center;
    flex: 1;
    list-style: none;
    /* line-height: 12px; */
    color: #000;
    background-color: #fff;
}
.tab i{
    width: 100%;
    height: 100%;
    display: block;
    font-size: 34px;
    color:#999;
    line-height: 49px;
}
</style>
