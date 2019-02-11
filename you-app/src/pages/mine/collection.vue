<template>
    <div id="app" class="collection">
        <div class="header border-bottom">
            <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <h3>收藏</h3>
        </div>
        <list/>
    </div>
</template>

<script>
import list from '../../components/mine/collectionList'
export default {
    components:{
        list
    },
    methods:{
        back(){
            // console.log(this.$router.back());
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    .collection{
        width: 100%;
        display: flex;
        flex-direction: column;
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
