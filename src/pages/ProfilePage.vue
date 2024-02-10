<script setup>
import { ref } from "vue";
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
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
  <ThreeColumnLayout>
    <PageTitle has-back-button>Profile</PageTitle>
    <ProfileUserInfo :profile="profile" v-if="profile" />
    <TweetList :tweets="profile.tweets" :owner="profile" />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
    </template>
  </ThreeColumnLayout>
</template>
