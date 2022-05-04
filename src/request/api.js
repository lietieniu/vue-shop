//统一管理所有api
import request from './request';

//1.获取首页数据
export const getHomeData=()=>request.get('/index/index');

//2.获取popup搜索框的数据
export const popupSearchData=()=>request.get('/search/index');

//3.搜索框产品搜素
export const getSearchData=(params)=>request.get('/goods/list',{params})
//get方法的params加{} 因为参数需要解构 post不用

//4.实时搜索功能
export const getTimeSearch=(params)=>request.get('search/helper',{params})
//5.清除历史记录
export const clearHistory=()=>request.post('/search/clearhistory');