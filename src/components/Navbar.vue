<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useThemeStore } from "../store/themeStore";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { GB, BR } from "country-flag-icons/string/3x2";
import { setLocale } from "@vee-validate/i18n";

const navRoutes = [
  {
    route: "home",
    label: "Home",
    icon: "user-circle",
  },
  {
    route: "skills",
    label: "Skills",
    icon: "clipboard-list",
  },
  {
    route: "projects",
    label: "Projects",
    icon: "code",
  },
  {
    route: "contact-me",
    label: "Contact-me",
    icon: "envelope-open-text",
  },
];

const themeStore = useThemeStore();
const { darkMode } = storeToRefs(themeStore);

const { t } = useI18n();
let { locale } = useI18n();

let showMobileMenu = ref(false);
let mobileMenuButton = ref(null);
onClickOutside(mobileMenuButton, (event) => (showMobileMenu.value = false));

let showLanguageMenu = ref(false);
let mobileLanguageButton = ref(null);
onClickOutside(
  mobileLanguageButton,
  (event) => (showLanguageMenu.value = false)
);

const changeLocale = (code: string) => {
  locale.value = code;
  setLocale(code);
};
</script>

<template>
  <!-- Mobile Navbar -->
  <div class="lg:hidden">
    <!-- Header -->
    <div
      class="h-16 fixed top-0 inset-x-0 p-4 z-10 flex justify-between space-x-4 theme-main text-2xl transition-colors duration-250"
    >
      <!-- Utils Buttons -->
      <div class="flex space-x-4">
        <button
          @click.prevent="themeStore.toggleDarkMode"
          :title="
            darkMode
              ? t('navbar.change-light-mode')
              : t('navbar.change-dark-mode')
          "
        >
          <font-awesome-icon
            :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
          />
        </button>
        <button
          @click.prevent="showLanguageMenu = !showLanguageMenu"
          :title="t('navbar.change-language')"
          ref="mobileLanguageButton"
        >
          <font-awesome-icon :icon="['fas', 'globe-americas']" />
        </button>
      </div>
      <!-- Menu Button -->
      <button
        @click.prevent="showMobileMenu = !showMobileMenu"
        ref="mobileMenuButton"
        class="transition duration-250 ease-in-out"
        :class="{ 'transform rotate-90': showMobileMenu }"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
    <!-- Language Menu -->
    <div
      class="fixed top-0 inset-x-0 flex flex-col theme-sub overflow-scroll hide-scroll transform transition duration-250 ease-in-out cursor-pointer"
      :class="showLanguageMenu ? 'translate-y-16' : '-translate-y-full'"
    >
      <button
        class="p-4 flex items-center space-x-2 theme-sub-hover"
        @click.prevent="changeLocale('en')"
      >
        <div class="w-8" v-html="GB"></div>
        <span>{{ t("language-menu.english") }}</span>
      </button>
      <button
        class="p-4 flex items-center space-x-2 theme-sub-hover"
        @click.prevent="changeLocale('pt')"
      >
        <div class="w-8" v-html="BR"></div>
        <span>{{ t("language-menu.portuguese") }}</span>
      </button>
    </div>
    <!-- Sidebar -->
    <div
      class="w-4/5 fixed left-0 inset-y-0 z-20 theme-sub overflow-scroll hide-scroll transform transition duration-250 ease-in-out"
      :class="showMobileMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Logo -->
      <div class="flex p-4 justify-between text-2xl font-extrabold">
        <span class="block text-center">Josh Israel</span>
        <!-- Social Buttons -->
        <div class="flex space-x-4">
          <a
            href="https://github.com/josh-israel"
            target="_blank"
            title="Github"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            href="https://linkedin.com/in/joshh-israel"
            target="_blank"
            title="Linkedin"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
      <!-- Nav -->
      <nav>
        <router-link
          v-for="route in navRoutes"
          :key="route.route"
          :to="{ name: route.route }"
          :title="t(`navbar.${route.route}`)"
          class="px-4 py-2 flex items-center space-x-2 theme-sub-hover"
        >
          <font-awesome-icon :icon="['fas', route.icon]" fixed-width />
          <span>{{ t(`navbar.${route.route}`) }}</span>
        </router-link>
      </nav>
    </div>
  </div>
  <!-- Desktop Navbar -->
  <transition
    enter-active-class="animate__animated animate__flipInX animate__faster animate__delay-1s"
    leave-active-class="animate__animated animate__flipOutX animate__faster animate__delay-1s"
    appear
  >
    <div class="hidden lg:block">
      <div class="max-w-7xl m-auto pt-20 px-4 flex flex-row justify-between">
        <div class="flex items-center space-x-4">
          <button
            @click.prevent="themeStore.toggleDarkMode"
            :title="
              darkMode
                ? t('navbar.change-light-mode')
                : t('navbar.change-dark-mode')
            "
          >
            <font-awesome-icon
              :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']"
              size="2x"
            />
          </button>
          <!-- Social Buttons -->
          <a
            href="https://github.com/josh-israel"
            target="_blank"
            title="Github"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/joshh-israel"
            target="_blank"
            title="Linkedin"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </div>
        <!-- Route Buttons -->
        <div class="flex space-x-4">
          <router-link
            v-for="route in navRoutes"
            :key="route.route"
            :to="{ name: route.route }"
            :title="t(`navbar.${route.route}`)"
            class="rounded p-2 hover:bg-gray-900 hover:text-gray-100 transition-colors duration-250"
          >
            <font-awesome-icon
              :icon="['fas', route.icon]"
              size="2x"
              fixed-width
            />
          </router-link>
        </div>
        <div class="flex space-x-4">
          <button
            class="flex w-full items-center cursor-pointer"
            @click.prevent="changeLocale('en')"
          >
            <div
              class="w-10 rounded overflow-hidden transition-all duration-250"
              :class="locale === 'en' ? 'opacity-75' : 'opacity-25'"
              v-html="GB"
            ></div>
          </button>
          <button
            class="flex w-full items-center cursor-pointer"
            @click.prevent="changeLocale('pt')"
          >
            <div
              class="w-10 rounded overflow-hidden transition-all duration-250"
              :class="locale === 'pt' ? 'opacity-75' : 'opacity-25'"
              v-html="BR"
            ></div>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
