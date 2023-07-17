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
  <div class="d-flex gap-3 flex-column">
    <router-link to="/cards"
      ><i class="bi bi-backspace-fill fs-2"></i
    ></router-link>

    <ChallengeAI />

    <div class="card rounded bg-body-tertiary w-100">
      <div class="card-body d-flex justify-content-center">
        <div v-for="card in cardsStore.deck" :key="card.id" class="kanji-card">
          <KanjiCard :card="card" />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <button
        class="btn btn-secondary btn-lg"
        @click="cardsStore.setRandomDeck(5)"
      >
        <i class="bi bi-shuffle"></i>
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
