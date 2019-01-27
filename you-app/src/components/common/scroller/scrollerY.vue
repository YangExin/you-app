<template>
    <div class="scroll-wrap" ref="scrollBox" :style="wrapStyle">
        <div class="scroll-content">
            <div class="pullDown" v-if="isScroll">上一个</div>
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scroller',
    props:{
        width:Number,
        height:Number,
        top:Number,
        bottom:Number,
        scrollAction:Function
    },
    computed: {
        isScroll(){
            if(this.scrollAction){
                return true;
            }else{
                return false;
            }
        },
        wrapStyle(){
            if(this.top && this.bottom){
                return {
                    position:'absolute',
                    top:this.top + 'px',
                    bottom:this.bottom + 'px',
                }
                }else{
                    return {
                        width : this.width + 'px',
                        height : this.height +'px'
                }
                
            }
            
        }
    },
    methods:{
        scrollto(y,time){
            this.myscroll.scrollTo(0,y,time);
        }
    },
    mounted() {
        this.myscroll = new BScroll(this.$refs.scrollBox,{
            probeType: 3,
            click:true,
            startY:-50
        });
        this.myscroll.on('beforeScrollStart',()=>{
            this.myscroll.refresh();
        })

        if(this.scrollAction){
            this.myscroll.on('scrollEnd',()=>{
                // console.log(this.myscroll.y);
                let y = this.myscroll.y;
                if(y>-50 && y<-15){
                    this.myscroll.scrollTo(0,-50,200);
                }else if(y>=-15){
                    this.scrollAction();
                    this.myscroll.scrollTo(0,-50,200);
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .scroll-wrap{
        overflow: hidden;
        width:100%;
        left: 0;
        .pullDown{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
    }
</style>

