<script setup>
import AppIcon from "@/core-ui/components/AppIcon.vue";
</script>

<template>
  <div class="empty-state">
    <AppIcon icon="wind" size="4x" />
    <slot>Nothing's here...</slot>
  </div>
</template>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: spacing(3);
  padding: spacing(5);
  font-size: $font-size-2;
  font-style: italic;
}
</style>
