<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "./store/themeStore";
const themeStore = useThemeStore();
const { darkMode } = storeToRefs(themeStore);
</script>

<template>
  <div
    class="transition-colors duration-250 ease-in-out"
    :class="{ dark: darkMode }"
  >
    <router-view></router-view>
    <app-accept-button
      @click.prevent="themeStore.toggleDarkMode"
      text="Change theme"
    />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(249 250 251); /* bg-gray-50 */
  color: rgb(55 65 81); /* text-gray-700 */
}
.dark {
  background-color: rgb(17 24 39); /* bg-gray-900 */
  color: rgb(209 213 219); /* text-gray-300 */
}
</style>
