<script setup>
import { useRoute, onBeforeRouteUpdate } from "vue-router";

import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetReplyForm } from "@/features/tweet-create";
import { TweetSingle, TweetList, useSingleTweet } from "@/features/tweets";

const tweetId = useRoute().params.id;

const { tweet, fetchSingleTweet } = useSingleTweet();

await fetchSingleTweet(tweetId);

onBeforeRouteUpdate(async (to) => {
  await fetchSingleTweet(to.params.id);
});
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Post</PageTitle>
    <TweetSingle :tweet="tweet" :owner="tweet.owner" v-if="tweet" />
    <TweetReplyForm />
    <TweetList :tweet="tweet.replies" v-if="tweet" />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
    </template>
  </ThreeColumnLayout>
</template>
