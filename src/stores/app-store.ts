import { mdiRulerSquareCompass } from '@quasar/extras/mdi-v7';
import { defineStore } from 'pinia';
import { LocaleValue, ThemeValue } from 'src/models/AppSettings';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        locale: 'en-US',
        theme: 'auto',
        $t: (key) => key,
        title: 'Tools for Builders',
        icon: mdiRulerSquareCompass,
    }),
    getters: {},
    actions: {},
    persist: {
        paths: ['locale', 'theme', 'title', 'icon'],
    },
});

export type AppState = {
    locale: LocaleValue;
    theme: ThemeValue;
    $t: (key: string, options?: object) => string;
    title: string;
    icon: string;
};
