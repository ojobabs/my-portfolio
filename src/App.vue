<script setup lang="ts">
import { useThemeStore } from "./store/themeStore";
import AppNavbar from "@/components/Navbar.vue";
import AppContainer from "@/components/Container.vue";
import AppFooter from "@/components/Footer.vue";

const themeStore = useThemeStore();
</script>

<template>
  <div
    class="min-h-screen flex flex-col theme-main transition-colors duration-250 ease-in-out"
  >
    <app-navbar />
    <app-container>
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeInRight animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </app-container>
    <app-footer />
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
