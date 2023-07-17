<script setup lang="ts">
import { useCardsStore } from "../../stores/cards.store";

const cardsStore = useCardsStore();
const card = cardsStore.activeCard;
</script>

<template>
  <div
    v-if="card"
    class="card shadow-sm border rounded-4 text-bg-tertiary w-100"
  >
    <div class="card-body text-center position-relative">
      <div class="d-flex flex-column mb-2">
        <span class="fs-1" v-html="card.kanji"></span>
        <span class="small" v-html="`${card.kun_readings}`"></span>
      </div>

      <h5 class="card-title fw-bold" v-html="card.name"></h5>

      <div class="position-absolute top-0 end-0" style="padding: inherit">
        <button
          type="button"
          class="btn btn-danger p-2 py-1"
          @click="cardsStore.resetCard()"
        >
          <i class="bi bi-x fs-4"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
