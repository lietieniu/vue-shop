import axios from "axios";

const instance=axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8001',
    timeout:5000
});

//1.请求拦截;
instance.interceptors.request.use(config=>{
    //也可以添加Token
    return config;
},error=>{
    return Promise.reject(error)
});

//2.响应拦截;
instance.interceptors.response.use(res=>{
    return res.data;
},error=>{
    return Promise.reject(error)
});

export default instance