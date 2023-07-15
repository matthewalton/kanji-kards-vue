<script setup lang="ts">
import Api from "@api";
import KanjiCardDTO from "../types/KanjiCardDTO";
import { useCardsStore } from "../stores/cards.store";
import { onMounted } from "vue";
import KanjiCardLink from "../components/KanjiCardLink.vue";

const cardsStore = useCardsStore();

onMounted(() => {
  if (!cardsStore.cards.length) {
    Api.get("/cards").then((response: { data: KanjiCardDTO[] }) => {
      cardsStore.cards = response.data;
    });
  }
});
</script>

<template>
  <div class="d-flex">
    <div>
      <h1>My Cards</h1>

      <div class="row align-items-stretch mt-4">
        <div v-for="card in cardsStore.cards" class="col-auto mb-4">
          <router-link to="">
            <KanjiCardLink :card="card" />
          </router-link>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>
