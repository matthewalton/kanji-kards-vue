<script setup lang="ts">
import { useThemeStore } from "../../stores/theme.store";

const themeStore = useThemeStore();
</script>

<template>
  <div class="position-fixed top-0 start-0 z-1">
    <ul
      class="nav gap-3 flex-column nav-pills text-center p-4 vh-100 border-end border-2 bg-body overflow-y-auto"
    >
      <li class="nav-item">
        <router-link to="/" class="navbar-brand brand">
          <img
            :src="`/images/kanji-cards-favicon-${themeStore.getOppositeTheme}.webp`"
            class="logo"
            alt="Kanji Cards Logo"
            width="64"
            height="64"
          />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link"
          ><i class="bi bi-house-fill fs-2"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cards" class="nav-link"
          ><i class="bi bi-box-fill fs-2"></i
        ></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/settings" class="nav-link"
          ><i class="bi bi-gear-fill fs-2"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
