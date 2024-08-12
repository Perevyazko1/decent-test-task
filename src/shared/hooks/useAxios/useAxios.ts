import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';

interface AxiosHookResponse<T> {
    error: any;
    loading: boolean;
    executeRequest: (method: string, url: string, requestData?: any) => Promise<T | null>;
}

export const API_URL =
    "https://restcountries.com/"

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})


const useAxios = <T>(): AxiosHookResponse<T> => {
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const executeRequest = async (method: string, url: string, requestData?: any):Promise<T | null> => {
        const headers = {
            'Content-Type': 'application/json', // Пример стандартного заголовка
            // Другие стандартные заголовки здесь
        };

        setLoading(true);
        try {
            let response: AxiosResponse<T>;
            switch (method.toUpperCase()) {
                case 'GET':
                    response = await $api.get<T>(url, {headers});
                    break;
                case 'POST':
                    response = await $api.post<T>(url, requestData, {headers});
                    break;
                case 'PUT':
                    response = await $api.put<T>(url, requestData, {headers});
                    break;
                default:
                    throw new Error('Unsupported method');
            }
            // console.log(response.data)
            setLoading(false);
            return response.data; // Возвращаем данные в промисе
        } catch (error) {
            setError(error);
            setLoading(false);
            return null; // Возвращаем данные в промисе
        }
    };

    return {error, loading, executeRequest};
};

export default useAxios;
