import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import MyPacks from "../components/MyPacks.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/packs", component: MyPacks },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
