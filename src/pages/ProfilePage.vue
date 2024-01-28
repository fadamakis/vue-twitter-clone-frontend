<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetList } from "@/features/tweets";
import { ProfileUserInfo } from "@/features/profile";
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Profile</PageTitle>
    <Suspense>
      <ProfileUserInfo />
    </Suspense>
    <TweetList />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
    </template>
  </ThreeColumnLayout>
</template>
