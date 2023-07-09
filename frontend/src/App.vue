<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />

  <div id="main" class="vw-100 vh-100 bg-body-tertiary overflow-y-auto">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
