<script setup>
import { TweetSingle, useTweetList } from "@/features/tweets";
const { tweets, fetchTweetList } = useTweetList();

fetchTweetList()

</script>

<template>
  <div class="tweet-list" v-if="tweets?.value">
    <TweetSingle :key="index" v-for="(tweet, index) in tweets.value" :tweet="tweet" />
  </div>
</template>

<style lang="scss" scoped>
.tweet-list {
  display: flex;
  flex-direction: column;
}
</style>
