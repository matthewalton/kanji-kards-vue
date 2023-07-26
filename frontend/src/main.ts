import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { useCardsStore } from "./stores/cards.store";
import Api from "@api";
import KanjiCardDTO from "./types/KanjiCardDTO";

import "./assets/css/index.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

app.mixin({
  async beforeCreate() {
    const cardsStore = useCardsStore();

    try {
      const response: { data: KanjiCardDTO[] } = await Api.get("/cards");
      cardsStore.cards = response.data;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  },
});

app.use(pinia);
app.use(router);
app.mount("#app");
