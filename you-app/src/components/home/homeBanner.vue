<template>
    <div class="swiper-wrap">
        <div class="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="swiper">
                    <img src="/img/banner.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="swiper">
                    <img src="/img/banner1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="swiper">
                    <img src="/img/banner3.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="swiper">
                    <img src="/img/banner4.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="swiper">
                    <img src="/img/banner5.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
}
</script>

<style <style lang="scss" scoped>
    .swiper-wrap{
        width: 100%;
        height: 4.5rem;
        padding: .16rem .15rem;
        .swiper{
            width: 3.45rem;
            background-color: pink;
            height: 4.475rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
// >
//     .swiper{
//         width: 100%;
//         background-color: pink;
//         height: 1.8rem;
//     }
// </style>


