import Api from '../api'
import { FetchGet, FetchPost } from '../fetch/index'
import { resolve } from 'url';
import { reject } from 'assert';

export function postUserCateList(userId) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.USERCATELIST_URL, { userId })
            .then(data => {
                resolve(data);
            })
    })
}

export function postUserCateList2(id) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.USERCATELIST2_URL, { id })
            .then(data => {
                resolve({
                    data: data.data.result
                });
            })
    })
}


export function postUserSubscribe2(id) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.USERSUBSCRIBR_URL2, { id })
            .then(data => {
                resolve({
                    data: data.data.result
                });
            })
    })
}


export function postUserSubscribe(userId) {
    return new Promise((resolve, reject) => {
        FetchPost(Api.USERSUBSCRIBR_URL, { userId })
            .then(data => {
                resolve(data);
            })
    })
}


export function getOfficialList() {
    return new Promise((resolve, reject) => {
        FetchGet(Api.OFFICIAL_URL)
            .then(data => {
                resolve(data);
            })
    })
}

export function postUserAddress(adminId){
    return new Promise((resolve,reject)=>{
        FetchPost(Api.USERADDRESS_URL,{adminId})
            .then(data=>{
                resolve(data);
            })
    })
}