<script setup lang="ts">
import { useActionMenuStore } from "../stores/action-menu.store";
import ChallengeControls from "../components/challenge/ChallengeControls.vue";
import ChallengeDeck from "../components/challenge/ChallengeDeck.vue";
import ChallengeScreen from "../components/challenge/ChallengeScreen.vue";

const actionMenuStore = useActionMenuStore();
actionMenuStore.activeMenuId = "";
</script>

<template>
  <div class="flex gap-3 flex-col">
    <router-link to="/cards"
      ><i class="fas fa-backward-step text-3xl"></i
    ></router-link>

    <ChallengeScreen />

    <ChallengeDeck />

    <ChallengeControls />
  </div>
</template>
