<script setup lang="ts">
import NotificationFollow from "./NotificationFollow.vue";
import NotificationLike from "./NotificationLike.vue";
import NotificationRepost from "./NotificationRepost.vue";
import EmptyState from "@/components/EmptyState.vue";

defineProps(["notifications"]);

const componentsMap = {
  LIKE: NotificationLike,
  FOLLOW: NotificationFollow,
  REPOST: NotificationRepost,
};
</script>
<template>
  <template v-for="notification in notifications">
    <component :is="componentsMap[notification.type]" :notification="notification" />
  </template>
  <EmptyState v-if="!notifications.length" />
</template>
