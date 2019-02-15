<template>
    <div class="officialcontent">
        <header class="border-bottom">
            <div class="back">
                <i class="iconfont icon-zuojiantou" @click="back"></i>
            </div>
            <div class="share">
                <i class="iconfont icon-fenxiang" @click="share"></i>
            </div>
        </header>
        <div class="content">
            <h2>{{thisMsg.title}}</h2>
            <span class="date">
                {{thisMsg.date}}
            </span>
            <p class="txt1">{{thisMsg.txt1}}</p>
            <img :src="thisMsg.img1" alt="">
            <h3>{{thisMsg.t1}}</h3>
            <p>{{thisMsg.txt2}}</p>
            <img :src="thisMsg.img2" alt="">
            <h3>{{thisMsg.t2}}</h3>
            <p>{{thisMsg.txt3}}</p>
            <img :src="thisMsg.img3" alt="">
            <span class="foottxt">时尚 穿搭 短靴</span>
            <span class="foottxt">文章转自YOUYOU微信公众号</span>
        </div>
        <!-- {{Changeinfo}} -->
    </div>
</template>

<script>
export default {
    // props:['list'],
    data(){
        return{
            thisMsg:[]
        }
    },
    methods:{
        back(){
            // console.log("localStorage.clear()")
            window.localStorage.clear()
            this.$router.back();
        },
        share(){

        }
    },
    mounted(){
        // var official = sessionStorage.getItem('official')
        var official = window.localStorage.getItem('msg');
        // console.log(JSON.parse(official));
        this.thisMsg = JSON.parse(official);
        
    }
}
</script>

<style lang="scss" scoped>
    .officialcontent{
        header{
            width: 100%;
            height: 0.44rem;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            div{
                width: 13%;
                i{
                    text-align: center;
                    font-size: 0.24rem;
                    line-height: 0.44rem;
                    width: 100%;
                }
            }
        }
        .content{
            background-color: #ccc;
            h2{
                font-size: 0.28rem;
                text-align: center;
            }
            .date{
                display: block;
                text-align: center;
                font-size: 0.16rem;
                line-height: 0.2rem;
            }
            h3{
                text-align: center;
                font-size: 0.22rem;
                margin-top: 0.3rem;
            }
            p{
                padding: 0 0.2rem;
                margin: 0.3rem 0;
                font-size: 0.16rem;
            }
            img{
                width: 60%;
                margin: 0 auto;
            }
            .foottxt{
                padding: 0 0.2rem;
                color: #999;
                font-size: 0.16rem;
                display: block;
                margin: 0.2rem 0 0 0;
            }
        }
    }
</style>

