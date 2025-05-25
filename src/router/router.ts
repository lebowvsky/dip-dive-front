import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "@/Pages/HomePage.vue";

const routes = [{ path: "/", component: HomePage }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
