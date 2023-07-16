<script setup lang="ts">
import ActionMenu from "./components/navigation/ActionMenu.vue";
import NavigationMenu from "./components/navigation/NavigationMenu.vue";
</script>

<template>
  <NavigationMenu />

  <div id="main" class="h-100 min-vh-100 bg-body-tertiary">
    <div id="content" class="row g-0">
      <section class="col-md-8">
        <router-view></router-view>
      </section>

      <div class="col-md">
        <ActionMenu />
      </div>
    </div>
  </div>
</template>
