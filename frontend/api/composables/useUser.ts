import User from "../models/User";

export const useUser = () => {
    const config = useRuntimeConfig();
    const user = useState<User | null>(config.public.api.userKey, () => null);

    return user;
};
