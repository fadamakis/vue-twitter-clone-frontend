<script setup lang="ts">
import { computed } from "vue";
import AppButton from "@/components/AppButton.vue";
import { followApiCall, unFollowApiCall, useProfile } from "@/features/profile";

import { useAuth } from "@/features/auth";
const { currentUser } = useAuth();

const { profile } = useProfile();

async function followUser() {
  await followApiCall(profile.value._id);
  profile.value.followers.push(currentUser.value._id);
}

async function unFollowUser() {
  await unFollowApiCall(profile.value._id);
  profile.value.followers = profile.value.followers.filter(
    (follower) => follower !== currentUser.value._id
  );
}

const isFollowing = computed(() => {
  return profile.value.followers.includes(currentUser.value._id);
});
</script>

<template>
  <AppButton color="primary" size="sm" @click="followUser" v-if="!isFollowing">
    Follow
  </AppButton>
  <AppButton color="light" size="sm" @click="unFollowUser" v-else> Unfollow </AppButton>
</template>
