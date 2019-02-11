// import { Toast } from '../../node_modules/mint-ui';
const { Toast } = require('mint-ui');
export var regCheckInput = {
    phone(str) {
        var reg = /^1[35789]\d{9}$/;
        return reg.test(str);
    },
    password(str) {
        var reg = /^\w{6,12}$/;
        return reg.test(str);
    }
}

export var register = function() {
    var nn;
    return {
        init: function(ele) {
            // console.log(document);
            this.$box = document.querySelector(ele);
            // console.log(this.$box);
            this.$phone = this.$box.querySelector('.tel');
            this.$ranMath = this.$box.querySelector('.math');
            this.$psw = this.$box.querySelector('.pasw');
            this.$ranMathBtn = this.$box.querySelector('.mathBtn');
            this.$inp = this.$box.querySelectorAll('input');
            this.$forminp = this.$box.querySelectorAll('.forminp input');
            this.$btn = this.$box.querySelector('.newUser');
            this.event()
        },
        event() {
            let that = this;
            for (let i = 0; i < this.$forminp.length; i++) {
                this.$forminp[i].onblur = function() {
                    if (this.value == '') {
                        Toast({
                            message: '输入不能为空',
                            duration: 1000
                        })
                        this.classList.remove('suc');
                    } else {
                        var bool = regCheckInput[this.name](this.value);
                        if (bool) {
                            this.classList.add('suc');
                        } else {
                            Toast({
                                message: '您的输入有误',
                                duration: 1000
                            })
                            this.classList.remove('suc');
                        }
                    }
                }
            }
            this.$ranMathBtn.onclick = function() {
                    if (this.disabled != 'disabled') {
                        that.setRaninfromation();
                    }
                    this.disabled = 'disabled';
                    var times = 30;
                    var sec = setInterval(function() {
                        that.$ranMathBtn.innerText = '已发送(' + --times + ')';
                        that.$ranMathBtn.style.color = '#ccc';
                        that.$ranMathBtn.style.cursor = 'default';
                        if (times < 0) {
                            clearInterval(sec);
                            that.$ranMathBtn.innerText = "获取验证码";
                            that.$ranMathBtn.style.color = '#fff';
                        }
                    }, 1000)
                },
                this.$ranMath.onblur = function() {
                    if (this.value == '') {
                        Toast({
                            message: '输入不能为空',
                            duration: 1000
                        });
                        this.classList.remove('suc');
                    } else {
                        var bool = that.checkInput(this.value);
                        if (bool) {
                            this.classList.add('suc');
                        } else {
                            Toast({
                                message: '您的输入有误',
                                duration: 1000
                            })
                            this.classList.remove('suc');
                        }
                    }
                }
        },
        getRandom(max, min) {
            min = 0;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        setRaninfromation() {
            var ranifm = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            nn = '';
            for (let i = 0; i < 4; i++) {
                var ri = this.getRandom(ranifm.length - 1, 0);
                nn += ranifm[ri];
            }
            console.log(nn);
        },
        checkInput(str) {
            // console.log(nn);
            var reg2 = nn;
            return str == reg2;
        }
    }
}();