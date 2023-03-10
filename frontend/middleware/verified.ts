export default defineNuxtRouteMiddleware(() => {
    const { user, isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    if (isAuthenticated.value === false) {
        return navigateTo(config.public.loginUrl, { replace: true });
    }

    if (user.value?.email_verified_at === null) {
        return navigateTo(config.public.verificationUrl, { replace: true });
    }
});
