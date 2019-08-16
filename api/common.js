/**
 * 请求统一管理
 */
import Request from '../common/request';

/* Common */
let login = data => Request.post('/accountManageController/login', data);
let queryCanlendar = data => Request.post('/product/queryCanlendar', data);
let showSystemProtocol = data => Request.post('/systemProtocol/showSystemProtocol', data);

// xxj
let queryProductSetByProductNo = data => Request.post('/product/queryProductSetByProductNo', data);
let queryInsuranceDetail = data => Request.post('/insurance/queryInsuranceDetail', data);

// xdc
let queryProductInfoById = data=> Request.post('/product/queryProductInfoById',data);
let queryCommentaryList = data=> Request.post('/order/queryCommentaryList',data);
let queryCommentaryDetail = data=> Request.post('/order/queryCommentaryDetail',data);
let cooperationUserRegisterOrLogin = data=> Request.post('/cooperation/cooperationUserRegisterOrLogin',data);
export {
    login,
    queryCanlendar,
    showSystemProtocol,
    queryProductInfoById,
    queryCommentaryList,
    queryCommentaryDetail,
    queryProductSetByProductNo,
    queryInsuranceDetail,
    cooperationUserRegisterOrLogin,
}
