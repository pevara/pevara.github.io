<template>
    <div style="max-width: 350px">
        <q-list padding>
            <q-item-label header>{{ $t('language_menu_label') }}</q-item-label>
            <q-item
                v-bind:key="localeOption.value"
                v-for="localeOption in localeOptions"
                tag="label"
                v-ripple
            >
                <q-item-section avatar>
                    <q-icon :name="localeOption.icon" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        {{ localeOption.label }}
                    </q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-toggle
                        v-model="localeOption.disable"
                        @update:model-value="setLocale(localeOption.value)"
                        :name="localeOption.value"
                        :disable="localeOption.disable"
                        color="secondary"
                    />
                </q-item-section>
            </q-item>

            <q-separator spaced />
            <q-item-label header>{{ $t('theme_menu_label') }}</q-item-label>
            <q-item
                v-for="themeOption in themeOptions"
                v-bind:key="themeOption.value"
                tag="label"
                v-ripple
            >
                <q-item-section avatar>
                    <q-icon :name="themeOption.icon" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        {{ $t(themeOption.label) }}
                    </q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-toggle
                        v-model="themeOption.disable"
                        @update:model-value="setTheme(themeOption.value)"
                        :name="themeOption.value"
                        :disable="themeOption.disable"
                        color="secondary"
                    />
                </q-item-section>
            </q-item>

            <q-separator spaced />
            <q-item-label header>{{ $t('advanced_menu_label') }}</q-item-label>
            <q-item class="full-width">
                <q-btn
                    color="negative"
                    outline
                    :label="$t('clear_data_button_label')"
                    @click="clearCacheDialog = true"
                    icon="delete"
                    class="self-stretch"
                >
                </q-btn>

                <q-dialog v-model="clearCacheDialog" persistent>
                    <q-card>
                        <q-card-section class="row items-center">
                            <q-avatar
                                icon="delete"
                                color="negative"
                                text-color="white"
                            />
                            <span class="q-ml-sm">{{
                                $t('confirm_clear_cache_dialog')
                            }}</span>
                        </q-card-section>

                        <q-card-actions align="right">
                            <q-btn flat label="Cancel" v-close-popup />
                            <q-btn
                                flat
                                label="OK"
                                color="negative"
                                v-close-popup
                                @click="clearCache"
                            />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </q-item>
        </q-list>
    </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted, ref } from 'vue';
import {
    AppSettingsService,
    LocaleValue,
    ThemeValue,
} from 'src/models/services/AppSettings';
import { useAppStore } from 'src/stores/app-store';
import { useI18n } from 'vue-i18n';
const $q = useQuasar();

defineOptions({
    name: 'SettingsMenu',
});

const settings = AppSettingsService;
const store = useAppStore();
const localeOptions = ref(settings.localeOptions);
const themeOptions = ref(settings.themeOptions);
const i18n = useI18n();

const clearCacheDialog = ref(false);

const setTheme = (theme: ThemeValue) => {
    store.theme = theme;
    let value = settings.convertThemeToQuasar(theme);
    $q.dark.set(value);
    themeOptions.value.map((option) => {
        option.disable = option.value === theme;
    });
};

const clearCache = () => {
    localStorage.clear();
    console.log('Cache cleared');
};

const setLocale = (locale: LocaleValue) => {
    store.locale = locale;
    i18n.locale.value = locale;
    localeOptions.value.map((option) => {
        option.disable = option.value === locale;
    });
};

onMounted(() => {
    // set defaults from store
    setLocale(store.locale);
    setTheme(store.theme);
});
</script>
