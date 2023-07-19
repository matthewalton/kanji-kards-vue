<script setup lang="ts">
import { useActionMenuStore } from "../stores/action-menu.store";
import { useThemeStore } from "../stores/theme.store";

const actionMenuStore = useActionMenuStore();
const themeStore = useThemeStore();

actionMenuStore.activeMenuId = "settings";
</script>

<template>
  <h1 class="text-5xl mb-4">Settings</h1>

  <div :key="themeStore.theme">
    <label class="dark:text-gray-200">
      <input
        type="checkbox"
        role="switch"
        :checked="themeStore.getTheme === 'dark'"
        @change="themeStore.toggleTheme()"
      />
      Dark Mode
    </label>
  </div>
</template>
