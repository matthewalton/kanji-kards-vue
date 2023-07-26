<script setup lang="ts">
import { useChallengeStore } from "../../../../stores/challenge.store";

const challengeStore = useChallengeStore();
</script>

<template>
  <div
    class="card shadow-sm border-4 rounded-4 dark:border-gray-600 bg-zinc-50 dark:bg-gray-800"
  >
    Ready to face the AI challenge?

    <div class="mt-5">
      <router-link
        to="/challenge"
        class="rounded px-4 py-2 transition ease-in-out text-gray-200 bg-green-600 hover:bg-green-700"
        @click="challengeStore.resetChallenge()"
        >Start New Challenge</router-link
      >
    </div>
  </div>
</template>
