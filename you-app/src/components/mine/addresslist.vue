<template>
    <div class="addresslist">
        <div class="left">
           <span class="name">
                {{address.user}}
            </span>
            <span class="tel">
                {{address.tel}}
            </span>
            <p>
               {{address.address}} 
            </p> 
        </div>
        <div class="set">
            <span>编辑</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['address']
}
</script>

<style lang="scss" scoped>
    .addresslist{
        width: 100%;
        height: 1.025rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.1rem;
        .left{
            width: 70%;
            padding: 0.2rem 0.22rem;
            box-sizing: border-box;
            .name{
                font-size: 0.18rem;
            }
            .tel{
                color: #6a6a6a;
                font-size: 0.16rem;
            }
            p{
                font-size: 0.16rem;
            }
        }
        .set{
            flex: 1;
            text-align: center;
            line-height: 1.025rem;
            font-size: 0.18rem;
            color: #939393;
            span{
                padding: 0 0.3rem;
                border-left: 1px solid #e1e1e1;
            }
        }
    }
</style>

