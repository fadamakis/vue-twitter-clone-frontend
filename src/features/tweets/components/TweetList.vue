<script setup>
import { TweetSingle } from "@/features/tweets";

defineProps(["tweets", "owner"]);
</script>

<template>
  <div class="tweet-list" v-if="tweets">
    <TweetSingle
      :key="index"
      v-for="(tweet, index) in tweets"
      :tweet="tweet"
      :owner="owner"
    />
  </div>
</template>

<style lang="scss" scoped>
.tweet-list {
  display: flex;
  flex-direction: column;
}
</style>
