<script setup>
import { ref } from "vue";
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { ProfileCard, ProfileFollowButton } from "@/features/profile";
import { TweetList, tweetSearchApiCall } from "@/features/tweets";
import AppTabs from "@/ui/components/AppTabs.vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import EmptyState from "@/components/EmptyState.vue";

const searchResults = ref();

const searchTerm = useRoute().query.q;

searchResults.value = await tweetSearchApiCall(searchTerm);

onBeforeRouteUpdate(async (to) => {
  searchResults.value = await tweetSearchApiCall(to.query.q);
});
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Search</PageTitle>
    <div class="search-wrapper">
      <SearchWidget />
    </div>
    <AppTabs :tabs="['Tweets', 'People']">
      <template #tab1>
        <TweetList :tweets="searchResults.tweets" v-if="searchResults.tweets.length" />
        <EmptyState v-else />
      </template>
      <template #tab2>
        <div class="profiles" v-if="searchResults.profiles.length">
          <ProfileCard v-for="profile in searchResults.profiles" :profile="profile">
            <template #action>
              <ProfileFollowButton :profile="profile" />
            </template>
          </ProfileCard>
        </div>
        <EmptyState v-else />
      </template>
    </AppTabs>
    <template #sidebar>
      <TrendsWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>

<style lang="scss" scoped>
.search-wrapper {
  padding: spacing(3);
}
.profiles {
  padding: 0 spacing(4);
}
</style>
