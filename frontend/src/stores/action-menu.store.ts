import { defineStore } from "pinia";
import { ref } from "vue";

export const useActionMenuStore = defineStore("action-menu", () => {
  const activeMenuId = ref<string>("");

  const setActiveMenu = (id: string) => {
    activeMenuId.value = id;
  };

  return {
    activeMenuId,
    setActiveMenu,
  };
});
