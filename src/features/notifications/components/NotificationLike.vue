<script setup>
import AppIcon from "@/components/AppIcon.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <RouterLink to="/status/a">
    <div class="notification">
      <AppIcon icon="heart-fill" size="4x" fill="#fa5555" />
      <p><strong>Fotis Adamakis</strong> liked your post</p>
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
