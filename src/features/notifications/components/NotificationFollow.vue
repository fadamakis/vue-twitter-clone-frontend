<script setup>
import AppIcon from "@/core-ui/components/AppIcon.vue";
import { RouterLink } from "vue-router";
defineProps(["notification"]);
</script>
<template>
  <RouterLink :to="notification.sender.username">
    <div class="notification">
      <AppIcon icon="person-fill" size="4x" fill="#23b7d9" />
      <p>
        <strong>{{ notification.sender.name }}</strong> followed you
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
