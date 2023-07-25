<script setup lang="ts">
import { useChallengeStore } from "../../../stores/challenge.store";
import ContinueChallengeAction from "./actions/ContinueChallengeAction.vue";
import StartChallengeAction from "./actions/StartChallengeAction.vue";

const challengeStore = useChallengeStore();
</script>

<template>
  <div
    class="card shadow-sm border-4 rounded-4 bg-zinc-50 dark:border-gray-600 dark:bg-gray-800"
  >
    This is the kanji cards menu!
  </div>
  <ContinueChallengeAction v-if="challengeStore.inProgress" />
  <StartChallengeAction />
</template>
