<template>
  <div v-bind:data-bs-theme="store.theme">
    <header>
      <h1>Tools for Builders</h1>
      <button @click="menuVisible = ! menuVisible">menu</button>
      <nav v-if="menuVisible">
        <ul>
          <li>Triangles</li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>

</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import {useAppStore} from "@/store/app";

  const store = useAppStore();
  const menuVisible = ref(false);
</script>

<style lang="scss">
@import "~@materialstyle/materialstyle/scss/materialstyle";
</style>
