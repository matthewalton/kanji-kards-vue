<script setup lang="ts">
import { useChallengeStore } from "../../../stores/challenge.store";

const challengeStore = useChallengeStore();
</script>

<template>
  <button
    class="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
    @click="challengeStore.setRandomDeck(5)"
  >
    <i class="fas fa-shuffle text-3xl"></i>
  </button>

  <button
    class="bg-yellow-600 hover:bg-yellow-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
    @click="challengeStore.updateQuestion()"
  >
    <i class="fas fa-arrows-rotate text-3xl"></i>
  </button>
</template>
