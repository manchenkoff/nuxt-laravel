import { FetchOptions } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
    const event = useRequestEvent();
    const config = useRuntimeConfig();
    const user = useUser();
    const apiConfig = config.public.api;

    const httpOptions: FetchOptions = {
        baseURL: apiConfig.baseUrl,
        credentials: "include",
        headers: {
            Accept: "application/json",
        },
        retry: false,

        onRequest({ options }) {
            // TODO
        },

        onResponse({ response }) {
            // TODO
        },

        onResponseError({ request, response }) {
            // TODO
        },
    };

    const client: any = $fetch.create(httpOptions);
});
