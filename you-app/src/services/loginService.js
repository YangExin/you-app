import Api from '../api'
import { FetchGet, FetchPost } from '../fetch/index'
import { resolve } from 'url';
import { reject } from 'assert';

export function postCheckrUser(phone) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.CHECKUSERPHONE_URL, { phone })
            .then(data => {
                resolve(data);
            })
    })
}

export function postRegisterUser(phone, password) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.REGISTERUSER_URL, { phone, password })
            .then(data => {
                resolve(data);
            })
    })
}

export function postLoginCheck(phone) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.CHECKLOGINPHONE_URL, { phone })
            .then(data => {
                resolve(data);
            })
    })
}