<script setup lang="ts">
import { useThemeStore } from "./store/themeStore";
import AppNavbar from "@/components/Navbar.vue";
import AppContainer from "@/components/Container.vue";

const themeStore = useThemeStore();
</script>

<template>
  <div
    class="min-h-screen flex flex-col theme-main transition-colors duration-250 ease-in-out"
  >
    <app-navbar />
    <div class="flex flex-col lg:max-w-7xl lg:m-auto px-4 pb-4 pt-20 lg:pt-12">
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
    </div>
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
