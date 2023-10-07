<script setup lang="ts">
import AppIcon from "@/components/AppIcon.vue";
</script>
<template>
  <div class="tweet-additional-actions">
    <AppIcon icon="image" />
    <AppIcon icon="filetype-gif" />
    <AppIcon icon="list-ol" />
    <AppIcon icon="emoji-smile" />
    <AppIcon icon="calendar" />
  </div>
</template>

<style lang="scss" scoped>
.tweet-additional-actions {
  display: flex;
  flex: 1;
  gap: 0 spacing(5);
  color: $color-gray;
  font-size: $font-size-2;
  fill: $color-primary;
}
</style>
