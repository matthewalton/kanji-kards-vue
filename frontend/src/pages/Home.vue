<script setup lang="ts">
import { useActionMenuStore } from "../stores/action-menu.store";

const actionMenuStore = useActionMenuStore();
actionMenuStore.activeMenuId = "home";
</script>

<template>
  <div class="mb-4">
    <img
      src="../assets/img/kanji-cards-light.webp"
      class="logo"
      alt="Kanji Cards Logo"
    />
  </div>

  <h1>Welcome!</h1>
</template>

<style scoped></style>
