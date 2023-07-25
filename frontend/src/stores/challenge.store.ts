import { defineStore } from "pinia";
import { ref, computed } from "vue";
import KanjiCardDTO from "../types/KanjiCardDTO";
import Question from "../types/QuestionDTO";
import { useCardsStore } from "./cards.store";

export const useChallengeStore = defineStore("challenge", () => {
  const deck = ref<KanjiCardDTO[]>([]);
  const question = ref<Question>();
  const questionKey = ref<number>(0);
  const inProgress = ref<boolean>(false);
  const isMarked = ref<boolean>(false);

  const cardsStore = useCardsStore();

  const isCorrect = computed(() => {
    return cardsStore.activeCard?.kanji === question.value?.answer;
  });

  const startChallenge = () => {
    inProgress.value = true;
    setRandomDeck(5);
    updateQuestion();
  };

  const setRandomDeck = (size: number) => {
    cardsStore.resetCard();
    let shuffled = cardsStore.cards.map((c) => Object.assign({}, c));
    shuffled = shuffled.sort(() => 0.5 - Math.random());
    deck.value = shuffled.slice(0, size);
  };

  const updateQuestion = () => {
    cardsStore.resetCard();

    if (question.value) {
      questionKey.value += 1;
    }
  };

  const markQuestion = () => {
    isMarked.value = true;

    setTimeout(() => {
      isMarked.value = false;
      setRandomDeck(5);
      updateQuestion();
    }, 5000);
  };

  return {
    deck,
    question,
    questionKey,
    inProgress,
    isMarked,
    isCorrect,
    startChallenge,
    setRandomDeck,
    updateQuestion,
    markQuestion,
  };
});
