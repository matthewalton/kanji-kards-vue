<script setup lang="ts">
import { useChallengeStore } from "../../../stores/challenge.store";
import ContinueChallengeAction from "./actions/ContinueChallengeAction.vue";

const challengeStore = useChallengeStore();
</script>

<template>
  <div
    class="card shadow-sm border-4 rounded-4 dark:border-gray-600 bg-zinc-50 dark:bg-gray-800"
  >
    This is the home menu!
  </div>
  <ContinueChallengeAction v-if="challengeStore.inProgress" />
</template>
