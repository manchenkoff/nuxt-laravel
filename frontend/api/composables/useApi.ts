import { ApiServiceContainer } from "../services/ApiServiceContainer";

export const useApi = () => {
    const { $api } = useNuxtApp();

    return $api as ApiServiceContainer;
};
