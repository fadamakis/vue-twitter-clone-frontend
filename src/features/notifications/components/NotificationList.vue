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
  <div v-if="!notifications.length" class="empty-state">Nothing's here...yet!</div>
</template>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  justify-content: center;
  padding: spacing(5);
  font-size: $font-size-3;
}
</style>
