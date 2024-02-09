<script setup lang="ts">
import NotificationFollow from "./NotificationFollow.vue";
import NotificationLike from "./NotificationLike.vue";
import NotificationRepost from "./NotificationRepost.vue";
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
  <NotificationLike v-for="i in 3" />
  <NotificationRepost v-for="i in 3" />
</template>
