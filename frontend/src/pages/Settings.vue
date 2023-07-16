<script setup lang="ts">
import { useActionMenuStore } from "../stores/action-menu.store";
import { useThemeStore } from "../stores/theme.store";

const actionMenuStore = useActionMenuStore();
const themeStore = useThemeStore();

actionMenuStore.activeMenuId = "settings";
</script>

<template>
  <h1 class="mb-4">Settings</h1>

  <div :key="themeStore.theme" class="form-check form-switch">
    <label class="form-check-label">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        :checked="themeStore.getTheme === 'dark'"
        @change="themeStore.toggleTheme()"
      />
      Dark Mode
    </label>
  </div>
</template>
