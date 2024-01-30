<script setup>
import { ref } from "vue";
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetList, tweetListApiCall } from "@/features/tweets";

const tweets = ref();
tweets.value = await tweetListApiCall();
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Bookmarks</PageTitle>
    <TweetList :tweets="tweets" />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>
