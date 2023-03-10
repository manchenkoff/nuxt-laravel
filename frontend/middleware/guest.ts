export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    if (isAuthenticated.value === true) {
        return navigateTo(config.public.homeUrl, { replace: true });
    }
});
