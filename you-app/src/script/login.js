const { Toast } = require('mint-ui');

export var loginCheckInput = {
    phone(str) {
        var reg = /^1[35789]\d{9}$/;
        return reg.test(str);
    },
    password(str) {
        var reg = /^\w{6,12}$/;
        return reg.test(str);
    }
}

export var login = function() {
    return {
        init: function(ele) {
            this.$box = document.querySelector(ele);
            this.$phone = this.$box.querySelector('.tel');
            this.$psw = this.$box.querySelector('.pasw');
            this.$inp = this.$box.querySelectorAll('input');
            this.event();
        },
        event() {
            var that = this;
            for (let i = 0; i < this.$inp.length; i++) {
                this.$inp[i].onblur = function() {
                    if (this.value == '') {
                        Toast({
                            message: '输入不能为空',
                            duration: 1000
                        })
                        this.classList.remove('suc');
                    } else {
                        var bool = loginCheckInput[this.name](this.value);
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
        }
    }
}();