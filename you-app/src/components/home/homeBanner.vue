<template>
    <div class="banner">
        <Swiper ref="swiper" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
            <Slide @click="clickMe" v-for="(tag,key) in list" :key="key">
                <img :src="tag.img" />
            </Slide>
        </Swiper>
   </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
    data() {
        return {
            list: [
                { img: '../../../public/img/banner.jfif' },
                { img: '../../../public/img/banner1.jpg' },
                { img: '../../../public/img/banner3.jpg' },
                { img: '../../../public/img/banner4.jpg' },
                { img: '../../../public/img/banner5.jpg' },
            ]
        }
    },
    components: {
                Swiper,
                Slide
            },
    methods: {
        clickMe (index){
                console.log(index)
        },
        preve(){
            this.$refs.swiper.prevSlide();
        },
        next(){
            this.$refs.swiper.nextSlide();
        }         
    }

}
</script>

<style lang="scss" scoped>
img {
      width: 3.45rem;
      height: 4.475rem;
}
</style>

