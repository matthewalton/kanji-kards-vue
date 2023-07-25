<script setup lang="ts">
import Api from "@api";
import KanjiCardDTO from "../types/KanjiCardDTO";
import { useCardsStore } from "../stores/cards.store";
import { onMounted } from "vue";
import KanjiCard from "../components/cards/KanjiCard.vue";
import { useActionMenuStore } from "../stores/action-menu.store";
import StudyKanjiCard from "../components/cards/StudyKanjiCard.vue";

const cardsStore = useCardsStore();
const actionMenuStore = useActionMenuStore();
actionMenuStore.activeMenuId = "myKanjiCards";

onMounted(async () => {
  if (!cardsStore.cards.length) {
    try {
      const response: { data: KanjiCardDTO[] } = await Api.get("/cards");
      cardsStore.cards = response.data;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }
});
</script>

<template>
  <h1 class="text-5xl mb-5">My Cards</h1>

  <StudyKanjiCard v-if="cardsStore.activeCard" />
  <div v-else class="flex flex-row flex-wrap gap-3">
    <div v-for="card in cardsStore.cards" :key="card.id">
      <KanjiCard :card="card" @click="cardsStore.activeCard = card" />
    </div>
  </div>
</template>
