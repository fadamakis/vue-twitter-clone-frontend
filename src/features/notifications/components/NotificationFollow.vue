<script setup>
import AppIcon from "@/components/AppIcon.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <RouterLink to="/profile">
    <div class="notification">
      <AppIcon icon="person-fill" size="5x" fill="#23b7d9" />
      <p><strong>Fotis Adamakis</strong> followed you</p>
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
