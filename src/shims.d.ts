export {}
import * as axios from 'axios';

declare global {
    interface Window {
        myFn?: Function
    }
}


declare module 'axios' {
    // 定制业务相关的网络请求响应格式， T 是具体的接口返回类型数据
    export interface CustomSuccessData<T> {
        result: {
            [data: string]: T[]
        };
        status?: Status;

    }

    export interface Item {
        Team1: string;
        Team2: string;
    }

    export interface Status {
        code: string;
        msg: string;
    }
}
