import { createRouter, createWebHashHistory } from "vue-router";

export const paths = {
  timeline: "/",
  explore: "/explore",
  tweet: "/status/:id",
  profile: "/:id",
};

const routes = [
  { path: paths.timeline, component: () => import("@/pages/TimelinePage.vue") },
  { path: paths.explore, component: () => import("@/pages/ExplorePage.vue") },
  { path: paths.tweet, component: () => import("@/pages/TweetPage.vue") },
  { path: paths.profile, component: () => import("@/pages/ProfilePage.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
