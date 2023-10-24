<script setup>
import AppIcon from "@/components/AppIcon.vue";
import { paths } from "@/router";
import { TweetCreateActionMobile } from "@/features/tweet-create";

const routes = [
  {
    name: "Home",
    path: paths.timeline,
    icon: "house",
  },
  {
    name: "Explore",
    path: paths.explore,
    icon: "search",
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
];
</script>

<template>
  <nav class="nav">
    <RouterLink v-for="route in routes" :to="route.path" class="link">
      <AppIcon :icon="route.icon" size="3x" class="icon" />
      <span class="route-name">{{ route.name }}</span>
    </RouterLink>
  </nav>

  <TweetCreateActionMobile />
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $color-white;
  justify-content: space-around;
  border-top: 1px solid $color-border;
  padding: spacing(2) 0;
}

.link {
  display: flex;
  align-items: center;
  padding: spacing(3);
  border-radius: $border-radius-pill;
  font-size: $font-size-2;
  color: $color-dark;
}

.route-name {
  display: none;
  @include breakpoint(xl) {
    display: flex;
  }
}

.link:hover {
  background-color: $color-light-hover;
}
.icon {
  flex-shrink: 0;
  @include breakpoint(xl) {
    margin-right: spacing(4);
  }
}
</style>
