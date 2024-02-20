<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { ProfileUserInfo } from "@/features/profile";
import { TweetList } from "@/features/tweets";
import { profileApiCall, useProfile } from "@/features/profile";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();
const { profile } = useProfile();

profile.value = await profileApiCall(route.params.id);

onBeforeRouteUpdate(async (to) => {
  profile.value = await profileApiCall(to.params.id);
});
</script>

<template>
  <PageTitle has-back-button>Profile</PageTitle>
  <ProfileUserInfo :profile="profile" v-if="profile" />
  <TweetList :tweets="profile.tweets" :owner="profile" />
</template>
