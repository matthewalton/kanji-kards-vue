<script setup lang="ts">
import Api from "@api";
import KanjiCardDTO from "../types/KanjiCardDTO";
import { useCardsStore } from "../stores/cards.store";
import { onMounted } from "vue";
import KanjiCard from "../components/KanjiCard.vue";
import KanjiCardLink from "../components/KanjiCardLink.vue";
import { useActionMenuStore } from "../stores/action-menu.store";

const cardsStore = useCardsStore();
const actionMenuStore = useActionMenuStore();
actionMenuStore.activeMenuId = "myKanjiCards";

onMounted(() => {
  if (!cardsStore.cards.length) {
    Api.get("/cards").then((response: { data: KanjiCardDTO[] }) => {
      cardsStore.cards = response.data;
    });
  }
});
</script>

<template>
  <h1 class="mb-4">My Cards</h1>

  <KanjiCard v-if="cardsStore.activeCard" />
  <div v-else>
    <div class="row align-items-stretch">
      <div v-for="card in cardsStore.cards" class="col-auto mb-4">
        <KanjiCardLink :card="card" @click="cardsStore.activeCard = card" />
      </div>
    </div>
  </div>
</template>
