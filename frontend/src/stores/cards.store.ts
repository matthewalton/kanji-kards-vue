import { defineStore } from "pinia";
import { ref } from "vue";
import KanjiCardDTO from "../types/KanjiCardDTO";

export const useCardsStore = defineStore(
  "cards",
  () => {
    const cards = ref<KanjiCardDTO[]>([]);
    const activeCard = ref<KanjiCardDTO>();

    const resetCard = () => {
      activeCard.value = undefined;
    };

    return {
      cards,
      activeCard,
      resetCard,
    };
  },
  { persist: true }
);
