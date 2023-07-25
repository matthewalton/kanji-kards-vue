<script setup lang="ts">
import { useCardsStore } from "../../../stores/cards.store";
import { useChallengeStore } from "../../../stores/challenge.store";

const cardsStore = useCardsStore();
const challengeStore = useChallengeStore();
</script>

<template>
  <button
    class="bg-gray-500 hover:bg-gray-600 transition ease-in-out text-gray-100 px-4 py-1 rounded"
    @click="cardsStore.resetCard()"
  >
    Cancel
  </button>

  <button
    class="bg-green-500 hover:bg-green-600 transition ease-in-out text-gray-100 px-4 py-1 rounded"
    @click="challengeStore.markQuestion()"
  >
    Confirm
  </button>
</template>
