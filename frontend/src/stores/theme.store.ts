import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<string>("");

  const getTheme = computed(() => {
    if (theme.value) {
      return theme.value;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const getOppositeTheme = computed(() => {
    return getTheme.value === "dark" ? "light" : "dark";
  });

  const setTheme = () => {
    if (getTheme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    theme.value = getTheme.value === "dark" ? "light" : "dark";
    setTheme();
  };

  return {
    theme,
    getTheme,
    getOppositeTheme,
    setTheme,
    toggleTheme,
  };
});
