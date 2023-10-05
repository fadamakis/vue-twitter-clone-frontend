<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendRow, WhoToFollowWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import TweetList from "@/features/tweets/components/TweetList.vue";

const trends = [
  {
    id: 1,
    title: "Trending Globally",
    hashtag: "#iphone15",
    tweets: 5466,
  },
  {
    id: 2,
    title: "Fashion",
    hashtag: "#hi-Fashion",
    tweets: 8464,
  },
  {
    id: 3,
    title: "Formula 1",
    hashtag: "#ferrari",
    tweets: 5586,
  },
  {
    id: 4,
    title: "Auto Racing",
    hashtag: "#vettel",
    tweets: 9416,
  },
];
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Explore</PageTitle>
    <div class="trends">
      <TrendRow v-for="(trend, index) in trends" :trend="trend" :index="index" />
    </div>
    <TweetList />
    <template #sidebar>
      <SearchWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>

<style scoped lang="scss">
.trends {
  padding: spacing(3);
  border-bottom: 1px solid $color-border;
}
</style>
