//统一管理所有api
import request from './request';

//1.获取首页数据
export const getHomeData=()=>request.get('/index/index');