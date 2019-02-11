//统一管理ajax请求

import axios from 'axios'
import { Toast } from 'mint-ui'
import { resolve } from 'url';
import { rejects } from 'assert';

export function FetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then((response) => {
                if (response.data.status) {
                    Toast({
                        message: '请求错误',
                        duration: 1000
                    })
                } else {
                    // console.log('请求成功')
                    resolve(response.data.data);
                }
            })
            .catch(error => {
                console.log(error);
                Toast({
                    message: '请求错误',
                    duration: 1000
                })
            })
    })

}

export function FetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((response) => {
                if (response.data.status) {
                    Toast({
                        message: '请求错误',
                        duration: 1000
                    })
                } else {
                    // console.log('请求成功')
                    resolve(response.data)
                }
            })
            .catch(error => {
                console.log(error);
                Toast({
                    message: '请求错误',
                    duration: 1000
                })
            })
    })

}