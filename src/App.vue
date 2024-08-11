<script lang="ts" setup>
import {ref} from "vue";
import {useAppStore} from "@/store/app";
import {useHead} from '@unhead/vue';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const store = useAppStore();
const menuVisible = ref(false);

useHead({
    title: "tools for builders",
    htmlAttrs: {
        "data-bs-theme": store.theme
    }
});
</script>


<template>
    <div>
        <header class="navbar navbar-expand-xl bg-primary">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand d-flex align-items-center">
                    <span class="icon">calculate</span> {{ t("title") }}
                </RouterLink>

            </div>
        </header>
        <div class="container-fluid p-2">

            <router-view/>

        </div>

    </div>

</template>


<style lang="scss">
$primary: #086f91;
$secondary: #72a7b1;
$enable-shadows: true;
$enable-gradients: true;
$enable-grid-classes: false;
@import "~@materialstyle/materialstyle/scss/materialstyle";

.icon {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
}
</style>

<style scoped>
.icon {
    line-height: 0;
    font-size: 38px;
    margin-right: 10px;
}
</style>

<i18n>
{
    "en": {
        "title": "Tools for Builders"
    },
    "nl": {
        "title": "Tools voor Bouwers"
    }
}
</i18n>