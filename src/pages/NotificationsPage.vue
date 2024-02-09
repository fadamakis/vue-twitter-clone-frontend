<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { NotificationList, notificationsApiCall } from "@/features/notifications";

const notifications = await notificationsApiCall();
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Notifications</PageTitle>
    <NotificationList :notifications="notifications" />
    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>
