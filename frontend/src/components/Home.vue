<script setup lang="ts">
import { ref } from "vue";
import Api from "@api";

const message = ref<string>("");

Api.get("/").then((response) => {
  message.value = response.data;
});
</script>

<template>
  <div class="mb-4">
    <img
      src="../assets/img/kanji-cards-light.webp"
      class="logo"
      alt="Kanji Cards Logo"
    />
  </div>

  <h1>Welcome again!</h1>
  <h2>{{ message }}</h2>
</template>

<style scoped></style>
