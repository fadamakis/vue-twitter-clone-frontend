<script setup>
import { ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendRow, trendsApiCall } from "@/features/widgets";
import { TweetList, tweetListApiCall } from "@/features/tweets";

const tweets = ref();
tweets.value = await tweetListApiCall();

const trends = ref();
trends.value = await trendsApiCall(5).then((response) => response.trends);
</script>

<template>
  <PageTitle>Explore</PageTitle>
  <div class="trends">
    <TrendRow v-for="(trend, index) in trends" :trend="trend" :index="index" />
  </div>
  <TweetList :tweets="tweets" />
</template>

<style scoped lang="scss">
.trends {
  padding: spacing(3);
  border-bottom: 1px solid $color-border;
}
</style>
