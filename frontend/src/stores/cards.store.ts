import { defineStore } from "pinia";
import { ref } from "vue";
import KanjiCardDTO from "../types/KanjiCardDTO";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    cards: ref<KanjiCardDTO[]>([]),
    activeCard: ref<KanjiCardDTO>(),
    deck: ref<KanjiCardDTO[]>([]),
  }),
  actions: {
    resetCard(): void {
      this.activeCard = undefined;
    },
    setRandomDeck(size: number): void {
      let shuffled = this.cards.map((c) => Object.assign({}, c));
      shuffled = shuffled.sort(() => 0.5 - Math.random());
      this.deck = shuffled.slice(0, size);
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
