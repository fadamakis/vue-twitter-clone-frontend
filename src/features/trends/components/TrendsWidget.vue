<script setup lang="ts">
import AppWidget from "@/components/AppWidget.vue";

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
    <div>
      <div v-for="(trend, index) in trends" class="trend">
        <div class="trend-title">{{ index + 1 }} · {{ trend.title }}</div>
        <div class="trend-hashtag">{{ trend.hashtag }}</div>
        <div class="trend-count">{{ trend.tweets }} posts</div>
      </div>
    </div>

    <div class="cta">Show more</div>
  </AppWidget>
</template>

<style lang="scss" scoped>
.trend {
  font-size: 13px;
  color: #536471;
  margin-bottom: 16px;
}

.trend-hashtag {
  font-size: 15px;
  font-weight: bold;
  color: #0f1419;
}
.cta {
  color: #1da1f2;
  font-size: 13px;
  font-weight: bold;
  margin-top: 12px;
}
</style>
