<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetSingle } from "@/features/tweets";
import { TweetReplyForm } from "@/features/tweet-create";
import { TweetList } from "@/features/tweets";
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Post</PageTitle>
    <TweetSingle />
    <TweetReplyForm />
    <TweetList />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
    </template>
  </ThreeColumnLayout>
</template>
