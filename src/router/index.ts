import { createRouter, createWebHashHistory } from "vue-router";
import scrollBehavior from "./scrollBehavior";
import redirectAuthenticatedUser from "./redirectAuthenticatedUser";

import AppButton from "@/core-ui/components/AppButton.vue";

export const paths = {
  timeline: "/",
  explore: "/explore",
  tweet: "/status/:id",
  trends: "/trends",
  connect: "/connect",
  bookmarks: "/bookmarks",
  notifications: "/notifications",
  conversation: "/conversation/:id",
  messages: "/messages",
  search: "/search",
  login: "/login",
  register: "/register",
  profile: "/:id",
  notFound: "/:pathMatch(.*)*",
} as const;

const routes = [
  { path: paths.timeline, component: () => import("@/pages/TimelinePage.vue") },
  { path: paths.explore, component: () => import("@/pages/ExplorePage.vue") },
  { path: paths.tweet, component: () => import("@/pages/TweetPage.vue") },
  { path: paths.trends, component: () => import("@/pages/TrendsPage.vue") },
  { path: paths.connect, component: () => import("@/pages/ConnectPage.vue") },
  {
    path: paths.bookmarks,
    component: () => import("@/pages/BookmarksPage.vue"),
  },
  {
    path: paths.notifications,
    component: () => import("@/pages/NotificationsPage.vue"),
  },
  {
    path: paths.conversation,
    component: () => import("@/pages/ConversationPage.vue"),
  },
  { path: paths.messages, component: () => import("@/pages/MessagesPage.vue") },
  { path: paths.search, component: () => import("@/pages/SearchPage.vue") },
  {
    path: paths.login,
    component: () => import("@/pages/LoginPage.vue"),
    beforeEnter: redirectAuthenticatedUser,
  },
  {
    path: paths.register,
    component: () => import("@/pages/RegisterPage.vue"),
    beforeEnter: redirectAuthenticatedUser,
  },
  { path: paths.profile, component: () => import("@/pages/ProfilePage.vue") },
  { path: paths.notFound, component: () => import("@/pages/NotFound.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior,
});

export default router;
