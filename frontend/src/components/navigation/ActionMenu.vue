<script setup lang="ts">
import { useActionMenuStore } from "../../stores/action-menu.store";
import HomeMenu from "./menus/HomeMenu.vue";
import MyKanjiCardsMenu from "./menus/MyKanjiCardsMenu.vue";
const menuStore = useActionMenuStore();
</script>

<template>
  <div class="sticky self-start top-8">
    <div class="flex flex-col gap-3 text-center font-medium">
      <HomeMenu v-if="menuStore.activeMenuId === 'home'" />
      <MyKanjiCardsMenu v-if="menuStore.activeMenuId === 'myKanjiCards'" />
    </div>
  </div>
</template>
