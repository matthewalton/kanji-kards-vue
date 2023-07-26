<script setup lang="ts">
import { useCardsStore } from "../../stores/cards.store";
import { useChallengeStore } from "../../stores/challenge.store";
import KanjiCard from "../cards/KanjiCard.vue";

const cardsStore = useCardsStore();
const challengeStore = useChallengeStore();
</script>

<template>
  <div
    v-if="challengeStore.inProgress"
    class="card border-4 bg-zinc-50 dark:bg-gray-600 dark:border-gray-500"
  >
    <div
      v-if="challengeStore.isMarked"
      class="card w-min border-4 transition ease-in-out hover:shadow text-gray-200 mx-auto"
      :class="{
        'border-green-900 bg-green-500': challengeStore.isCorrect,
        'border-red-900 bg-red-500': !challengeStore.isCorrect,
      }"
    >
      <div class="text-center text-4xl">
        {{ challengeStore.isCorrect ? "Correct" : "Incorrect" }}
      </div>
    </div>
    <div v-else-if="cardsStore.activeCard" class="flex justify-center">
      <KanjiCard :card="cardsStore.activeCard" />
    </div>
    <div v-else class="flex justify-center">
      <div
        v-for="card in challengeStore.deck"
        :key="card.id"
        class="kanji-card"
      >
        <KanjiCard
          :card="card"
          :animate="true"
          @click="cardsStore.activeCard = card"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
div.kanji-card {
  margin-left: -5px;
  margin-right: -5px;
}
</style>
