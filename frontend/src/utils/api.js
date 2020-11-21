import * as axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: 'http://sberator.ru',
    timeout: 5000000,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});
