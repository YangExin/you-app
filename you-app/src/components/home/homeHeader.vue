<template>
    <div id="app" class="home">
        <div class="header">
            <div class="header-wrap">
                <i class="iconfont icon-sousuo"></i>
                <h3>YOU</h3>
                <i class="iconfont icon-shangpingouwudai2"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .header{
        height: .44rem;
        background: #fff;
        width: 100%;
        .header-wrap{
            display: flex;
            height: 0.44rem;
            i{
                text-align: center;
                font-size: 0.24rem;
                line-height: 0.44rem;
                width: 13%;
            }
            h3{
                height: 0.44rem;
                font-size: 0.2rem;
                width: 74%;
                text-align: center;
                line-height: 0.44rem;
            }
        }
    }
</style>

