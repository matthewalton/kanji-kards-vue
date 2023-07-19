<script setup lang="ts">
import { useCardsStore } from "../../stores/cards.store";

const cardsStore = useCardsStore();
const card = cardsStore.activeCard;
</script>

<template>
  <div
    v-if="card"
    class="card border-4 transition ease-in-out shadow hover:shadow-sm border-zinc-200 dark:border-gray-700 bg-zinc-50 dark:bg-gray-800 text-zinc-800 dark:text-gray-400 text-center"
  >
    <div class="flex flex-col gap-3 mb-2">
      <span class="text-5xl" v-html="card.kanji"></span>
      <span class="text-lg" v-html="`${card.kun_readings}`"></span>
    </div>

    <h5 class="font-medium text-4xl" v-html="card.name"></h5>
  </div>

  <button
    class="rounded px-4 py-2 transition ease-in-out bg-red-600 hover:bg-red-700 text-gray-200 mt-5"
    @click="cardsStore.resetCard()"
  >
    <i class="fas fa-chevron-left"></i> Back
  </button>
</template>

<style scoped>
.card {
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
