<template>
    <div class="adress">
        <div class="header border-bottom">
            <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <h3>收货地址</h3>
            <div class="add">
                <i @click="add">添加</i>
            </div>
        </div>
        <div class="addresscontent">
            <Addresslist v-for="item in addresslist" :key="item.id" :address="item"/>
        </div>
    </div>
</template>

<script>
import {postUserAddress} from '../../services/mineServices.js'
import Addresslist from '../../components/mine/addresslist'
export default {
    data(){
        return {
            addresslist:[]
        }
    },
    components:{
        Addresslist
    },
    mounted(){
        let id = this.$cookie.get('username');
        postUserAddress(id).then(data=>{
            this.addresslist = data.data;
            // console.log(this.addresslist)
        })
    },
    methods:{
        back(){
            this.$router.back();
        },
        add(){
            console.log('添加地址')
        }
    }
}
</script>

<style lang="scss" scoped>
    .adress{
        width: 100%;
        height: 100%;
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
            .add{
                font-size: 0.2rem;
                line-height: 0.44rem;
            }
        }
        .addresscontent{
            width: 100%;
            position: absolute;
            top: 0.44rem;
            bottom: 0;
            left: 0;
            background-color: #f9f9f9;
            padding: 0.125rem;
            box-sizing: border-box;
        }
    }
</style>

