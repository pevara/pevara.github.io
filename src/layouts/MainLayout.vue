<template>
    <q-layout view="hHh lpR fFf">
        <q-header bordered class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <q-icon :name="mdiRulerSquareCompass" size="2rem" />
                    </q-avatar>
                    {{ $t('app_title') }}
                </q-toolbar-title>
                <q-btn-dropdown dropdown-icon="settings" round unelevated>
                    <settings-menu />
                </q-btn-dropdown>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer bordered class="bg-grey-8 text-white"> </q-footer>
    </q-layout>
</template>

<script setup lang="ts">
import SettingsMenu from 'src/components/SettingsMenu.vue';
import { mdiRulerSquareCompass } from '@quasar/extras/mdi-v6';
defineOptions({
    name: 'MainLayout',
});
</script>
