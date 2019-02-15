<template>
    <router-link class="list" :to="info.path">
        <div class="icon">
            <i :class=info.fontClass></i>
        </div>
        <div class="borderBox border-bottom">
            <div class="text">
            {{info.title}}  
            </div>
            <div class="icon">
                <i :class=info.right></i>
            </div>       
        </div>
    </router-link>
</template>

<script>
export default {
    props:['info']
}
</script>

<style lang="scss" scoped>
    .list{
        width: 100%;
        height: 0.5rem;
        background-color: #fff;
        line-height: 0.5rem;
        padding-left: 0.075rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        display: flex;
        color: #000;
        .icon{
            width: 0.49rem;
            height: 100%;
            i{
                font-size: 0.28rem;
                text-align: center;
                line-height: 0.5rem;
            }
            .icon-iconfontjiantou4{
                font-size: 0.18rem;
            }
        }
        .text{
            flex: 1;
            text-decoration: none;
        }
        .borderBox{
            display: flex;
            flex: 1;
            // border-bottom: 1px solid #000;
        }
    }
</style>

