<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { NotificationList, notificationsApiCall } from "@/features/notifications";

const notifications = await notificationsApiCall();
</script>

<template>
  <PageTitle>Notifications</PageTitle>
  <NotificationList :notifications="notifications" />
</template>
