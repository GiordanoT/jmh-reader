import {Response} from './types';
import Api from './api';

class Commits {
    static async getAll(): Promise<Response> {
        return await Api.get('commits');
        /* DEBUG MODE
        const response = await fetch('./commits.json');
        if(response.ok) return {code: 200, data: await response.json()};
        else return {code: 400, data: null};
        */
    }
    static async delete(id: string): Promise<Response> {
        return await Api.delete(`commits/${id}`);
    }
}

export default Commits;
