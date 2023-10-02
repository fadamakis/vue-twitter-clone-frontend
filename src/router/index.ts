import { createRouter, createWebHashHistory } from "vue-router";

export const paths = {
  timeline: "/",
  explore: "/explore",
};

const routes = [
  { path: paths.timeline, component: () => import("@/pages/TimelinePage.vue") },
  { path: paths.explore, component: () => import("@/pages/ExplorePage.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
