<template>
    <div class="install">
        <div class="header border-bottom">
            <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <h3>设置</h3>
        </div>
        <div class="title">
            <div class="uu">
                U
            </div>
        </div>
        <div class="installlist">
            <Install v-for="item in list" :key="item.name" :data="item"/>
        </div>
    </div>
</template>

<script>
import Install from '../../components/mine/installList'
export default {
    components:{
        Install
    },
    data(){
        return{
            list:[
                {name:'收货地址',path:'/you/mine/install/address',right:'iconfont icon-iconfontjiantou4'},
                {name:'登陆密码',path:'',right:'iconfont icon-iconfontjiantou4'},
                {name:'安全退出',path:'',right:'iconfont icon-iconfontjiantou4'},
                {name:'意见反馈',path:'',right:'iconfont icon-iconfontjiantou4'},
                {name:'清除缓存',path:'',right:'iconfont icon-iconfontjiantou4'},
                {name:'给个好评',path:'',right:'iconfont icon-iconfontjiantou4'},
            ]
        }
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    .install{
        width: 100%;
        height: 100%;
        background-color: #eee;
        .title{
            width: 100%;
            height: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .uu{
                width: 0.8rem;
                height: 0.8rem;
                background-color: #fff;
                border-radius: 30%;
                // margin: 0 auto;
                line-height: 0.8rem;
                text-align: center;
                font-size: 0.8rem;
            }
        }
        .header{
            width: 100%;
            height: 0.44rem;
            background-color: #fff;
            display: flex;
            .back{
                width: 13%;
                height: 100%;
                text-align: center;
              i{
                text-align: center;
                font-size: 0.24rem;
                line-height: 0.44rem;
                width: 100%;
                }  
            }
            h3{
                height: 0.44rem;;
                font-size: 0.2rem;
                width: 74%;
                text-align: center;
                line-height: 0.44rem;
                margin: 0;
            }  
        }
    }
</style>

