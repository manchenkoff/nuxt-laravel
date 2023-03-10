export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api: {
                // This is the URL of the API server.
                baseUrl: "http://localhost:80",
                // Endpoint to get the cookie.
                cookieRequestUrl: "/sanctum/csrf-cookie",
                // Endpoint to get the user.
                userUrl: "/api/user",
                // Key of the user object to keep in the state.
                userKey: "user",
                // Name of the cookie with the token.
                csrfCookieName: "XSRF-TOKEN",
                // Name of the header with the token.
                csrfHeaderName: "X-XSRF-TOKEN",
                // Name of the cookie from the API server.
                serverCookieName: "set-cookie",
                // Redirect to the login page if the user is not authenticated.
                redirectUnauthenticated: true,
                // Redirect to the verification page if the user is not verified.
                redirectUnverified: true,
            },
        },
    },
});
