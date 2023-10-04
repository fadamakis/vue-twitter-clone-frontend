<script setup lang="ts">
import { AppWidget, TrendRow } from "@/features/widgets";

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
  <AppWidget title="Trends">
    <TrendRow v-for="(trend, index) in trends" :trend="trend" :index="index" />

    <RouterLink to="/trends" class="cta">Show more</RouterLink>
  </AppWidget>
</template>

<style lang="scss" scoped>
.cta {
  color: $color-primary;
  font-size: $font-size-0;
  font-weight: bold;
  margin-top: spacing(3);
}
</style>
