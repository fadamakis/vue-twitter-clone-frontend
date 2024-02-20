<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { TweetList, useTweetList } from "@/features/tweets";
import { TweetCreateFormTimeLine } from "@/features/tweet-create";
import { useMq } from "vue3-mq";
const mq = useMq();

const { tweets, fetchTweetList } = useTweetList();

await fetchTweetList();
</script>

<template>
  <PageTitle>Home</PageTitle>
  <TweetCreateFormTimeLine v-if="mq.mdPlus" />
  <TweetList :tweets="tweets" />
</template>
