<script setup>
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";
import { paths } from "@/router";
import { TweetCreateModal } from "@/features/tweet-create";
import { MqResponsive } from "vue3-mq";

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
  {
    name: "Bookmarks",
    path: paths.bookmarks,
    icon: "bookmark",
  },
  {
    name: "Profile",
    path: paths.profile,
    icon: "person",
  },
];
</script>

<template>
  <nav class="nav">
    <RouterLink v-for="route in routes" :to="route.path" class="link">
      <AppIcon :icon="route.icon" size="3x" class="icon" />
      <span class="route-name">{{ route.name }}</span>
    </RouterLink>

    <TweetCreateModal>
      <AppButton class="button">
        <MqResponsive target="xl+"> Post </MqResponsive>
        <MqResponsive target="lg-">
          <AppIcon icon="plus" size="3x" fill="white" />
        </MqResponsive>
      </AppButton>
    </TweetCreateModal>
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
  border-radius: $border-radius-pill;
  font-size: $font-size-3;
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

.button {
  margin-top: spacing(3);
  width: 100%;
  padding: spacing(3);
}
</style>
