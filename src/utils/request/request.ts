import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
// Step 2 中的接口泛型
import {Get} from './type';
import originAxios from "axios/index";



// 创建自定义实例，指定请求超出时间为20s
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = '/api'

// 创建axios的实例
const service = axios.create({
    timeout: 10000 // 超时时间
});
// 封装 get 方法，类型为Get
const get: Get = async (url, params, config) => {
    const response = await service.get(url, {params, ...config});
    console.log("response----,",response.data)
    return response.data;
};

// 使用 request 统一调用，包括封装的get、post、put、delete等方法
const request = {get};

// 导出至外层utils文件夹的index.ts，方便统一使用utils
export {request};
