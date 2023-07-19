import { createRouter, createWebHistory } from "vue-router";

import Challenge from "../pages/Challenge.vue";
import Home from "../pages/Home.vue";
import MyKanjiCards from "../pages/MyKanjiCards.vue";
import Settings from "../pages/Settings.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cards", component: MyKanjiCards },
  { path: "/settings", component: Settings },
  { path: "/challenge", component: Challenge },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
