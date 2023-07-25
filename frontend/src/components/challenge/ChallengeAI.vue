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
  const randomIndex = Math.floor(Math.random() * cardsStore.state.deck.length);
  return cardsStore.state.deck[randomIndex];
}

async function getQuestion(): Promise<void> {
  // loading.value = true;
  errorMessage.value = "";
  // question.value = "";

  try {
    const kanji = getRandomKanji();

    const response: { data: Question } = await Api.get(
      `get-question/${kanji.id}`
    );
    cardsStore.state.question = response.data;

    words = response.data.question.split("");

    if (questionElem.value) {
      questionElem.value.innerHTML = "";
    }

    animate();
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage.value = error.message;
    } else {
      errorMessage.value = "An error occurred while fetching the question.";
    }
  } finally {
    // loading.value = false;
  }
}

function animate(): void {
  if (questionElem.value && words.length > 0) {
    questionElem.value.innerHTML += words.shift();
    setTimeout(animate, 50);
  }
}

watch(
  () => [cardsStore.state.deck, cardsStore.state.questionKey],
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
      <div v-if="cardsStore.state.isMarked">
        <div class="text-3xl font-mono dark:text-white text-black text-wrap">
          {{ cardsStore.state.question?.question }}
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
                {{ cardsStore.state.activeCard?.kanji }}
              </div>
            </div>

            <div class="flex flex-col">
              <span>{{ cardsStore.state.activeCard?.kun_readings }}</span>

              <span>{{ cardsStore.state.activeCard?.name }}</span>
            </div>
          </div>

          <div>
            <div
              class="card w-max border-4 transition ease-in-out hover:shadow text-gray-200 border-green-900 bg-green-500"
            >
              <div class="text-center text-4xl">
                {{ cardsStore.state.question?.answer }}
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
