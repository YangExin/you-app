//统一管理api接口

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


/*进入收藏页面，请求该用户的收藏商品的数据
methods:POST
参数：用户id，商品id
*/
const USERCATELIST_URL = '/api/usercatelist'


/*进入收藏页面，请求该用户的收藏商品的数据
methods:POST
参数：商品id
*/
const USERCATELIST2_URL = '/api/usercatelist2'


/*进入订阅页面，请求该用户的订阅号的数据
methods:POST
参数：用户id
*/
const USERSUBSCRIBR_URL = '/api/usersubscribe'


/*进入订阅页面，请求该用户的订阅号的数据
methods:POST
参数：订阅号id
*/
const USERSUBSCRIBR_URL2 = '/api/usersubscribe2'



/*进入YOU官方运营号，请求该订阅号的数据
methods:GET
*/
const OFFICIAL_URL = '/api/official'



/*进入收货地址，请求该用户的收货地址列表
methods：POST
参数：用户id
*/
const USERADDRESS_URL = '/api/useraddress'

module.exports = {
    CHECKUSERPHONE_URL,
    REGISTERUSER_URL,
    CHECKLOGINPHONE_URL,
    USERCATELIST_URL,
    USERCATELIST2_URL,
    USERSUBSCRIBR_URL,
    USERSUBSCRIBR_URL2,
    OFFICIAL_URL,
    USERADDRESS_URL
}