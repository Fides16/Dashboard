import { createRouter, createWebHistory } from "vue-router";
import noAuth from "../components/LayoutNoAuth.vue";
import HomeView from "../views/HomeView.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: noAuth, public: true },
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || to.meta?.scrollPos || { top: 0, left: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

export default router;
