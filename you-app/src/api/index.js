/*
验证手机号是否存在数据库的接口
methods：POST
参数：手机号
*/
const CHECKUSERPHONE_URL = '/api/checkuserphone';



/*注册用户的接口
methods:POST
参数1：手机号
参数2:密码
*/
const REGISTERUSER_URL = '/api/register';



/*用户登陆时，验证手机号是否存在的接口
methods:POST
参数：手机号
*/
const CHECKLOGINPHONE_URL = '/api/logincheck'


export default {
    CHECKUSERPHONE_URL,
    REGISTERUSER_URL,
    CHECKLOGINPHONE_URL
}