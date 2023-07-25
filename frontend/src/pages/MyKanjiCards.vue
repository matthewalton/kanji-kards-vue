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

onMounted(() => {
  if (!cardsStore.state.cards.length) {
    Api.get("/cards").then((response: { data: KanjiCardDTO[] }) => {
      cardsStore.state.cards = response.data;
    });
  }
});
</script>

<template>
  <h1 class="text-5xl mb-5">My Cards</h1>

  <StudyKanjiCard v-if="cardsStore.state.activeCard" />
  <div v-else class="flex flex-row flex-wrap gap-3">
    <div v-for="card in cardsStore.state.cards" :key="card.id">
      <KanjiCard :card="card" @click="cardsStore.state.activeCard = card" />
    </div>
  </div>
</template>
