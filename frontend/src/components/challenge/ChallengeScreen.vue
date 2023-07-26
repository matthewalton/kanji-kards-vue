<script setup lang="ts">
import { useChallengeStore } from "../../stores/challenge.store";
import ChallengeActive from "./ChallengeActive.vue";

const challengeStore = useChallengeStore();
</script>

<template>
  <div
    id="ai-card"
    class="card border-4 flex gap-5 items-center justify-center flex-col bg-zinc-50 dark:bg-gray-950 dark:border-gray-500"
  >
    <div class="lg:px-40 text-center">
      <div
        v-if="!challengeStore.inProgress"
        class="text-3xl font-mono dark:text-white text-black text-wrap"
      >
        Start Challenge?
      </div>
      <ChallengeActive v-else />
    </div>
  </div>
</template>

<style scoped>
div#ai-card {
  min-height: 50vh;
}
</style>
