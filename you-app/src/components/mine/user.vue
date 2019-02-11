<template>
    <div class="user">
        <div class="iconBox">
           <div class="icon">U</div> 
        </div>
        <div class="userName">
            <div class="name">
                {{isName}}
            </div>
            <i class="iconfont icon-ico_compile"></i>
        </div>
    </div>
</template>

<script>
export default {
    // props:{
    //     name:{
    //         type:String,
    //         default:'用户名'
    //     }
    // },
    data(){
        return{
            name:this.$cookie.get('username')
        }
    },
    computed:{
        isName(){
            if(this.name === null){
                return '用户名'
            }
            return this.name;
        }
    }
}
</script>

<style lang="scss">
    .user{
        width: 100%;
        height: 0.875rem;
        background-color: #fff;
        display: flex;
        // position: absolute;
        // top: 0.44rem;
        // left: 0;
        .iconBox{
            width: 0.85rem;
            height: 100%;
            position: relative;
            .icon {
                width: 0.51rem;
                height: 0.51rem;
                border-radius: 50%;
                border: 1px solid #ccc;
                background-color:#000;
                color: #fff;
                font-size: 0.46rem;
                text-align: center;
                line-height: 0.51rem;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
            }
        }
        .userName{
            flex: 1;
            height: 100%;
            font-size: 0.20rem;
            line-height: 0.875rem;
            .name{
                width: 30%;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                float: left;
            }
            i{
                font-size: 0.2rem;
            }
        }
    }
</style>

