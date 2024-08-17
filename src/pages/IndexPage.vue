<template>
    <q-page class="q-px-md">
        <h1 class="text-h5">{{ $t('tools_menu_title') }}</h1>
        <tools-menu />
    </q-page>
</template>

<script setup lang="ts">
import ToolsMenu from 'src/components/ToolsMenu.vue';

defineOptions({
    name: 'IndexPage',
});
</script>
