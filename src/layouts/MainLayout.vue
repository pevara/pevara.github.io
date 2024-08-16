<template>
    <q-layout view="hHh lpR fFf">
        <q-header bordered class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <q-icon
                            name="square_foot"
                            size="2rem"
                            color="secondary"
                        />
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
defineOptions({
    name: 'MainLayout',
});
</script>
