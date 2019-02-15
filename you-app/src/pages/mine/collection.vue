<template>
    <div class="collection">
        <div class="header border-bottom">
            <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <h3>收藏</h3>
        </div>
        <scroller :top='44' :bottom='49' class="scroll">
            <ul>
                <list v-for="item in catelist" :key="item.id" :info="item" class="list"/>
            </ul>            
        </scroller>
        
    </div>
</template>

<script>
import list from '../../components/mine/collectionList'
import {postUserCateList,postUserCateList2} from '../../services/mineServices.js'
import scroller from '../../components/common/scroller/scrollerY'
export default {
    data(){
        return{
            catelist:[]
        }
    },
    components:{
        list,
        scroller
    },
    methods:{
        back(){
            // console.log(this.$router.back());
            this.$router.back();
        }
    },
    created(){
        let userId = this.$cookie.get('username');
        // console.log(userId);
        postUserCateList(userId).then(data=>{
            // console.log(data);
            if(data.status === 0){
                data.data.catelistId.map(({catelistId})=>{
                    postUserCateList2(catelistId).then(result=>{
                        // console.log(result.data[0]);
                        this.catelist.push(result.data[0]);
                    })
                })
                // console.log(this.catelist);
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .collection{
        width: 100%;
        display: flex;
        flex-direction: column;
        // overflow: hidden;
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
        .scroll{
                background-color: #eee;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                // background-color: #ccc;
            }
        }
    }
</style>
