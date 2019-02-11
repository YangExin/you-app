<template>
    <div class="mine" id="app">
        <!-- <router-view></router-view> -->
        <div class="header border-bottom">
            <div class="headerInner">
                <i class="iconfont icon-sousuo"></i>
                <h3>个人中心</h3>
                <i class="iconfont icon-shangpingouwudai2"></i>
            </div>
        </div>
        <div>
            <user></user>
        </div>
        <div class="content">
            <list v-for="item in listmsg" :key="item.title" :info=item></list>
        </div>
    </div> 
     
</template>

<script>
import user from '../../components/mine/user'
import list from '../../components/mine/list'
export default {
    components:{
        user,
        list
    },
    data(){
        return{
            listmsg:[
                {title:'订单',path:'/cart',index:1,fontClass:'iconfont icon-dingdan',right:'iconfont icon-iconfontjiantou4'},
                {title:'收藏',path:'/you/mine/collection',index:0,fontClass:'iconfont icon-aixin',right:'iconfont icon-iconfontjiantou4'},
                {title:'订阅',path:'/mine/subscribe',index:2,fontClass:'iconfont icon-dingyue',right:'iconfont icon-iconfontjiantou4'},
                {title:'设置',path:'/mine/install',index:3,fontClass:'iconfont icon-shezhi',right:'iconfont icon-iconfontjiantou4'},
                {title:'客服',path:'/mine/service',index:3,fontClass:'iconfont icon-kefu',right:'iconfont icon-iconfontjiantou4'},
                {title:'会员中心',path:'/mine/vip',index:3,fontClass:'iconfont icon-huiyuan',right:'iconfont icon-iconfontjiantou4'},
                {title:'余额充值',path:'/mine/recharge',index:3,fontClass:'iconfont icon-chongzhi',right:'iconfont icon-iconfontjiantou4'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .mine{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 0.44rem;
        background-color: #fff;
        // position: absolute;
        // top: 0;
        // left: 0;
        .headerInner{
            display: flex;
            height: 0.44rem;
            // justify-content: space-between;
            i{
            text-align: center;
            font-size: 0.24rem;
            line-height: 0.44rem;
            width: 13%;
            }
            h3{
                height: 0.44rem;
                font-size: 0.2rem;
                width: 74%;
                text-align: center;
                line-height: 0.44rem;
                margin: 0;
            }  
        }
    }
    .content{
        width: 100%;
        // flex: 1;
        // position: absolute;
        // bottom:0.49rem;
        // left:0;
    }
</style>