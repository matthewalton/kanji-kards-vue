import { defineStore } from "pinia";
import { ref } from "vue";
import KanjiCard from "../types/KanjiCardDTO";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    cards: ref<KanjiCard[]>([]),
    currentCard: ref<number>(0),
  }),
  persist: {
    storage: sessionStorage,
  },
});
