import * as axios from 'axios';

let baseURL;
if(process.env.NODE_ENV === 'production') {
    baseURL = 'http://sberator.ru';

} else if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000';
}

export const instanceAxios = axios.create({
    baseURL: baseURL,
    timeout: 5000000,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});
