<script setup lang="ts">
import ActionMenu from "./components/navigation/ActionMenu.vue";
import NavigationMenu from "./components/navigation/NavigationMenu.vue";
import { useActionMenuStore } from "./stores/action-menu.store";
const menuStore = useActionMenuStore();
</script>

<template>
  <NavigationMenu />

  <div id="main" class="h-100 min-vh-100 bg-body-tertiary">
    <div id="content" class="row g-0">
      <section class="col-md-8 flex-fill">
        <router-view></router-view>
      </section>

      <div v-if="menuStore.activeMenuId" class="col-md-4">
        <ActionMenu />
      </div>
    </div>
  </div>
</template>
