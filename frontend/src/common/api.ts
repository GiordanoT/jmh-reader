import Axios from 'axios';
import {Response} from './types';

class Api {
    static url = 'http://localhost:5000/jmh/';

    static async get(path: string): Promise<Response> {
        try {
            const response = await Axios.get(Api.url + path);
            return {code: response.status, data: response.data};
        } catch (e) {
            return {code: 400, data: null};
        }
    }
    static async post(path: string, obj: unknown): Promise<Response> {
        try {
            const response = await Axios.post(Api.url + path, obj);
            return {code: response.status, data: response.data};
        } catch (e) {
            return {code: 400, data: null};
        }
    }
    static async patch(path: string, obj: unknown): Promise<Response> {
        try {
            const response = await Axios.patch(Api.url + path, obj);
            return {code: response.status, data: response.data};
        } catch (e) {
            return {code: 400, data: null};
        }
    }
    static async delete(path: string): Promise<Response> {
        try {
            const response = await Axios.delete(Api.url + path);
            return {code: response.status, data: response.data};
        } catch (e) {
            return {code: 400, data: null};
        }
    }

}

export default Api;
