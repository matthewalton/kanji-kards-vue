import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import MyKanjiCards from "../pages/MyKanjiCards.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cards", component: MyKanjiCards },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
