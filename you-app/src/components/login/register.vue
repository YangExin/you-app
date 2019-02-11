<template>
    <div id="app" class="register">
        <div class="cover">
            <h1>YOU</h1>
            <form action="" onSubmit="return false" class="regform">
                <div class="phone forminp">
                    <i class="iconfont icon-shouji"></i>
                    <input type="text" placeholder="请输入登录时的手机号" name="phone" class='tel' ref="phone">
                    <span>
                        +86<i class="iconfont icon-iconfontjiantou4"></i>
                    </span>
                </div>
                <div class="yanzheng">
                    <i class="iconfont icon-anquan"></i>
                    <input type="text" placeholder="请输入验证码" class="math" ref="math">
                    <span class="mathBtn" ref="mathBtn">获取验证码</span>
                </div>
                <div class="psw forminp">
                    <i class="iconfont icon-anquan"></i>
                    <input type="password" placeholder="请输入您的密码" name="password" class="pasw" ref="psw">
                </div>
                <span class="newUser" ref="regBtn" @click="register">注册新用户</span>
            </form>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {register,regCheckInput} from '../../script/register.js';
import {postCheckrUser,postRegisterUser} from '../../services/loginService.js'
export default {
    // data(){
    //     return {
    //         inpList:[this.$refs.phone,this.$refs.math,this.$refs.psw]
    //     }
    // },
    mounted(){
        register.init('.regform');
    },
    methods:{
        register(){
            let inpList = [this.$refs.phone,this.$refs.math,this.$refs.psw];
            let phoneVal = this.$refs.phone.value;
            let psw = this.$refs.psw.value;
            // console.log(phoneVal,psw);
            // console.log(inpList);
            for (let i = 0; i < inpList.length; i++) {
                        // console.log(i);
                if (inpList[i].className.indexOf('suc') == -1) { //判断它们是否有suc的class名，此class名表示已验证成功
                    inpList[i].focus(); //如果没有就获取该输入框的焦点
                    Toast({
                        message: '注册失败',
                        duration: 1000
                    }); //不允许跳转
                    return false;
                }
            }
            postCheckrUser(phoneVal).then(data=>{
                // console.log(data);
                if(data.status === 0){
                    postRegisterUser(phoneVal,psw).then(result=>{
                        this.$router.push('/login')
                    })
                }
            })
            .catch(error=>{
                Toast({
                    message:'手机号已存在',
                    duration:1000
                })
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .register{
        width: 100%;
        height: 100%;
        background: url('/img/IMG_3244.JPG') no-repeat;
        background-size: cover;
        background-position: -60px 0;
        // background-color: rgba(0,0,0,0.8);
        .cover{
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.3);
            h1{
                width: 100%;
                font-size: 70px;
                color: #fff;
                text-align: center;
                position: absolute;
                top: 110px;
            }
            form {
                width: 100%;
                position: absolute;
                bottom: 180px;
                div{
                    width: 300px;
                    height: 40px;
                    text-align: center;
                    border-bottom: 2px solid #fff;
                    margin: 0 auto;
                    margin-bottom: 35px;
                    .iconfont {
                        float: left;
                        color: #fff;
                        font-size: 28px;
                        margin-right: 15px;
                    }
                    input{
                        width: 160px;
                        height: 40px;
                        background-color: transparent;
                        float: left;
                        color: #f3f3f3;
                        font-size: 18px;
                        // line-height: 30px;
                    }
                    input::-webkit-input-placeholder{
                        color: #f3f3f3;
                        font-size: 18px;
                    }
                    span{
                        float: right;
                        color: #f3f3f3;
                        height: 100%;
                        line-height: 40px;
                        .iconfont {
                            float: right;
                            font-size: 16px;
                        }
                    }
                }
                .yanzheng{
                    span{
                        float: right;
                        color: #f3f3f3;
                        height: 30px;
                        border: 1px solid #fff;
                        border-radius: 25px;
                        background-color: none;
                        padding: 0 6px;
                        line-height: 30px;
                    }
                    input {
                        width: 120px;
                    }
                }
                .newUser{
                    display: block;
                    width: 80%;
                    border: 1px solid #fff;
                    border-radius: 25px;
                    height: 50px;
                    font-size: 26px;
                    text-align: center;
                    color: #f3f3f3;
                    margin: 0 auto;
                    line-height: 50px;
                    background-color: rgba(255,255,255,0.3);
                    // margin-top: 30px;
                    // position: absolute;
                    // bottom: -90px;
                }
            }
        }
}
</style>

