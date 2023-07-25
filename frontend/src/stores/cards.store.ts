import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import KanjiCardDTO from "../types/KanjiCardDTO";
import Question from "../types/QuestionDTO";

export const useCardsStore = defineStore("cards", () => {
  const state = reactive({
    cards: [] as KanjiCardDTO[],
    activeCard: undefined as KanjiCardDTO | undefined,
    deck: [] as KanjiCardDTO[],
    question: undefined as Question | undefined,
    questionKey: 0,
    isMarked: false,
  });

  const isCorrect = computed(() => {
    return state.activeCard?.kanji === state.question?.answer;
  });

  const resetCard = () => {
    state.activeCard = undefined;
  };

  const setRandomDeck = (size: number) => {
    resetCard();
    let shuffled = state.cards.map((c) => Object.assign({}, c));
    shuffled = shuffled.sort(() => 0.5 - Math.random());
    state.deck = shuffled.slice(0, size);
  };

  const updateQuestion = () => {
    resetCard();

    if (state.question) {
      state.questionKey += 1;
    }
  };

  const markQuestion = () => {
    state.isMarked = true;

    setTimeout(() => {
      state.isMarked = false;
      setRandomDeck(5);
      updateQuestion();
    }, 5000);
  };

  return {
    state,
    isCorrect,
    resetCard,
    setRandomDeck,
    updateQuestion,
    markQuestion,
  };
});
