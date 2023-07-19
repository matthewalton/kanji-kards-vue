import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: ref<string>(""),
  }),
  getters: {
    getTheme(): string {
      if (this.theme) {
        return this.theme;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    },
    getOppositeTheme(): string {
      return this.getTheme === "dark" ? "light" : "dark";
    },
  },
  actions: {
    setTheme(): void {
      if (this.getTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    toggleTheme(): void {
      this.theme = this.getTheme === "dark" ? "light" : "dark";
      this.setTheme();
    },
  },
  persist: true,
});
