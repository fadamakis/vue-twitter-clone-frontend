<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetList } from "@/features/tweets";
import { TweetCreateForm } from "@/features/tweet-create";
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Home</PageTitle>
    <TweetCreateForm />
    <TweetList />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>
