<script setup>
import { ref } from "vue";
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetList, useTweetList } from "@/features/tweets";
import { TweetCreateFormTimeLine } from "@/features/tweet-create";
import { useMq } from "vue3-mq";
const mq = useMq();

const { tweets, fetchTweetList } = useTweetList();

await fetchTweetList();
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Home</PageTitle>
    <TweetCreateFormTimeLine v-if="mq.mdPlus" />
    <TweetList :tweets="tweets" />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>
