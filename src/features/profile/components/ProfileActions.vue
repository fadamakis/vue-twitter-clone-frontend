<script setup lang="ts">
import ProfileEditButton from "./ProfileEditButton.vue";
import ProfileLogoutButton from "./ProfileLogoutButton.vue";
import ProfileFollowButton from "./ProfileFollowButton.vue";

import { useAuth } from "@/features/auth";
const { currentUser } = useAuth();

defineProps(["profile"]);
</script>

<template>
  <div class="profile-actions">
    <template v-if="currentUser.username === profile.username">
      <ProfileEditButton />
      <ProfileLogoutButton />
    </template>
    <template v-if="currentUser.username !== profile.username">
      <ProfileFollowButton :profile="profile" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.profile-actions {
  display: flex;
  gap: spacing(2);
}
</style>
