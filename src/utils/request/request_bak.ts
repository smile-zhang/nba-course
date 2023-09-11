/*
 ** src/utils/request_bak.ts
 */

import originAxios from "axios";
import {message} from "antd";
import PlayDTO from "../../interface/PlayDTO";


// 创建自定义实例，指定请求超出时间为20s
const axios = originAxios.create({timeout: 20000});
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = '/api'
// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        /*
          返回数据格式：

          successful response:
          {"flag": 0, "data": ""}

          unsuccessful response:
          {"flag": 1, "msg": "error"}
         */
        if (response.data && response.data.flag === 1) {
            const errorMsg = response.data.msg;
            message.error(errorMsg);
            return Promise.reject(errorMsg);
        }
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);


/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params = {}) {
    console.log("get url", url)
    return new Promise((resolve, reject) => {

        axios.get(url, {
            params: params,

            transformResponse: function (data) {
                // 在这里对响应数据进行自定义处理
                var parsedData = JSON.parse(data);
                return parsedData.result
            }
        }).then((response) => {
            console.log("ressss::",response)
            resolve(response.data);
            // landing(url, params, response.data);
        }).catch((error) => {
            reject (error)
        });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                //关闭进度条
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                // msag(err);
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                // msag(err);
                reject(err);
            }
        );
    });
}

//统一接口处理，返回数据
export default function (fecth: string, url: string, param = {}) {
    let _data = "";
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "get":
                console.log("begin a get request,and url:", url);
                get(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request GET failed.", error);
                        reject(error);
                    });
                break;
            case "post":
                post(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request POST failed.", error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}

//失败提示
// function msag(err) {
//     if (err && err.response) {
//         switch (err.response.status) {
//             case 400:
//                 alert(err.response.data.error.details);
//                 break;
//             case 401:
//                 alert("未授权，请登录");
//                 break;
//
//             case 403:
//                 alert("拒绝访问");
//                 break;
//
//             case 404:
//                 alert("请求地址出错");
//                 break;
//
//             case 408:
//                 alert("请求超时");
//                 break;
//
//             case 500:
//                 alert("服务器内部错误");
//                 break;
//
//             case 501:
//                 alert("服务未实现");
//                 break;
//
//             case 502:
//                 alert("网关错误");
//                 break;
//
//             case 503:
//                 alert("服务不可用");
//                 break;
//
//             case 504:
//                 alert("网关超时");
//                 break;
//
//             case 505:
//                 alert("HTTP版本不受支持");
//                 break;
//             default:
//         }
//     }
// }

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url: string, params = {}, data: any) {
    if (data.code === -1) {
    }
}
