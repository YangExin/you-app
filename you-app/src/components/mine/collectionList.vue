<template>
    <!-- <div class="collectionlist"> -->
        <li>
            <img :src="info.img" alt="暂无">
            <span><i></i>{{info.name}}</span>
            <p>{{info.introduce}}</p>
            <div>${{info.price}}<i class="iconfont icon-xingxing"></i></div>
        </li>
    <!-- </div> -->
</template>

<script>
export default {
    props:['info']
}
</script>

<style lang="scss" scoped>
        li{
            display: flex;
            // flex-wrap: nowrap;
            flex-direction: column;
            width: 45%;
            border-radius: 10px;
            background-color: #fff;
            margin: 0.1rem 0;
            // align-items: center;
            padding: 0.1rem;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 70%;
                margin: 0 auto;
            }
            span{
                i{
                    display: inline-block;
                    width: 0.1rem;
                    height: 0.1rem;
                    border-radius: 50%;
                    background-color: #fac632;
                    margin-right: 0.1rem;
                }
                display: block;
                // padding-left: 0.1rem;
                font-size: 0.18rem;
                // line-height: 0.26rem;
                margin-top: 0.08rem;
            }
            p{
                color: #919191;
                font-size: 0.14rem;
                line-height: 0.16rem;
            }
            div{
                margin-top: 0.05rem;
                font-size: 0.18rem;
                i{
                    color: #fac632;
                    float: right;
                }
            }
        }
</style>

