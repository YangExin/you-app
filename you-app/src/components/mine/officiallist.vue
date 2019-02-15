<template>
    <a class="border-bottom" @click="session">
        <span class="iconfont icon-xingxing"></span>
        <i>{{info.title}}</i>
    </a>
</template>

<script>
export default {
    props:['info'],
    methods:{
        session(){
            // sessionStorage.setItem('official', JSON.stringify(this.$props.info));
            // console.log(1);
            let msg = JSON.stringify(this.$props.info);
            window.localStorage.setItem('msg', msg);
            this.$router.push("/you/mine/subscribe/official/content")
        }
    },
    mounted(){
        // console.log(window.localStorage.getItem('msg'));
    }
}
</script>

<style lang="scss" scoped>
    a{
        display: block;
        text-decoration: none;
        color: #999;
        height: 0.5rem;
        text-align: center;
        line-height: 0.3rem;
        padding: 0.1rem 0.2rem;
        box-sizing: border-box;
        span{
            float: left;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            background-color: #000;
            color: yellow;
            line-height: 0.3rem;
            margin-right: 0.1rem;
            font-size: 0.2rem;
        }
        i{
            float: left;
            font-size: 0.17rem;
        }
    }
</style>

