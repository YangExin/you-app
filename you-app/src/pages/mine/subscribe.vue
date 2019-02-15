<template>
    <div class="subscribe">
        <div class="head border-bottom">
            <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <h3>订阅</h3>
        </div>
        <div class="content">
            <template v-if="isShow">
                <sublist v-for="item in list" :key="item.name" :info="item"></sublist>
            </template>
            <!-- <sublist v-for="item in list" :key="item.name" :info="item" v-if=isShow></sublist> -->
        </div>
    </div>
</template>

<script>
import sublist from '../../components/mine/subscribeList'
import {postUserSubscribe2,postUserSubscribe} from '../../services/mineServices.js'
export default {
    data(){
        return{
            list:[]
        }
    },
    components:{
        sublist
    },
    methods:{
        back(){
            this.$router.back();
        }
    },
    computed:{
        isShow(){
            if(this.list.length === 0){
                return false
            }else{
                return true
            }
        }
    },
    created(){
        let userId = this.$cookie.get('username');
        postUserSubscribe(userId).then(data=>{
            // console.log(data);
            if(data.status === 0){
                data.data.subscribeId.map(({subscribeId})=>{
                    postUserSubscribe2(subscribeId).then(result=>{
                        // console.log(result.data[0]);
                        this.list.push(result.data[0]);
                    })
                })
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .subscribe{
        width: 100%;
        display: flex;
        flex-direction: column;
        .head{
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
        .content{
            width: 100%;
            position: absolute;
            top: 0.44rem;
            bottom: 0;
            left: 0;
            background-color: #ccc;
        }
    }
</style>

