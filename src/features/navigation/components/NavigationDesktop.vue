<script setup>
import AppIcon from "@/core-ui/components/AppIcon.vue";
import { paths } from "@/router";
import { TweetCreateActionDesktop } from "@/features/tweet-create";
import { useAuth } from "@/features/auth";

const { currentUser } = useAuth();

const routes = [
  {
    name: "Home",
    path: paths.timeline,
    icon: "house",
  },
  {
    name: "Explore",
    path: paths.explore,
    icon: "search-heart",
  },
  {
    name: "Notifications",
    path: paths.notifications,
    icon: "bell",
  },
  {
    name: "Messages",
    path: paths.messages,
    icon: "envelope",
  },
  {
    name: "Bookmarks",
    path: paths.bookmarks,
    icon: "bookmark",
  },
  {
    name: "Profile",
    path: `/${currentUser.value.username}`,
    icon: "person",
  },
];
</script>

<template>
  <nav class="nav">
    <RouterLink
      v-for="route in routes"
      :to="route.path"
      class="link"
      v-slot="{ isActive }"
    >
      <AppIcon
        :icon="isActive ? route.icon + '-fill' : route.icon"
        size="3x"
        class="icon"
      />
      <span class="route-name">{{ route.name }}</span>
    </RouterLink>

    <TweetCreateActionDesktop />
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  margin-top: spacing(3);
  flex: 1;
}

.link {
  display: flex;
  align-items: center;
  padding: spacing(3);
  margin-top: spacing(2);
  border-radius: $border-radius-pill;
  font-size: $font-size-3;
  color: $color-dark;
}

.link:hover {
  background-color: $color-light-hover;
}
.router-link-active {
  font-weight: bold;
}

.route-name {
  display: none;
  @include breakpoint(xl) {
    display: flex;
  }
}
.icon {
  flex-shrink: 0;
  @include breakpoint(xl) {
    margin-right: spacing(4);
  }
}
</style>
