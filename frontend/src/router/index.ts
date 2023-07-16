import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import MyKanjiCards from "../pages/MyKanjiCards.vue";
import Settings from "../pages/Settings.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cards", component: MyKanjiCards },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
