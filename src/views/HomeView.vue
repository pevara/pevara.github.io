<template>
    <h1 class="text-center mb-3">
        {{ t("page_title") }}
    </h1>
    <div class="vstack gap-2">
        <RouterLink v-for="tool in tools" :to="tool.href" :key="tool.name" class="tool btn btn-outline-primary btn-lg ripple-surface">
            <span class="icon">{{ tool.icon }}</span>
            {{ t(tool.name) }}
            <span class="ripple-surface"></span>
        </RouterLink>
    </div>
</template>

<style lang="scss">
.tool {
    font-size: 24px;
    position: relative;


    .icon {
        font-size: 40px;
        position: absolute;
        left: 12px;
        top: 50%;
        margin-top: -20px;
        font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
        color: var(--bs-primary-active);
    }
}

</style>


<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {onMounted} from "vue";
import {MDCRipple} from "@material/ripple";



const {t} = useI18n();
const tools = [
    {
        name: "triangles",
        href: "triangles",
        icon: "change_history",
    },
    {
        name: "spacing",
        href: "spacing",
        icon: "format_letter_spacing",
    },
    {
        name: "slopes",
        href: "slopes",
        icon: "percent",
    },
    {
        name: "conversion",
        href: "conversion",
        icon: "swap_horiz",
    },
    {
        name: "surfaces",
        href: "surfaces",
        icon: "rectangle",
    },
    {
        name: "volumes",
        href: "volumes",
        icon: "deployed_code",
    },
    {
        name: "calculate",
        href: "calculate",
        icon: "calculate",
    },
    {
        name: "notes",
        href: "notes",
        icon: "edit_square",
    },
    {
        name: "history",
        href: "history",
        icon: "history",
    }
];

onMounted(() => {
    const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'));
    rippleSurface.map(s => {
        return new MDCRipple(s);
    });
});
</script>

<i18n>
{
    "en": {
        "page_title": "Choose your Tool",
        "triangles": "Triangles",
        "spacing": "Equal spaces",
        "slopes": "Slopes & Angles",
        "conversion": "Conversion",
        "surfaces": "Surfaces",
        "volumes": "Volumes",
        "calculate": "Calculator",
        "notes": "Notes",
        "history": "History"
    },
    "nl": {
        "page_title": "Kies een Tool",
        "triangles": "Driehoeken",
        "spacing": "Gelijke verdeling",
        "slopes": "Hellingen",
        "conversion": "Omzetting",
        "surfaces": "Oppervlaktes",
        "volumes": "Volumes",
        "calculate": "Rekenmachine",
        "notes": "Notities",
        "history": "Geschiedenis"
    }
}

</i18n>