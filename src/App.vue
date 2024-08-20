<template>
    <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { AppSettingsService } from './models/AppSettings';
import { useAppStore } from './stores/app-store';

defineOptions({
    name: 'App',
});

const store = useAppStore();
const $q = useQuasar();
const i18n = useI18n();
store.$t = i18n.t;

onMounted(() => {
    i18n.locale.value = store.locale;
    const value = AppSettingsService.convertThemeToQuasar(store.theme);
    $q.dark.set(value);
});
</script>
