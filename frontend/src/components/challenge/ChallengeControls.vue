<script setup lang="ts">
import { useCardsStore } from "../../stores/cards.store";

const cardsStore = useCardsStore();
</script>

<template>
  <div v-if="!cardsStore.isMarked" class="flex gap-2 justify-center">
    <template v-if="cardsStore.activeCard">
      <button
        class="bg-gray-500 hover:bg-gray-600 transition ease-in-out text-gray-100 px-4 py-1 rounded"
        @click="cardsStore.resetCard()"
      >
        Cancel
      </button>

      <button
        class="bg-green-500 hover:bg-green-600 transition ease-in-out text-gray-100 px-4 py-1 rounded"
        @click="cardsStore.markQuestion()"
      >
        Confirm
      </button>
    </template>
    <template v-else>
      <button
        class="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
        @click="cardsStore.setRandomDeck(5)"
      >
        <i class="fas fa-shuffle text-3xl"></i>
      </button>

      <button
        class="bg-yellow-600 hover:bg-yellow-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
        @click="cardsStore.updateQuestion()"
      >
        <i class="fas fa-arrows-rotate text-3xl"></i>
      </button>
    </template>
  </div>
</template>
