<script lang="ts" setup>
  import {ref} from "vue";
  import {useAppStore} from "@/store/app";
  import {useHead} from '@unhead/vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n() ;

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
                <a class="navbar-brand d-flex align-items-center">
                    <i class="bi bi-star-fill me-2"></i>{{ t("title") }}
                </a>
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