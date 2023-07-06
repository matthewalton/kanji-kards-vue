<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const message = ref<string>("");

axios
  .get("/api/")
  .then((response) => {
    // Handle the response data
    message.value = response.data;
    // ...
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
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

  <h1>Welcome!</h1>
  <h2>{{ message }}</h2>
</template>

<style scoped></style>
