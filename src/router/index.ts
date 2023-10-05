import { createRouter, createWebHashHistory } from "vue-router";

export const paths = {
  timeline: "/",
  explore: "/explore",
  tweet: "/status/:id",
  trends: "/trends",
  connect: "/connect",
  bookmarks: "/bookmarks",
  profile: "/:id",
  notFound: "/:pathMatch(.*)*",
};

const routes = [
  { path: paths.timeline, component: () => import("@/pages/TimelinePage.vue") },
  { path: paths.explore, component: () => import("@/pages/ExplorePage.vue") },
  { path: paths.tweet, component: () => import("@/pages/TweetPage.vue") },
  { path: paths.trends, component: () => import("@/pages/TrendsPage.vue") },
  { path: paths.connect, component: () => import("@/pages/ConnectPage.vue") },
  { path: paths.bookmarks, component: () => import("@/pages/BookmarksPage.vue"), },
  { path: paths.profile, component: () => import("@/pages/ProfilePage.vue") },
  { path: paths.notFound, component: () => import("@/pages/NotFound.vue"), },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
