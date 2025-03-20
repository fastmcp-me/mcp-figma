import { Api } from "./Api";
import { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            retry: false,
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: false,
        },
    },
});

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

    if (request.data && request.data instanceof FormData) {
        const formData = request.data as FormData;
        formData.forEach((val, key) => {
            if (val === 'undefined') {
                formData.set(key, '');
            }
        });

        request.data = formData;
    }
    return request;
});
apiClientInstance.instance.interceptors.response.use((response) => {
    return response;
});
export default apiClientInstance;
export { queryClient };

