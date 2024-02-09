<script setup lang="ts">
import { AppNavigation } from "@/features/navigation";
import AppLogo from "@/components/AppLogo.vue";
import { UserAvatar } from "@/features/profile";

import { useAuth } from "@/features/auth";
const { currentUser } = useAuth();
</script>

<template>
  <header>
    <RouterLink :to="currentUser.username">
      <UserAvatar size="sm" :img="currentUser.avatar" />
    </RouterLink>
    <div class="logo">
      <AppLogo />
    </div>
    <AppNavigation />
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: spacing(2);
  display: flex;
  position: sticky;
  top: 0;
  background: $color-white;
  width: 100%;
  border-bottom: 1px solid $color-border;
  align-items: center;
  z-index: 1;
}

.logo {
  display: flex;
  justify-content: center;
  flex: 1;
  margin-right: spacing(5);
}
</style>
