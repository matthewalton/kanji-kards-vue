<script setup lang="ts">
import Api from "@api";
import KanjiCardDTO from "../types/KanjiCardDTO";
import { useCardsStore } from "../stores/cards.store";
import { onMounted } from "vue";
import { useActionMenuStore } from "../stores/action-menu.store";
import KanjiCard from "../components/cards/KanjiCard.vue";
import ChallengeAI from "../components/ChallengeAI.vue";

const actionMenuStore = useActionMenuStore();
actionMenuStore.activeMenuId = "";

const cardsStore = useCardsStore();
cardsStore.setRandomDeck(5);

onMounted(() => {
  if (!cardsStore.cards.length) {
    Api.get("/cards").then((response: { data: KanjiCardDTO[] }) => {
      cardsStore.cards = response.data;
    });
  }
});
</script>

<template>
  <div class="flex gap-3 flex-col">
    <router-link to="/cards"
      ><i class="fas fa-backward-step text-3xl"></i
    ></router-link>

    <ChallengeAI />

    <div
      class="card border-4 flex justify-center bg-zinc-50 dark:bg-gray-600 dark:border-gray-500"
    >
      <div v-for="card in cardsStore.deck" :key="card.id" class="kanji-card">
        <KanjiCard :card="card" :animate="true" />
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="bg-green-600 hover:bg-green-700 transition ease-in-out text-gray-100 px-4 py-1 rounded-full"
        @click="cardsStore.setRandomDeck(5)"
      >
        <i class="fas fa-shuffle text-3xl"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
div.kanji-card {
  margin-left: -5px;
  margin-right: -5px;
}
</style>
