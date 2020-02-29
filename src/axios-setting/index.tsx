import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
    headers: {
        // "Authorization": "Token jwt.token.here",
        //'Content-Type': "application/json"
    },
    timeout: 3000
})

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((request: AxiosRequestConfig) => {
    console.log(`interceptors.request`, request)
    return request;
}, (error: AxiosError) => {
    console.log(`interceptors.request error:`, error);
    return Promise.reject(error);
})

instance.interceptors.response.use((response: AxiosResponse) => {
    console.log(`interceptors.response`, response);

    const newResponse = { ...response };
    const hasReturnCode = Object.assign(newResponse.data, { "returnCode": "0000" });
    newResponse.data = hasReturnCode;

    return newResponse;
}, (error: AxiosError) => {
    console.log(`interceptors.response error:`, error);
    return Promise.reject(error);
})

export default instance;