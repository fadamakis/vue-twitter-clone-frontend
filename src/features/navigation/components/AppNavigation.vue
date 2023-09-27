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

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  flex: 1;
}

.link {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 30px;
  font-size: 19px;
  color: rgba(15, 20, 25, 1);
}

.link:hover {
  background-color: rgba(15, 20, 25, 0.1);
}
.icon {
  margin-right: 16px;
}

.button {
  margin-top: 20px;
}
</style>
