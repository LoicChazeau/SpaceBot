import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/header",
    name: "header",
    component: () =>
      import(/* webpackChunkName: "header" */ "../components/header.vue"),
  },
  {
    path: "/footer",
    name: "footer",
    component: () =>
      import(/* webpackChunkName: "header" */ "../components/footer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
