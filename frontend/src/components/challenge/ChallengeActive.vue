<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { useCardsStore } from "../../stores/cards.store";
import { useChallengeStore } from "../../stores/challenge.store";

const cardsStore = useCardsStore();
const challengeStore = useChallengeStore();

const questionElem = ref<HTMLElement>();
let words: string[] = [];

function showQuestion(animateText = true): void {
  if (!challengeStore.question) return;

  if (!animateText && questionElem.value) {
    questionElem.value.innerHTML = challengeStore.question.question;
    return;
  }

  words = challengeStore.question.question.split("");

  if (questionElem.value) {
    questionElem.value.innerHTML = "";
  }

  animate();
}

function animate(): void {
  if (questionElem.value && words.length > 0) {
    questionElem.value.innerHTML += words.shift();
    setTimeout(animate, 50);
  }
}

watch(
  () => challengeStore.question,
  () => {
    showQuestion();
  }
);

onMounted(() => {
  showQuestion(false);
});
</script>

<template>
  <div v-if="challengeStore.isMarked">
    <div class="text-3xl font-mono dark:text-white text-black text-wrap">
      {{ challengeStore.question?.question }}
    </div>

    <div class="flex justify-around mt-5">
      <div class="flex flex-col gap-2">
        <div
          class="card w-max border-4 transition ease-in-out hover:shadow text-gray-200"
          :class="{
            'border-green-900 bg-green-500': challengeStore.isCorrect,
            'border-red-900 bg-red-500': !challengeStore.isCorrect,
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
            {{ challengeStore.question?.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    ref="questionElem"
    class="text-3xl font-mono dark:text-white text-black text-wrap"
  ></div>
</template>
