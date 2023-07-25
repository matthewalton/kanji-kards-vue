<script setup lang="ts">
import { useCardsStore } from "../../stores/cards.store";
import { useChallengeStore } from "../../stores/challenge.store";
import ChallengeControlsActive from "./controls/ChallengeControlsActive.vue";
import ChallengeControlsInProgress from "./controls/ChallengeControlsInProgress.vue";
import ChallengeControlsStart from "./controls/ChallengeControlsStart.vue";

const cardsStore = useCardsStore();
const challengeStore = useChallengeStore();
</script>

<template>
  <div class="flex gap-2 justify-center">
    <ChallengeControlsStart v-if="!challengeStore.inProgress" />
    <template v-else-if="!challengeStore.isMarked">
      <ChallengeControlsActive v-if="cardsStore.activeCard" />
      <ChallengeControlsInProgress v-else />
    </template>
  </div>
</template>
