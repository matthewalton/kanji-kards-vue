<script setup lang="ts">
import ActionMenu from "./components/navigation/ActionMenu.vue";
import NavigationMenu from "./components/navigation/NavigationMenu.vue";
import { useActionMenuStore } from "./stores/action-menu.store";
const menuStore = useActionMenuStore();
</script>

<template>
  <NavigationMenu />

  <div
    class="h-full min-h-screen pl-24 bg-zinc-100 dark:bg-gray-900 text-zinc-800 dark:text-gray-200"
  >
    <div class="grid grid-cols-3 gap-4 p-8">
      <section
        :class="{
          'col-span-2': menuStore.activeMenuId,
          'col-span-3': !menuStore.activeMenuId,
        }"
      >
        <router-view></router-view>
      </section>

      <ActionMenu v-if="menuStore.activeMenuId" />
    </div>
  </div>
</template>
