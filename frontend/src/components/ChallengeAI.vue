<script setup lang="ts">
import { watch, ref } from "vue";
import LoadingAlert from "./LoadingAlert.vue";
import { useCardsStore } from "../stores/cards.store";
import KanjiCardDTO from "../types/KanjiCardDTO";
import Api from "@api";

const cardsStore = useCardsStore();

const loading = ref<boolean>(false);
const question = ref<string>("");

function getRandomKanji(): KanjiCardDTO {
  const randomIndex = Math.floor(Math.random() * cardsStore.deck.length);
  return cardsStore.deck[randomIndex];
}

function getQuestion() {
  loading.value = true;

  const kanji = getRandomKanji();

  Api.get(`get-question/${kanji.id}`)
    .then((response: { data: { question: string; answer: string } }) => {
      question.value = response.data.question;
    })
    .finally(() => {
      loading.value = false;
    });
}

watch(
  () => cardsStore.deck,
  (): void => {
    getQuestion();
  }
);
</script>

<template>
  <div
    id="ai-card"
    class="card border-4 flex gap-2 items-center justify-center flex-col bg-zinc-50 dark:bg-gray-950 dark:border-gray-500"
  >
    <div
      class="text-3xl font-mono dark:text-white text-black lg:px-40 text-center"
    >
      {{ question }}
    </div>

    <LoadingAlert v-if="loading" />
  </div>
</template>

<style scoped>
div#ai-card {
  min-height: 50vh;
}
</style>
