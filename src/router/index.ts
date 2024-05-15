import { createRouter, createWebHashHistory } from "vue-router";
import scrollBehavior from "./scrollBehavior";
import redirectAuthenticatedUser from "./redirectAuthenticatedUser";

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
};

const routes = [
  {
    path: paths.timeline,
    components: {
      default: () => import("@/pages/TimelinePage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "TrendsWidget", "WhoToFollowWidget"],
    },
  },

  {
    path: paths.explore,
    components: {
      default: () => import("@/pages/ExplorePage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "WhoToFollowWidget"],
    },
  },
  {
    path: paths.tweet,
    components: {
      default: () => import("@/pages/TweetPage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "TrendsWidget"],
    },
  },
  {
    path: paths.trends,
    components: {
      default: () => import("@/pages/TrendsPage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "WhoToFollowWidget"],
    },
  },
  {
    path: paths.connect,
    components: {
      default: () => import("@/pages/ConnectPage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "TrendsWidget"],
    },
  },
  {
    path: paths.bookmarks,
    components: {
      default: () => import("@/pages/BookmarksPage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "TrendsWidget", "WhoToFollowWidget"],
    },
  },
  {
    path: paths.notifications,
    components: {
      default: () => import("@/pages/NotificationsPage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "TrendsWidget", "WhoToFollowWidget"],
    },
  },
  {
    path: paths.conversation,
    components: {
      default: () => import("@/pages/ConversationPage.vue"),
    },
    meta: {
      layout: "TwoColumnLayout",
    },
  },
  {
    path: paths.messages,
    components: {
      default: () => import("@/pages/MessagesPage.vue"),
    },
    meta: {
      layout: "TwoColumnLayout",
    },
  },
  {
    path: paths.search,
    components: {
      default: () => import("@/pages/SearchPage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["TrendsWidget", "WhoToFollowWidget"],
    },
  },
  {
    path: paths.login,
    component: () => import("@/pages/LoginPage.vue"),
    meta: {
      layout: "BlankLayout",
    },
    beforeEnter: redirectAuthenticatedUser,
  },
  {
    path: paths.register,
    component: () => import("@/pages/RegisterPage.vue"),
    meta: {
      layout: "BlankLayout",
    },
    beforeEnter: redirectAuthenticatedUser,
  },
  {
    path: paths.profile,
    components: {
      default: () => import("@/pages/ProfilePage.vue"),
      sidebar: () => import("@/layouts/AppSidebar.vue"),
    },
    meta: {
      layout: "ThreeColumnLayout",
      sidebar: ["SearchWidget", "TrendsWidget"],
    },
  },
  {
    path: paths.notFound,
    component: () => import("@/pages/NotFound.vue"),
    meta: {
      layout: "TwoColumnLayout",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior,
});

export default router;
