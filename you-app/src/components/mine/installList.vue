<template>
    <router-link class="installlist border-bottom" :to="data.path">
        <div class="borderBox">
            <div class="text">
            {{data.name}}  
            </div>
            <div class="icon">
                <i :class=data.right></i>
            </div>       
        </div>     
    </router-link>
</template>

<script>
export default {
    props:['data']
}
</script>

<style lang="scss" scoped>
    .installlist{
        width: 100%;
        height: 0.5rem;
        background-color: #fff;
        line-height: 0.5rem;
        padding-left: 0.075rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        display: flex;
        color: #000;
            i{
                font-size: 0.28rem;
                text-align: center;
                line-height: 0.5rem;
                padding-right: 0.1rem;
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
</style>

