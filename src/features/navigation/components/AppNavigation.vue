<script setup>
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    icon: "house",
  },
  {
    name: "Explore",
    path: "/explore",
    icon: "search",
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: "bell",
  },
  {
    name: "Messages",
    path: "/messages",
    icon: "envelope",
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: "bookmark",
  },
  {
    name: "Lists",
    path: "/lists",
    icon: "list-ul",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "person",
  },
  {
    name: "More",
    path: "/more",
    icon: "plus-circle",
  },
];
</script>

<template>
  <nav class="nav">
    <a v-for="route in routes" :href="route.path" class="link">
      <AppIcon :icon="route.icon" size="lg" class="icon" />
      {{ route.name }}
    </a>

    <AppButton class="button"> Post </AppButton>
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
  font-size: 19px;
  color: $color-dark;
}

.link:hover {
  background-color: $color-light-hover;
}
.icon {
  margin-right: spacing(4);
}

.button {
  margin-top: spacing(5);
}
</style>
