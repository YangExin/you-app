<template>
    <router-link class="subList" :to="info.path">
        <div class="img">U</div>
        <span>{{info.name}}</span>
        <i>已关注</i>
    </router-link>
</template>

<script>
export default {
    props:['info']
}
</script>

<style lang="scss" scoped>
    .subList{
        display: block;
        width: 100%;
        margin-bottom: 1px;
        background-color: #fff;
        height: 1rem;
        padding: 0.175rem;
        box-sizing: border-box;
        color: #000;
        .img{
            width: 0.625rem;
            height: 0.625rem;
            border: 1px solid #f1f1f1;
            margin-right: 0.05rem;
            float: left;
            font-size: 0.6rem;
            text-align: center;
            line-height: 0.625rem;
        }
        span{
            line-height: 0.24rem;
            font-size: 0.16rem;
            float: left;
        }
        i{
            display: inline-block;
            // width: 100%;
            height: 100%;
            float: right;
            color: #5b5b5b;
            line-height: 1.1rem;
        }
    }
</style>

