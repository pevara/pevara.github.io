<template>
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
</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import {useAppStore} from "@/store/app";

  const store = useAppStore();
  const menuVisible = ref(false);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
