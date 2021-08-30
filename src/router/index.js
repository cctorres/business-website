import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: () => import("../views/Nosotros.vue"),
  },
  {
    path: "/miembros",
    name: "Miembros",
    component: () => import("../views/Miembros.vue"),
  },
  {
    path: "/tvshow",
    name: "TVShow",
    component: () => import("../views/TVShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
