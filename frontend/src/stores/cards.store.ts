import { defineStore } from "pinia";
import { ref } from "vue";
import KanjiCard from "../types/KanjiCardDTO";

export const useCardsStore = defineStore("cards", {
  state: () => ({
    cards: ref<KanjiCard[]>([]),
    activeCard: ref<KanjiCard>(),
  }),
  actions: {
    resetCard(): void {
      this.activeCard = undefined;
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
