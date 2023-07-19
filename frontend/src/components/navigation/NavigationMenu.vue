<script setup lang="ts">
import { useThemeStore } from "../../stores/theme.store";

const themeStore = useThemeStore();
</script>

<template>
  <div class="fixed top-0 left-0 z-1">
    <ul
      class="flex gap-8 flex-col items-center p-4 h-screen overflow-y-auto border-r-4 border-zinc-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
    >
      <li>
        <router-link to="/">
          <img
            :src="`/images/kanji-cards-favicon-${themeStore.getOppositeTheme}.webp`"
            alt="Kanji Cards Logo"
            width="64"
            height="64"
          />
        </router-link>
      </li>
      <li>
        <router-link
          to="/"
          class="transition ease-in-out dark:text-gray-300 dark:hover:text-white dark:active:text-white"
          ><i class="fas fa-house text-4xl"></i
        ></router-link>
      </li>
      <li>
        <router-link
          to="/cards"
          class="transition ease-in-out dark:text-gray-300 dark:hover:text-white dark:active:text-white"
          ><i class="fas fa-cube text-4xl"></i
        ></router-link>
      </li>
      <li>
        <router-link
          to="/settings"
          class="transition ease-in-out dark:text-gray-300 dark:hover:text-white dark:active:text-white"
          ><i class="fas fa-gear text-4xl"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>
