<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetSingle } from "@/features/tweets";
import { TweetReplyForm } from "@/features/tweet-create";
import { TweetList } from "@/features/tweets";

const tweet = {
  user: {
    name: "Fotis Adamakis",
    handle: "@fadamakis",
    image: "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
  },
  body: "Hello World!",
  date: "16 April",
};
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Post</PageTitle>
    <TweetSingle :tweet="tweet" />
    <TweetReplyForm />
    <TweetList />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
    </template>
  </ThreeColumnLayout>
</template>
