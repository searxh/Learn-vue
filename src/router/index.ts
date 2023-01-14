import { createRouter, createWebHistory, Router } from "vue-router";
import AboutV from "../views/AboutV.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: AboutV,
  },
];

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
