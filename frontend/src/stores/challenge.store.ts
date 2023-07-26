import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import KanjiCardDTO from "../types/KanjiCardDTO";
import Question from "../types/QuestionDTO";
import { useCardsStore } from "./cards.store";
import Api from "@api";

export const useChallengeStore = defineStore(
  "challenge",
  () => {
    const deck = ref<KanjiCardDTO[]>([]);
    const question = ref<Question>();
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

    const resetChallenge = () => {
      inProgress.value = false;
      deck.value = [];
      question.value = undefined;
    };

    const getRandomKanji = (): KanjiCardDTO => {
      const randomIndex = Math.floor(Math.random() * deck.value.length);
      return deck.value[randomIndex];
    };

    const setRandomDeck = (size: number) => {
      cardsStore.resetCard();
      let shuffled = cardsStore.cards.map((c) => Object.assign({}, c));
      shuffled = shuffled.sort(() => 0.5 - Math.random());
      deck.value = shuffled.slice(0, size);
    };

    const setQuestion = async () => {
      if (!inProgress.value) return;

      try {
        const kanji = getRandomKanji();
        const response: { data: Question } = await Api.get(
          `get-question/${kanji.id}`
        );
        question.value = response.data;
      } catch (error) {
        console.log("An error occurred while fetching the question:", error);
      }
    };

    const updateQuestion = () => {
      cardsStore.resetCard();
      setQuestion();
    };

    const markQuestion = () => {
      isMarked.value = true;

      setTimeout(() => {
        isMarked.value = false;
        setRandomDeck(5);
        updateQuestion();
      }, 5000);
    };

    watch(
      () => deck.value,
      (): void => {
        setQuestion();
      }
    );

    return {
      deck,
      question,
      inProgress,
      isMarked,
      isCorrect,
      startChallenge,
      resetChallenge,
      setRandomDeck,
      updateQuestion,
      markQuestion,
    };
  },
  { persist: true }
);
