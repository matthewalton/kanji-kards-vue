<script setup lang="ts">
import { useActionMenuStore } from "../stores/action-menu.store";
import { useThemeStore } from "../stores/theme.store";

const actionMenuStore = useActionMenuStore();
const themeStore = useThemeStore();

actionMenuStore.activeMenuId = "home";
</script>

<template>
  <div class="mb-4">
    <img
      :src="`/images/kanji-cards-${themeStore.getOppositeTheme}.webp`"
      class="logo"
      alt="Kanji Cards Logo"
    />
  </div>

  <h1>Welcome!</h1>
</template>

<style scoped></style>
