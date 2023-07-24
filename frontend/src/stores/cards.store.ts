import { defineStore } from "pinia";
import { ref } from "vue";
import KanjiCardDTO from "../types/KanjiCardDTO";
import Question from "../types/QuestionDTO";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    cards: ref<KanjiCardDTO[]>([]),
    activeCard: ref<KanjiCardDTO>(),
    deck: ref<KanjiCardDTO[]>([]),
    question: ref<Question>(),
    questionKey: ref<number>(0),
    isMarked: ref<boolean>(false),
  }),
  getters: {
    isCorrect(): boolean {
      return this.activeCard?.kanji === this.question?.answer;
    },
  },
  actions: {
    resetCard(): void {
      this.activeCard = undefined;
    },
    setRandomDeck(size: number): void {
      this.resetCard();
      let shuffled = this.cards.map((c) => Object.assign({}, c));
      shuffled = shuffled.sort(() => 0.5 - Math.random());
      this.deck = shuffled.slice(0, size);
    },
    updateQuestion(): void {
      this.resetCard();

      if (this.question) {
        this.questionKey += 1;
      }
    },
    markQuestion(): void {
      this.isMarked = true;

      setTimeout(() => {
        this.isMarked = false;
        this.setRandomDeck(5);
        this.updateQuestion();
      }, 5000);
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
