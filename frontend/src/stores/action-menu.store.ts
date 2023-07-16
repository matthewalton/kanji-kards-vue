import { defineStore } from "pinia";
import { ref } from "vue";

export const useActionMenuStore = defineStore("action-menu", {
  state: () => ({
    activeMenuId: ref<string>(""),
  }),
  actions: {
    setActiveMenu(id: string): void {
      this.activeMenuId = id;
    },
  },
});
