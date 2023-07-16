<script setup lang="ts">
import { useActionMenuStore } from "../../stores/action-menu.store";
import HomeMenu from "./menus/HomeMenu.vue";
import MyKanjiCardsMenu from "./menus/MyKanjiCardsMenu.vue";
const menuStore = useActionMenuStore();
</script>

<template>
  <div id="action-menu" class="position-sticky">
    <div class="d-flex flex-column gap-3">
      <HomeMenu v-if="menuStore.activeMenuId === 'home'" />
      <MyKanjiCardsMenu v-if="menuStore.activeMenuId === 'myKanjiCards'" />
    </div>
  </div>
</template>

<style scoped>
div#action-menu {
  align-self: flex-start;
}
</style>
