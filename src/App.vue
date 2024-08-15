<template>
    <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { AppSettingsService } from './models/services/AppSettings';
import { useAppStore } from './stores/app-store';

defineOptions({
    name: 'App',
});

const store = useAppStore();
const $q = useQuasar();
const i18n = useI18n();

onMounted(() => {
    i18n.locale.value = store.locale;
    const value = AppSettingsService.convertThemeToQuasar(store.theme);
    $q.dark.set(value);
});
</script>
