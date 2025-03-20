import { Api } from "./Api.js";
import { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";

const requestConfig: AxiosRequestConfig = {
    baseURL: process.env.API_URL ?? "https://api.figma.com",
    headers: {
        'Content-Type': 'application/json',
    },
};

const apiClientInstance = new Api(requestConfig);
// Configure axios-retry
axiosRetry(apiClientInstance.instance, {
    retries: 1,
    retryDelay: (retryCount) => {
        return Math.pow(2, retryCount) * 500; // Exponential back-off delay between retries
    },
    retryCondition: (error) => {
        // Retry on network errors or 5xx responses
        return error.response?.status !== 500 && error.response?.status !== 401;
    },
});

apiClientInstance.instance.interceptors.request.use((request) => {
    request.headers['X-Figma-Token'] = process.env.FIGMA_TOKEN ?? "";
    return request;
});

export default apiClientInstance;
