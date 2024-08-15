import { defineStore } from 'pinia';
import { LocaleValue, ThemeValue } from 'src/models/services/AppSettings';

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        locale: 'en-US',
        theme: 'auto',
    }),
    getters: {},
    actions: {},
    persist: true,
});

export type AppState = {
    locale: LocaleValue;
    theme: ThemeValue;
};
