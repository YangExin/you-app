<template>
    <div class="official">
        <div class="head border-bottom">
             <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <h3>YOU官方运营号</h3>
        </div>
        <scroll :top="44" :bottom="0" class="scroll">
            <template v-if="isShow">
                <official v-for="item in officiallist" :key="item._id" :info="item"></official>
            </template>
        </scroll>
    </div>
</template>

<script>
import scroll from '../../components/common/scroller/scrollerY'
import {getOfficialList} from '../../services/mineServices.js'
import official from '../../components/mine/officiallist'
export default {
    data(){
        return{
            officiallist:[]
        }
    },
    components:{
        scroll,
        official
    },
    methods:{
        back(){
            this.$router.back();
        }
    },
    computed:{
        isShow(){
            if(this.officiallist.length === 0){
                return false;
            }else{
                return true;
            }
        }
    },
    created(){
        getOfficialList().then(data=>{
            // console.log(data);
            this.officiallist = data.result;
            this.officiallist.map( e => {e.json=JSON.stringify(e);});
            console.log(this.officiallist);
        })
    }
}
</script>

<style lang="scss" scoped>
    .official{
        width: 100%;
        height: 100%;
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
        .scroll{
        }
    }
</style>

