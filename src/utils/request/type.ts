import {AxiosResponse, AxiosRequestConfig, CustomSuccessData} from 'axios';
import PlayDTO from "../../interface/PlayDTO";

// 泛型接口
export interface Get {
    <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<PlayDTO>>;
}
