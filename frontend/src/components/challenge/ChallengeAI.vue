<script setup lang="ts">
import { watch, ref } from "vue";
import LoadingAlert from "../LoadingAlert.vue";
import { useCardsStore } from "../../stores/cards.store";
import KanjiCardDTO from "../../types/KanjiCardDTO";
import Api from "@api";
import { AxiosError } from "axios";
import Question from "../../types/QuestionDTO";

const cardsStore = useCardsStore();

const loading = ref<boolean>(false);
const questionElem = ref<HTMLElement>();
let words: string[] = [];
const errorMessage = ref<string>("");

function getRandomKanji(): KanjiCardDTO {
  const randomIndex = Math.floor(Math.random() * cardsStore.deck.length);
  return cardsStore.deck[randomIndex];
}

function getQuestion(): void {
  // loading.value = true;
  errorMessage.value = "";
  // question.value = "";

  const kanji = getRandomKanji();

  Api.get(`get-question/${kanji.id}`)
    .then((response: { data: Question }) => {
      cardsStore.question = response.data;

      words = response.data.question.split("");

      if (questionElem.value) {
        questionElem.value.innerHTML = "";
      }

      animate();
    })
    .catch((error: AxiosError) => {
      errorMessage.value = error.message;
    })
    .finally(() => {
      // loading.value = false;
    });
}

function animate(): void {
  if (questionElem.value && words.length > 0) {
    questionElem.value.innerHTML += words.shift();
    setTimeout(animate, 50);
  }
}

watch(
  () => [cardsStore.deck, cardsStore.questionKey],
  (): void => {
    getQuestion();
  }
);

watch(
  () => [cardsStore.deck, cardsStore.questionKey],
  (): void => {
    getQuestion();
  }
);
</script>

<template>
  <div
    id="ai-card"
    class="card border-4 flex gap-5 items-center justify-center flex-col bg-zinc-50 dark:bg-gray-950 dark:border-gray-500"
  >
    <div class="lg:px-40 text-center">
      <div v-if="cardsStore.isMarked">
        <div class="text-3xl font-mono dark:text-white text-black text-wrap">
          {{ cardsStore.question?.question }}
        </div>

        <div class="flex justify-around mt-5">
          <div class="flex flex-col gap-2">
            <div
              class="card w-max border-4 transition ease-in-out hover:shadow text-gray-200"
              :class="{
                'border-green-900 bg-green-500': cardsStore.isCorrect,
                'border-red-900 bg-red-500': !cardsStore.isCorrect,
              }"
            >
              <div class="text-center text-4xl">
                {{ cardsStore.activeCard?.kanji }}
              </div>
            </div>

            <div class="flex flex-col">
              <span>{{ cardsStore.activeCard?.kun_readings }}</span>

              <span>{{ cardsStore.activeCard?.name }}</span>
            </div>
          </div>

          <div>
            <div
              class="card w-max border-4 transition ease-in-out hover:shadow text-gray-200 border-green-900 bg-green-500"
            >
              <div class="text-center text-4xl">
                {{ cardsStore.question?.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="errorMessage" class="text-red-500">
        {{ errorMessage }}
      </div>
      <div
        v-else
        ref="questionElem"
        class="text-3xl font-mono dark:text-white text-black text-wrap"
      ></div>
      <LoadingAlert v-if="loading" />
    </div>
  </div>
</template>

<style scoped>
div#ai-card {
  min-height: 50vh;
}
</style>
