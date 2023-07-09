<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const message = ref<string>("");

axios.get("api/").then((response) => {
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
