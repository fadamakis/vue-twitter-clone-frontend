<script setup>
import { ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import { TweetList, tweetListApiCall } from "@/features/tweets";

const tweets = ref();
tweets.value = await tweetListApiCall();
</script>

<template>
  <PageTitle>Bookmarks</PageTitle>
  <TweetList :tweets="tweets" />
</template>
