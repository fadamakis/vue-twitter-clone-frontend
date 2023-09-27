<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget } from "@/features/trends";
import { WhoToFollowWidget } from "@/features/who-to-follow";
import { SearchWidget } from "@/features/search";
import { TweetList } from "@/features/timeline";
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
