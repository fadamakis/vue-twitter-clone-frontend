<script setup lang="ts">
import { computed } from "vue";
import AppButton from "@/ui/components/AppButton.vue";
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

const isCurrentUser = computed(() => {
  return currentUser.value._id === props.profile._id;
});
</script>

<template>
  <div v-if="isCurrentUser" class="current-user-indicator">That's you!</div>
  <AppButton color="dark" size="sm" @click="followUser" v-else-if="!isFollowing">
    Follow
  </AppButton>
  <AppButton color="light" size="sm" @click="unFollowUser" v-else> Unfollow </AppButton>
</template>

<style scoped lang="scss">
.current-user-indicator {
  font-size: $font-size-0;
  border: 1px solid $color-dark;
  padding: spacing(1);
  border-radius: spacing(1);
}
</style>
