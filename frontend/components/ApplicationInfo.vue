<script lang="ts" setup>
import { useApi } from "~~/api/composables/useApi";

const api = useApi();

const {
    pending,
    data: response,
    refresh,
    error,
} = await useLazyAsyncData("app", () => api.application.info());
</script>

<template>
    <div>
        <p>Laravel: {{ pending ? "Loading..." : response?.Laravel }}</p>

        <template v-if="error">
            <small>{{ error }}</small>
        </template>
    </div>

    <button @click="refresh()">Refresh</button>
</template>
