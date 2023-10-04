<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendRow } from "@/features/widgets";
import { SearchWidget } from "@/features/search";

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
  {
    id: 5,
    title: "Auto",
    hashtag: "#hamilton",
    tweets: 123,
  },
];
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Trends</PageTitle>
    <div class="trends">
      <TrendRow v-for="(trend, index) in trends" :trend="trend" :index="index" />
    </div>
    <template #sidebar>
      <SearchWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>

<style scoped lang="scss">
.trends {
  padding: spacing(4);
}
</style>
