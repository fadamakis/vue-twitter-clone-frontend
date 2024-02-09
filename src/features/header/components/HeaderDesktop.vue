<script setup lang="ts">
import { AppNavigation } from "@/features/navigation";
import { ProfileCard } from "@/features/profile";
import AppLogo from "@/components/AppLogo.vue";
import { UserAvatar } from "@/features/profile";
import { useMq } from "vue3-mq";
const mq = useMq();

import { useAuth } from "@/features/auth";
const { currentUser } = useAuth();
</script>

<template>
  <header>
    <AppLogo />
    <AppNavigation />
    <ProfileCard v-if="mq.xlPlus" :profile="currentUser" />
    <RouterLink :to="currentUser.username" v-else>
      <UserAvatar class="user-avatar" :img="currentUser.avatar" />
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100vh;
  width: spacing(18);
  @include breakpoint(xl) {
    width: 20%;
  }
}
.user-avatar {
  align-self: center;
}
</style>
