<script setup lang="ts">
import { computed } from "vue";
import AppButton from "@/components/AppButton.vue";
import { followApiCall, unFollowApiCall } from "@/features/profile";

import { useAuth } from "@/features/auth";
const { currentUser } = useAuth();

const props = defineProps(["profile"]);

async function followUser() {
  await followApiCall(props.profile._id);
  props.profile.followers.push(currentUser.value._id);
}

async function unFollowUser() {
  await unFollowApiCall(props.profile._id);
  props.profile.followers = props.profile.followers.filter(
    (follower) => follower !== currentUser.value._id
  );
}

const isFollowing = computed(() => {
  return props.profile.followers.includes(currentUser.value._id);
});
</script>

<template>
  <AppButton color="dark" size="sm" @click="followUser" v-if="!isFollowing">
    Follow
  </AppButton>
  <AppButton color="light" size="sm" @click="unFollowUser" v-else> Unfollow </AppButton>
</template>
