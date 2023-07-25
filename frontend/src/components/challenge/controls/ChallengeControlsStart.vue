<script setup lang="ts">
import { useChallengeStore } from "../../../stores/challenge.store";

const challengeStore = useChallengeStore();
</script>

<template>
  <button
    class="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 text-3xl px-6 py-2 rounded-full"
    @click="challengeStore.startChallenge()"
  >
    Start
  </button>
</template>
