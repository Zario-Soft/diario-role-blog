import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from './env';

export class HttpClient {
    api_url: string | undefined = API_URL;

    constructor() {
        axios.interceptors.response.use(
            (response: any) => response,
            (errorObj: any) => {
                if (errorObj && errorObj.response && errorObj.response.status === 401) {
                    localStorage.removeItem('token');
                    window.location.reload();
                }

                return errorObj
            });
    }


    public async get(url: string, options: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<any, any>> {
        return await axios.get(url, { ...this.getDefaultOptions(), ...options });
    }

    public async post(url: string, data: any = {}, options: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<any, any>> {
        return await axios.post(url, data, { ...this.getDefaultOptions(), ...options });
    }

    public async patch(url: string, data: any, options: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<any, any>> {
        return await axios.patch(url, data, { ...this.getDefaultOptions(), ...options });
    }

    public async put(url: string, data: any, options: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<any, any>> {
        return await axios.put(url, data, { ...this.getDefaultOptions(), ...options });
    }

    public async delete(url: string, options: AxiosRequestConfig<any> = {}): Promise<AxiosResponse<any, any>> {
        return await axios.delete(url, { ...this.getDefaultOptions(), ...options });
    }

    private getToken(): string | null { return localStorage.getItem('token'); }

    private getDefaultOptions(): any {
        return {
            headers: {
                Authorization: this.getToken() ? `Bearer ${this.getToken()}` : '',
                'Content-Type': 'application/json',
            },
            timeout: 30000,
            baseURL: this.api_url,
        }
    }
}