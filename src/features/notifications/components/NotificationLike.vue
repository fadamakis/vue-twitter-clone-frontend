<script setup>
import AppIcon from "@/core-ui/components/AppIcon.vue";
import { RouterLink } from "vue-router";
defineProps(["notification"]);
</script>
<template>
  <RouterLink :to="`/status/${notification?.tweetId}`">
    <div class="notification">
      <AppIcon icon="heart-fill" size="4x" fill="#fa5555" />
      <p>
        <strong>{{ notification.sender.name }}</strong> liked your post
      </p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.notification {
  display: flex;
  align-items: center;
  gap: spacing(3);
  padding: spacing(3);
  border-bottom: 1px solid $color-border;
  &:hover {
    background-color: $color-light;
  }
}
</style>
