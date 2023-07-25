<script setup lang="ts">
import Api from "@api";
import KanjiCardDTO from "../types/KanjiCardDTO";
import { useCardsStore } from "../stores/cards.store";
import { onMounted } from "vue";
import { useActionMenuStore } from "../stores/action-menu.store";
import KanjiCard from "../components/cards/KanjiCard.vue";
import ChallengeAI from "../components/challenge/ChallengeAI.vue";
import ChallengeControls from "../components/challenge/ChallengeControls.vue";

const actionMenuStore = useActionMenuStore();
actionMenuStore.activeMenuId = "";

const cardsStore = useCardsStore();

onMounted(async () => {
  cardsStore.setRandomDeck(5);

  if (!cardsStore.state.cards.length) {
    try {
      const response: { data: KanjiCardDTO[] } = await Api.get("/cards");
      cardsStore.state.cards = response.data;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }
});
</script>

<template>
  <div class="flex gap-3 flex-col">
    <router-link to="/cards"
      ><i class="fas fa-backward-step text-3xl"></i
    ></router-link>

    <ChallengeAI />

    <div class="card border-4 bg-zinc-50 dark:bg-gray-600 dark:border-gray-500">
      <div
        v-if="cardsStore.state.isMarked"
        class="card w-min border-4 transition ease-in-out hover:shadow text-gray-200 mx-auto"
        :class="{
          'border-green-900 bg-green-500': cardsStore.isCorrect,
          'border-red-900 bg-red-500': !cardsStore.isCorrect,
        }"
      >
        <div class="text-center text-4xl">
          {{ cardsStore.isCorrect ? "Correct" : "Incorrect" }}
        </div>
      </div>
      <div v-else-if="cardsStore.state.activeCard" class="flex justify-center">
        <KanjiCard :card="cardsStore.state.activeCard" />
      </div>
      <div v-else class="flex justify-center">
        <div
          v-for="card in cardsStore.state.deck"
          :key="card.id"
          class="kanji-card"
        >
          <KanjiCard
            :card="card"
            :animate="true"
            @click="cardsStore.state.activeCard = card"
          />
        </div>
      </div>
    </div>

    <ChallengeControls />
  </div>
</template>

<style scoped>
div.kanji-card {
  margin-left: -5px;
  margin-right: -5px;
}
</style>
