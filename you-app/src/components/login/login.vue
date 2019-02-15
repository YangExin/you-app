<template>
    <div id="app" class="login">
        <div class="cover">
            <h1>YOU</h1>
            <form action="" onSubmit="return false" class="loginform">
                <div class="phone forminp">
                    <i class="iconfont icon-shouji"></i>
                    <input type="text" placeholder="用户名" name="phone" class='tel' ref="phone">
                </div>
                <div class="psw forminp">
                    <i class="iconfont icon-anquan"></i>
                    <input type="password" placeholder="密码" name="password" class="pasw" ref="psw">
                </div>
                <span class="User" ref="loginBtn" @click="login">登陆</span>
            </form>
            <div class="other">
                <h4>第三方登录</h4>
                <div class="mode">
                    <i class="iconfont icon-weixin" ></i>
                    <i class="iconfont icon-QQ"></i>
                    <i class="iconfont icon-weibo"></i>
                    <i class="iconfont icon-mianshulogo"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {login,loginCheckInput} from '../../script/login.js';
import {postLoginCheck} from '../../services/loginService.js'
export default {
    mounted(){
        login.init('.loginform');
    },
    methods:{
        login(){
            let inpArr = [this.$refs.phone,this.$refs.psw];
            let phone = this.$refs.phone.value;
            let psw = this.$refs.psw.value;
            for (let i = 0; i < inpArr.length; i++) {
                        // console.log(i);
                if (inpArr[i].className.indexOf('suc') == -1) { //判断它们是否有suc的class名，此class名表示已验证成功
                    inpArr[i].focus(); //如果没有就获取该输入框的焦点
                    Toast({
                        message: '登陆失败',
                        duration: 1000
                    }); //不允许跳转
                    return false;
                }
            }
            postLoginCheck(phone).then(data=>{
                // console.log(data);
                if(psw === data.data.password){
                    // console.log(data.data.id);
                    let userId = data.data.id;
                    // console.log(userId);
                    this.$cookie.set('username',userId,1);
                    this.$router.push('/you/home');
                }else{
                    Toast({
                        message: '用户名或密码错误',
                        duration: 1000
                    })
                    return false;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login{
        width: 100%;
        height: 100%;
        background: url('/img/IMG_3244.JPG') no-repeat;
        background-size: cover;
        background-position: -60px 0;
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
            form{
                width: 100%;
                position: absolute;
                bottom: 220px;
                div{
                    width: 300px;
                    height: 40px;
                    text-align: center;
                    border-bottom: 2px solid #fff;
                    margin: 0 auto;
                    margin-bottom: 50px;
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
                }
                .User{
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
            .other{
                width: 100%;
                position: absolute;
                bottom: 100px;
                h4{
                    text-align: center;
                    color: #f3f3f3;
                    font-size: 18px;
                    margin-bottom: 30px;
                }
                .mode{
                    display: flex;
                    // flex: 1;
                    .iconfont{
                        width: 25%;
                        display: block;
                        color: #fff;
                        font-size: 36px;
                        text-align: center;
                        border-right: 1px dashed #fff;
                    }
                    .iconfont:nth-of-type(4){
                        border: none;
                    }
                }
            }
        }
    }
</style>

