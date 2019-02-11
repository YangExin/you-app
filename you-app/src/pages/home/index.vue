<template>
    <div class="home" id="app">
        <home-header/>
        <home-banner/>
    </div>
</template>

<script>
import homeHeader from "../../components/home/homeHeader"
import homeBanner from "../../components/home/homeBanner"
export default {
    components:{
        homeHeader,
        homeBanner
    }
}
</script>

<style lang="scss" scoped>
    .home{
        width: 100%;
        // position: absolute;
        // top: 0;
        // left: 0;
        // bottom: 0.49rem;
        h1{
            font-size: 0.2rem;
        }
    }
</style>

