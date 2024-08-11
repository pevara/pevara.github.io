import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";


export const useAppStore = defineStore('app', () => {
    const locale = useStorage('app.locale', 'en');
    const theme = useStorage('app.theme', 'dark');
    
    return {locale, theme};
});