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
                        <q-card-section
                            header
                            class="text-h6 bg-negative text-white"
                        >
                            {{ $t('clear_data_button_label') }}
                        </q-card-section>

                        <q-card-section class="row items-center">
                            <q-avatar
                                icon="delete"
                                color="negative"
                                text-color="white"
                            />
                            <p class="col-9 q-ml-md">
                                {{ $t('confirm_clear_cache_dialog') }}
                            </p>
                        </q-card-section>

                        <q-card-actions align="right">
                            <q-btn outline label="Cancel" v-close-popup />
                            <q-btn
                                label="OK"
                                color="negative"
                                v-close-popup
                                elevated
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

const setTheme = (theme: ThemeValue, mute = false) => {
    store.theme = theme;
    let value = settings.convertThemeToQuasar(theme);
    $q.dark.set(value);
    themeOptions.value.map((option) => {
        option.disable = option.value === theme;
    });
    if (!mute) {
        $q.notify({
            message: i18n.t('theme_changed_notification', {
                theme: i18n.t('theme_' + theme + '_label'),
            }),
            type: 'positive',
            position: 'bottom',
            progress: true,
        });
    }
};

const clearCache = () => {
    localStorage.clear();
    console.log($q);
    $q.notify({
        message: i18n.t('cache_cleared_notification'),
        type: 'positive',
        position: 'bottom',
        progress: true,
    });
    console.log('Cache cleared');
};

const setLocale = (locale: LocaleValue, mute = false) => {
    store.locale = locale;
    i18n.locale.value = locale;
    localeOptions.value.map((option) => {
        option.disable = option.value === locale;
    });
    let lang = 'undefined';
    switch (locale) {
        case 'en-US':
            lang = 'English';
            break;
        case 'nl':
            lang = 'Nederlands';
            break;
    }
    if (!mute) {
        console.log($q);
        $q.notify({
            message: i18n.t('language_changed_notification', {
                language: lang,
            }),
            type: 'positive',
            position: 'bottom',
            progress: true,
        });
    }
};

onMounted(() => {
    // set defaults from store
    setLocale(store.locale, true);
    setTheme(store.theme, true);
});
</script>
