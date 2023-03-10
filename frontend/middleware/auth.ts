export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    if (isAuthenticated.value === false) {
        return navigateTo(config.public.loginUrl, { replace: true });
    }
});
